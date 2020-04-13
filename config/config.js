export default {
    FIREBASE: {
        apiKey: "AIzaSyC9NaBO-QioikmNAKPjketdbmizGgau8ng",
        authDomain: "phonebook-9152f.firebaseapp.com",
        databaseURL: "https://phonebook-9152f.firebaseio.com",
        projectId: "phonebook-9152f",
        storageBucket: "phonebook-9152f.appspot.com",
        messagingSenderId: "215901432379",
        appId: "1:215901432379:web:d08833012e2d340d4d0a1e",
        measurementId: "G-G0DF8HJ7PP"
    },

    NOTIFICATION: {
        loading: 'Loading...',

        login: 'Login - Successful',
        logout: 'Logout - Successful',
        registration: 'Successful registration.',
        updatePassword: 'Password has been changed.',
        updateProfile: 'Profile - Updated.',

        product: 'Contact successfully created.',
        update: 'Contact - Updated.',
        close: 'Contact - Deleted.',
    },

    //AUTH Credentials
    USER: 'username',
    TOKEN: 'token',
    UID: 'uid',


    //PAGES Configurations <-----------
    //MAIN PARTS
    MAIN: 'main',
    HEADER: './views/common/header.hbs',
    FOOTER: './views/common/footer.hbs',

    //HOME PAGE
    HOME: './views/home/home.hbs',
    HomeLocation: '#/',

    //ABOUT PAGE
    ABOUT: '',
    AboutLocation: '#/about',

    //REGISTER PAGE
    REGISTER: './views/user/register.hbs',
    RegisterLocation: '#/user/register',

    //LOGIN PAGE
    LOGIN: './views/user/login.hbs',
    LoginLocation: '#/user/login',

    //PROFILE PAGE
    PROFILE: './views/user/profile.hbs',
    ProfileLocation: '#/user/profile',

    //CREATE PAGE
    CREATE: './views/product/create.hbs',
    CreateLocation: '#product/create',

    //OVERVIEW PAGE
    OVERVIEW: './views/product/overview.hbs',
    OverviewLocation: '#/product/overview',

    //DETAILS PAGE
    DETAILS: './views/product/details.hbs',
    DetailsLocation: '#/product/details/',
    //PAGES Configurations <-----------
}



