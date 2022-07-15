
const playBtn = document.querySelector('.play') as HTMLDivElement;
const prevBtn = document.getElementById('#prev') as HTMLDivElement;
const nextBtn = document.getElementById('#next') as HTMLDivElement;
const muteBtn = document.querySelector('.mute') as HTMLDivElement;

const playList = [
    'Hedwigs Theme',
    'Lily Theme',
    'Fawkes The Phoenix',
    'The Room of Requirement',
    'A Window to the Past',
    'Leaving Hogwarts',
    'Harry Wondrous World'
];

let currentSound = 0;
const soundMagic = new Audio();

window.addEventListener('load', () => {
    loadMusic(currentSound);
    playMusic();
});

function loadMusic (currentSound: number) {
    soundMagic.src = `./audio/${playList[currentSound]}.mp3`;
}

function playMusic() {
    playBtn.classList.add('paused');
    soundMagic.play();
}

function pauseMusic() {
    playBtn.classList.remove('paused');
    soundMagic.pause();
}

function nextMusic() {
    currentSound++;
    if (currentSound > playList.length) {
        currentSound = 0;
    }
    
    loadMusic(currentSound);
    playMusic();
}

function prevMusic() {
    currentSound--;
    if (currentSound < 0) {
        currentSound = playList.length - 1;
    }

    loadMusic(currentSound);
    playMusic();
}

function pressMute() {
    if (soundMagic.muted) {
        soundMagic.muted = false;
    } else {
        soundMagic.muted = true;
    }
}

playBtn.addEventListener('click', ()=> {
    soundMagic.paused ? playMusic() : pauseMusic();
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