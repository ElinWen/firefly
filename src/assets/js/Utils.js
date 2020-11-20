let Utils = {}
Utils.debounce = function(fn,wait) {
    let timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn.bind(this), wait);
    }
}

export default Utils