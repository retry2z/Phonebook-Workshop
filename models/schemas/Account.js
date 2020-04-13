export default class Account {
    constructor(obj) {
        this.init(obj);
    }

    init(data) {
        for (const key in data) {
            this['_' + key] = data[key];
        }
    }

    set _password(data) {
        const pattern = /\w{6,}/g;
        if (pattern.test(data)) {
            this.password = data;
        } else {
            throw new TypeError('Password must have 6 symbols at least');
        }
    }

    set _rePassword(data) {
        if (data !== this.password) {
            this.password = null;
            throw new TypeError('Password not match');
        }
    }

    set _username(data) {
        const patternLength = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
        if (!patternLength.test(data)) {
            throw new TypeError('Invalid email address');
        }
        this.email = data;
    }

    set _displayName(data) {
        if (data) {
            this.displayName = data;
        }
    }

    set _photoURL(data) {
        if (data) {
            this.photoURL = data;
        }
    }
}
