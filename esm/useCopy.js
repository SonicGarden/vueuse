import clipboardCopy from 'clipboard-copy';
export var useCopy = function (text, onSuccess) {
    return function () {
        clipboardCopy(text.value);
        if (onSuccess) {
            onSuccess();
        }
    };
};
