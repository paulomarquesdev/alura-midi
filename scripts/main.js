const buttonPom = getElement("pom");
const buttonClap = getElement("clap");
const buttonTim = getElement("tim");
const buttonPuff = getElement("puff");
const buttonSplash = getElement("splash");
const buttonToim = getElement("toim");
const buttonPsh = getElement("psh");
const buttonTic = getElement("tic");
const buttonTom = getElement("tom");

const somPom = getElement("pom", "som");
const somClap = getElement("clap", "som");
const somTim = getElement("tim", "som");
const somPuff = getElement("puff", "som");
const somSplash = getElement("splash", "som");
const somToim = getElement("toim", "som");
const somPsh = getElement("psh", "som");
const somTic = getElement("tic", "som");
const somTom = getElement("tom", "som");

function getElement(song, tipo){
    if (tipo=='som'){
        return document.querySelector(`#som_tecla_${song}`);
    } else {
        return document.querySelector(`.tecla_${song}`);
    }
};

buttonPom.addEventListener('click', () => {
    somPom.play()
})
buttonClap.addEventListener('click', () => {
    somClap.play()
})
buttonTim.addEventListener('click', () => {
    somTim.play()
})
buttonPuff.addEventListener('click', () => {
    somPuff.play()
})
buttonSplash.addEventListener('click', () => {
    somSplash.play()
})
buttonToim.addEventListener('click', () => {
    somToim.play()
})
buttonPsh.addEventListener('click', () => {
    somPsh.play()
})
buttonTic.addEventListener('click', () => {
    somTic.play()
})
buttonTom.addEventListener('click', () => {
    somTom.play()
})