export default class Contact {
    constructor(data) {

        this.init(data);
        // this.setNumber = { phone, prefix };
    }

    init(data) {
        for (const key in data) {
            this['_' + key] = data[key];
        }
    }

    set _phone(data) {
        //TODO Prefix        
        const prefixCountries = {
            en: '+44',
            bg: '+359',
            es: '+34',
        }
        const pattern = /^[0-9]{3,}$/g;
        if (pattern.test(data)) {
            this.phone = data;

        } else {
            throw new TypeError('Number must be more than 3 digits');
        }
    }

    set _prefix(data) {
        const prefixCountries = {
            en: '+44',
            bg: '+359',
            es: '+34',
        }

        this.prefix = prefixCountries[data];
        this.typePrefix = data;
    }

    set _firstName(data) {
        const patternLength = /^.{3,20}$/g;
        if (!patternLength.test(data)) {
            throw new TypeError('Name must be between 3 and 20 characters long');
        }

        const pattern = /^[a-zA-Z]+$/g;
        if (pattern.test(data)) {
            this.firstName = data;
        } else {
            throw new TypeError('Name must contain only Latin characters');
        }
    }

    set _lastName(data) {
        if (data.length > 0) {
            const patternLength = /^.{3,20}$/g;
            if (!patternLength.test(data)) {
                throw new TypeError('Last name must be between 3 and 20 characters long');
            }

            const pattern = /^[a-zA-Z]+$/g;
            if (pattern.test(data)) {
                this.lastName = data;
            } else {
                throw new TypeError('Last name must contain only Latin characters');
            }
        }
    }
}

