
export default {
    async post(url, data) {
        try {
            return await firebase.firestore().collection(url).add({ ...data });
        }
        catch (error) {
            console.log(error);
        }
    },

    async getAll(url) {
        try {
            return await firebase.firestore().collection(url).get();
        }
        catch (error) {
            console.log(error);
        }
    },

    async get(url, id) {
        try {
            return await firebase.firestore().collection(url).doc(id).get();
        }
        catch (error) {
            console.log(error);
        }
    },

    async patch(url, id, data) {
        try {
            return await firebase.firestore().collection(url).doc(id).update({ ...data });
        }
        catch (error) {
            console.log(error);
        }
    },

    async delete(url, id) {
        try {
            return await firebase.firestore().collection(url).doc(id).delete();
        }
        catch (error) {
            console.log(error);
        }
    },
}
