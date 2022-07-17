
const playBtn = document.querySelector('.play') as HTMLDivElement;
const prevBtn = document.getElementById('prev') as HTMLDivElement;
const nextBtn = document.getElementById('next') as HTMLDivElement;
const muteBtn = document.querySelector('.mute') as HTMLDivElement;
const audio = document.querySelector('.audio') as HTMLAudioElement;

export const playList = [
    'hedwigstheme',
    'lilytheme',
    'fawkesthephoenix',
    'theroomofrequirement',
    'awindowtothepast',
    'leavinghogwarts',
    'harrywondrousworld'
];
    
let currentSound = 0;

//audio.src = `http://127.0.0.1:5500/src/audio/${playList[currentSound]}.mp3` as string;


export function loadMusic (currentSound: number) {
    audio.src = `./${playList[currentSound]}.mp3` as string;
    //soundMagic.load();
    console.log('path', audio.src);
    audio.load();
    console.log(audio);
}

export async function playMusic() {
    playBtn.classList.add('paused');
    await audio.play();
    console.log('play', audio);
}

export function pauseMusic() {
    playBtn.classList.remove('paused');
    audio.pause();
    console.log('pause', audio);
}

export function nextMusic() {
    currentSound++;
    if (currentSound > playList.length) {
        currentSound = 0;
    }
    
    loadMusic(currentSound);
    playMusic();
    console.log('++', audio);
}

export function prevMusic() {
    currentSound--;
    if (currentSound < 0) {
        currentSound = playList.length - 1;
    }

    loadMusic(currentSound);
    playMusic();
    console.log('--', audio);
}

export function pressMute() {
    if (audio.muted) {
        !audio.muted;
    } else audio.muted;
    //audio.muted ? audio.muted = false : audio.muted = true;
    console.log('m', audio);
}

/*window.addEventListener('load', () => {
    loadMusic(currentSound);
    playMusic();
});*/

playBtn.addEventListener('click', ()=> {
    loadMusic(currentSound);
    if (audio.paused) {
        playMusic();
    } else pauseMusic();
    //audio.paused ? playMusic() : pauseMusic();
    console.log('pplll', audio);
});

nextBtn.addEventListener('click', () =>{
    nextMusic();
    console.log('nxxxx', audio);

});
prevBtn.addEventListener('click', () =>{
    prevMusic();
    console.log('prrvvvv', audio);
});

muteBtn.addEventListener('click', () => {
    pressMute(); 
    console.log('mmmmmmmmmmm', audio);
});

/*
window.addEventListener('load', () => {
    audio.load();
    fetch(audio.src)
        .then(response => response.blob())
        .then(blob => {
            audio.srcObject = blob;
            return audio.play();
        })
        .then(_ => {
            console.log(audio);
        })
        .catch(e => {
            console.log(e);
        });
});*/


  