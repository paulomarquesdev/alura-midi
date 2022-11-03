const buttonPom = document.querySelector(".tecla_pom");
const buttonClap = document.querySelector(".tecla_clap");
const buttonTim = document.querySelector(".tecla_tim");
const buttonPuff = document.querySelector(".tecla_puff");
const buttonSplash = document.querySelector(".tecla_splash");
const buttonToim = document.querySelector(".tecla_toim");
const buttonPsh = document.querySelector(".tecla_psh");
const buttonTic = document.querySelector(".tecla_tic");
const buttonTom = document.querySelector(".tecla_tom");

function playSong(tipoSong){
    const song = document.querySelector(`#som_tecla_${tipoSong}`);
    return song.play()
};

buttonPom.addEventListener('click', () => {
    playSong("pom")
})
buttonClap.addEventListener('click', () => {
    playSong("clap")
})
buttonTim.addEventListener('click', () => {
    playSong("tim")
})
buttonPuff.addEventListener('click', () => {
    playSong("puff")
})
buttonSplash.addEventListener('click', () => {
    playSong("splash")
})
buttonToim.addEventListener('click', () => {
    playSong("toim")
})
buttonPsh.addEventListener('click', () => {
    playSong("psh")
})
buttonTic.addEventListener('click', () => {
    playSong("tic")
})
buttonTom.addEventListener('click', () => {
    playSong("tom")
})