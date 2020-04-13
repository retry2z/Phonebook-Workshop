import CONSTANTS from '../config/config.js';
import commons from './commons.js';

const homeViewHandler = async (context) => {
    await commons(context);

    if (sessionStorage.getItem(CONSTANTS.UID)) {
        context.redirect(CONSTANTS.OverviewLocation);
    } else {
        await context.partial('./views/user/login.hbs');
    }
};

const notFoundViewHandler = async (context) => {
    await commons(context);
    await context.partial('./views/home/notFound.hbs');
};


export default {
    get: {
        home: homeViewHandler,
        notFound: notFoundViewHandler,
    },

}