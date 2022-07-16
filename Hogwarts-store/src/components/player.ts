
const playBtn = document.querySelector('.play') as HTMLDivElement;
const prevBtn = document.getElementById('#prev') as HTMLDivElement;
const nextBtn = document.getElementById('#next') as HTMLDivElement;
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
//export const soundMagic = new Audio() as HTMLAudioElement;
audio.src = `http://127.0.0.1:5500/src/audio/${playList[currentSound]}.mp3` as string;

export function loadMusic (currentSound: number) {
    audio.src = `./audio/${playList[currentSound]}.mp3` as string;
    //soundMagic.src = `./audio/${playList[currentSound]}.mp3` as string;
    //soundMagic.load();
    audio.load();
    console.log(audio);
}

export function playMusic() {
    playBtn.classList.add('paused');
    //soundMagic.play();
    audio.play();
}

export function pauseMusic() {
    playBtn.classList.remove('paused');
    audio.pause();
    //soundMagic.pause();
}

export function nextMusic() {
    currentSound++;
    if (currentSound > playList.length) {
        currentSound = 0;
    }
    
    loadMusic(currentSound);
    playMusic();
}

export function prevMusic() {
    currentSound--;
    if (currentSound < 0) {
        currentSound = playList.length - 1;
    }

    loadMusic(currentSound);
    playMusic();
}

export function pressMute() {
    audio.muted ? audio.muted = false : audio.muted = true;
}

window.addEventListener('load', () => {
    loadMusic(currentSound);
    playMusic();
});

playBtn.addEventListener('click', ()=> {
    audio.paused ? playMusic() : pauseMusic();

});

nextBtn.addEventListener('click', () =>{
    nextMusic();

});
prevBtn.addEventListener('click', () =>{
    prevMusic();
   
});

muteBtn.addEventListener('click', () => {
    pressMute(); 
 
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


  