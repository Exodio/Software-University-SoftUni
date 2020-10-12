function solve() {

    let selector1;
    let selector2;
    let resultSelector;

    return {
        init: (...allSelectors) => ([selector1, selector2, resultSelector] = allSelectors.map((selector) => document.querySelector(selector))),
        add: () => (resultSelector.value = Number(selector1.value) + Number(selector2.value)),
        subtract: () => (resultSelector.value = Number(selector1.value) - Number(selector2.value)),
    };
}