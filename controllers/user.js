import models from '../models/index.js';
import Account from '../models/schemas/Account.js';
import CONSTANTS from '../config/config.js';
import commons from './commons.js';

//GET
const loginViewHandler = async (context) => {
    await commons(context);
    await context.partial('./views/user/login.hbs');
};

const registerViewHandler = async (context) => {
    await commons(context);
    await context.partial('./views/user/register.hbs');
};

const profileViewHandler = async (context) => {
    await commons(context);

    context.user = models.user.currentUser();
    await context.partial('./views/user/profile.hbs');
};


const logoutModelHandler = (context) => {
    models.notify.load(CONSTANTS.NOTIFICATION.loading);
    models.user.logout()
        .then(() => {
            models.notify.stop();

            sessionStorage.clear();
            context.redirect(CONSTANTS.HomeLocation);
            models.notify.done(CONSTANTS.NOTIFICATION.logout);
        });
};

//POST
const loginModelHandler = (context) => {
    let account;
    try {
        account = new Account({ ...context.params });
    }
    catch (error) {
        models.notify.error(error.message);
    }

    models.notify.load(CONSTANTS.NOTIFICATION.loading);
    models.user.login(account)
        .then((response) => {
            models.notify.stop();

            if (!!response.message) {
                models.notify.error(response.message);
                return
            }

            sessionStorage.setItem(CONSTANTS.UID, response.user.uid);
            context.redirect(CONSTANTS.HomeLocation);
            models.notify.done(CONSTANTS.NOTIFICATION.login);
        });
};


const registerModelHandler = (context) => {
    let account;
    try {
        account = new Account({ ...context.params });
    }
    catch (error) {
        models.notify.error(error.message);
    }


    models.notify.load(CONSTANTS.NOTIFICATION.loading);
    models.user.register(account)
        .then((response) => {
            models.notify.stop();

            if (!!response.message) {
                models.notify.error(response.message);
                return
            }


            response.sendEmailVerification()
                .then(function () {
                    // Email sent.
                    console.log('email send');
                });

            sessionStorage.setItem(CONSTANTS.UID, response.user.uid);
            context.redirect(CONSTANTS.OverviewLocation);
            models.notify.done(CONSTANTS.NOTIFICATION.registration);
        })
        .catch(err => models.notify.error(err.message));
};


const updateProfileModelHandler = (context) => {
    let content;
    try {
        content = new Account({
            displayName: context.params.displayName,
            photoURL: context.params.photoURL
        });

        models.user.update({ ...content })
            .then(() => {
                context.redirect(CONSTANTS.ProfileLocation);
                models.notify.done(CONSTANTS.NOTIFICATION.updateProfile);
            });

    }
    catch (error) {
        models.notify.error('ERROR');
        return
    }


    if (!!context.params.password) {
        try {
            content = new Account({ ...context.params });
            models.user.changePassword(content.password);
        }
        catch (error) {
            models.notify.error(error.message);
            return
        }
    }
}

const userObserver = (context) => {
    const handler = (user) => {
        if (user) {
            //Define user permissions.

            context.username = user.email;
            context.profile = user;

        } else {
            //User Logout
        }
    }
    models.user.observer(handler);
};


export default {
    get: {
        login: loginViewHandler,
        logout: logoutModelHandler,
        register: registerViewHandler,
        profile: profileViewHandler,
    },

    post: {
        login: loginModelHandler,
        register: registerModelHandler,
        update: updateProfileModelHandler,
    },

    observer: userObserver,
}