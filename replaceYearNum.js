function replaceYearNum() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const yearNum = (currentYear - 25).toString().slice(-2);

    const elements = document.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.childNodes.length > 0) {
            for (let j = 0; j < element.childNodes.length; j++) {
                const node = element.childNodes[j];
                if (node.nodeType === 3) {
                    const text = node.nodeValue;
                    const replacedText = text.replace(/YEARNUM/g, yearNum);
                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                }
            }
        }
    }
}

window.addEventListener('load', () => {
    replaceYearNum();
});