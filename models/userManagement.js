
export default {
    async login(data) {
        try {
            const { email, password } = data;
            return await firebase.auth().signInWithEmailAndPassword(email, password);
        }
        catch (error) {
            if (error.code.includes('auth')) {
                return error;
            }
            //Log system error
            // models.product.post('System', { ...error });
        }
    },

    async logout() {
        try {
            return await firebase.auth().signOut();
        }
        catch (error) {
            if (error.code.includes('auth')) {
                return error;
            }
            //Log system error

        }
    },


    async register(data) {
        try {
            const { email, password } = data;
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            return user = firebase.auth().currentUser;
        }
        catch (error) {
            if (error.code.includes('auth')) {
                return error;
            }
            //Log system error

        }
    },

    currentUser() {
        const user = firebase.auth().currentUser;
        if (user != null) {
            return {
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                emailVerified: user.emailVerified,
            }
        }
    },

    async update(data) {
        try {
            return await firebase.auth().currentUser.updateProfile(data);
        }
        catch (error) {
            //Log system error
        }
    },

    async changePassword(data) {
        try {
            return await firebase.auth().currentUser.updatePassword(data);
        }
        catch (error) {
            //Log system error
        }
    },

    async observer(callback) {
        await firebase.auth().onAuthStateChanged(callback);
    },

}