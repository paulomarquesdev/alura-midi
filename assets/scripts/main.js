const listaTeclas = document.querySelectorAll(".tecla");

listaTeclas.forEach(tecla => {
    tecla.addEventListener('click', ()=>{
        const typeSong = tecla.textContent.toLocaleLowerCase();
        playSong(typeSong);
    });
});

function playSong(tipoSong){
    const song = document.querySelector(`#som_tecla_${tipoSong}`);
    return song.play()
};