//import * as toastr from 'toastr';

export default {
    done(txt) {
        toastr.success(txt);
    },

    error(txt) {
        toastr.error(txt);
    },

    load(txt) {
        toastr.warning(txt);
    },

    stop() {
        toastr.clear();
    },
}