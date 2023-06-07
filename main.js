const teclas = document.querySelectorAll('button');
const audios = document.querySelectorAll('audio');

for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener('click', function () {
        audios[i].play();
    })
}