import path from '../controllers/index.js';
import CONSTANTS from '../config/config.js';


// initialize the application
const app = Sammy(CONSTANTS.MAIN, function () {
    // include a plugin
    this.use('Handlebars', 'hbs');

    // Initialize Firebase
    firebase.initializeApp(CONSTANTS.FIREBASE);

    //HOME <--
    this.get('#/', path.home.get.home);
    this.get('#/home', path.home.get.home);


    //USER < --    
    this.get('#/user/login', path.user.get.login);
    this.get('#/user/logout', path.user.get.logout);
    this.get('#/user/register', path.user.get.register);
    this.get('#/user/profile', path.user.get.profile);

    this.post('#/user/login', path.user.post.login);
    this.post('#/user/register', path.user.post.register);
    this.post('#/user/update', path.user.post.update);


    this.before(path.user.observer);


    //PRODUCT
    this.get('#/product/overview', path.product.get.overview);
    this.get('#/product/create', path.product.get.create);
    this.get('#/product/details/:id', path.product.get.details);
    this.get('#/product/remove/:id', path.product.get.remove);

    this.post('#/product/create', path.product.post.create);
    this.post('#/product/update/:id', path.product.post.update);


    //Not found 
    this.get('#/:id', path.home.get.notFound);
});

// start the application
app.run('#/home');



//     <script src="./node_modules/jquery/dist/jquery.js"></script>
//     <script src="./node_modules/handlebars/dist/handlebars.js"></script>
//     <script src="./node_modules/sammy/lib/sammy.js"></script>
//     <script src="./node_modules/sammy/lib/plugins/sammy.handlebars.js"></script>
//     <script src="./node_modules/popper.js/dist/umd/popper.js"></script>
//     <script src="./node_modules/bootstrap/dist/js/bootstrap.js"></script>