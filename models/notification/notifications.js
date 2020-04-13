import * as toastr from 'toastr';

const notify = (type, content) => {
    const notification = {
        load: 'loadingNotification',
        done: 'successNotification',
        error: 'errorNotification',
    }
    const element = document.getElementById(notification[type]);

    element.style.display = 'block';
    element.textContent = content;
    setTimeout(() => {
        element.style.display = 'none'
    }, 2600);
}



function notifyStop() {
    document.getElementById('loadingNotification').style.display = 'none';
}

export default {
    done(txt) {
        notify('done', txt);
    },

    error(txt) {
        notify('error', txt);
    },

    load(txt) {
        notify('load', txt);
    },

    stop() {
        notifyStop();
    },
}


