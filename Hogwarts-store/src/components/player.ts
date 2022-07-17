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

export function loadMusic (currentSound: number) {
    audio.src = `./${playList[currentSound]}.mp3` as string;
    audio.load();
}

export function playMusic() {
    playBtn.classList.add('paused');
    audio.play();
    if (audio.ended) {
        nextMusic();
    } 
}

export function pauseMusic() {
    playBtn.classList.remove('paused');
    audio.pause();
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
    if (audio.muted) {  
        audio.muted = false;
    } else {
        audio.muted = true;
    }
}

/*window.addEventListener('load', () => {
    loadMusic(currentSound);
    playMusic();
});*/

playBtn.addEventListener('click', ()=> {
    loadMusic(currentSound);
    if (playBtn.classList.contains('paused')) {
        pauseMusic();
        
    } else {
        playMusic();
    }
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