export default (el, limitHeight) => {
    if (!el || el.scrollHeight <= limitHeight) return;
    const str = el.innerHtml;
    for (let i = 0; i < str.length; i++) {
        el.innerHtml = str.slice(0, i);
        if (el.scrollHeight > limitHeight) {
            el.innerHtml = `${str.slice(0, i - 3)}...`;
        }
    }
};