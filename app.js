const huswerkMaken = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken \n ${callback}`);
}

const klaarMetHuiswerk = function () {
    return `Kijk Paps/Mams, ik ben klaar met mijn huiswerk!`;
}

huswerkMaken("wiskunde", klaarMetHuiswerk());

setTimeout(function () {
    huswerkMaken("wiskunde", klaarMetHuiswerk());
}, 2000);