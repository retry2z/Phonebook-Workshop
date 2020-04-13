import commons from './commons.js';
import CONSTANTS from '../config/config.js';
import models from '../models/index.js';
import Contact from '../models/schemas/Contact.js';


//GET
const overviewViewHandler = async (context) => {
    await commons(context);
    context.partials.item = await context.load('./views/product/item.hbs');
    const response = await models.product.getAll(sessionStorage.getItem(CONSTANTS.UID));

    context.products = response.docs
        .map(doc => {
            return { ...doc.data(), id: doc.id }
        });
    context.partial('./views/product/overview.hbs');
};

const createViewHandler = async (context) => {
    await commons(context);
    await context.partial('./views/product/create.hbs');
};

const detailsViewHandler = async (context) => {
    await commons(context);
    const response = await models.product.get(sessionStorage.getItem(CONSTANTS.UID), context.params.id);
    const item = { ...response.data(), id: response.id };

    context.product = item;
    context.owner = sessionStorage.getItem(CONSTANTS.UID) === item.owner;

    context.partial('./views/product/details.hbs');
};

const removeModelHandler = async (context) => {
    await models.product.delete(sessionStorage.getItem(CONSTANTS.UID), context.params.id);
    models.notify.done(CONSTANTS.NOTIFICATION.close);
    context.redirect(CONSTANTS.OverviewLocation);
};


//POST
const createModelHandler = (context) => {
    try {
        const content = new Contact({ ...context.params });

        models.product.post(sessionStorage.getItem(CONSTANTS.UID), content)
            .then(() => {
                models.notify.done(CONSTANTS.NOTIFICATION.product);
                context.redirect(CONSTANTS.OverviewLocation);
            });
    }
    catch (error) {
        models.notify.error(error.message);
    }
};

const updateModelHandler = (context) => {
    try {
        const content = new Contact({ ...context.params });

        models.product.patch(sessionStorage.getItem(CONSTANTS.UID), context.params.id, content)
            .then(() => {
                models.notify.done(CONSTANTS.NOTIFICATION.update);
                context.redirect(CONSTANTS.OverviewLocation);
            });
    }
    catch (error) {
        models.notify.error(error.message);
    }
};


export default {
    get: {
        overview: overviewViewHandler,
        create: createViewHandler,
        details: detailsViewHandler,
        remove: removeModelHandler,
    },

    post: {
        create: createModelHandler,
        update: updateModelHandler,
    },
}