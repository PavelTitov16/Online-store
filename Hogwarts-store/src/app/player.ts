import '../audio/hedwigstheme.mp3';
import '../audio/lilytheme.mp3';
import '../audio/fawkesthephoenix.mp3';
import '../audio/theroomofrequirement.mp3';
import '../audio/awindowtothepast.mp3';
import '../audio/leavinghogwarts.mp3';
import '../audio/harrywondrousworld.mp3';
import { PlayerModel } from '../models/player.model';


export class Player implements PlayerModel {
    public audio = document.querySelector('.audio') as HTMLAudioElement;
    public playBtn = document.querySelector('.play') as HTMLDivElement;
    public prevBtn = document.getElementById('prev') as HTMLDivElement;
    public nextBtn = document.getElementById('next') as HTMLDivElement;
    public muteBtn = document.querySelector('.mute') as HTMLDivElement;
    public progressbar = document.getElementById('progress-bar') as HTMLProgressElement;
    public playList: string[] = [
        'hedwigstheme',
        'lilytheme',
        'fawkesthephoenix',
        'theroomofrequirement',
        'awindowtothepast',
        'leavinghogwarts',
        'harrywondrousworld'
    ];

    public currentSound = 0;
    
    public loadMusic(currentSound: number): void {
        console.log(currentSound);
        this.audio.src = `assets/audio/${this.playList[currentSound]}.mp3` as string;
        this.audio.load();
    }

    public playMusic(): void {
        this.playBtn.classList.add('paused');
        this.audio.play();
    }

    public pauseMusic(): void {
        this.playBtn.classList.remove('paused');
        this.audio.pause();
    }

    public nextMusic(): void {
        this.currentSound++;
        if (this.currentSound > this.playList.length - 1) {
            this.currentSound = 0;
        }
        
        this.loadMusic(this.currentSound);
        this.playMusic();
    }

    public prevMusic(): void {
        this.currentSound--;
        if (this.currentSound < 0) {
            this.currentSound = this.playList.length - 1;
        }
    
        this.loadMusic(this.currentSound);
        this.playMusic();
    }

    public pressMute(): void {
        if (this.audio.muted) {  
            this.audio.muted = false;
        } else {
            this.audio.muted = true;
        }
    }

    public startAutoPlay(): void {
        this.audio.muted = false;
        this.loadMusic(this.currentSound);
        this.playMusic();
    }

    public subscribeAutoPlay(): void {
        window.addEventListener('click', this.startAutoPlay.bind(this), {once:true});
    }

    public timeUpdate(): void {
        this.audio.ontimeupdate = () => {
            if (!Number.isNaN(this.audio.duration)) {
                (this.progressbar as HTMLProgressElement).value = this.audio.currentTime / this.audio.duration;
            }
        };
    }

    public pressPlayMusic(): void {
        this.playBtn.addEventListener('click', ()=> {
            this.loadMusic(this.currentSound);
            if (this.playBtn.classList.contains('paused')) {
                this.pauseMusic();
                
            } else {
                this.playMusic();
            }
        });
    }

    public pressNextMusic(): void {
        this.nextBtn.addEventListener('click', () =>{
            this.nextMusic();
        });
    }

    public pressPrevMusic(): void {
        this.prevBtn.addEventListener('click', () =>{
            this.prevMusic();
        });
    }

    public pressMuteMusic(): void {
        this.muteBtn.addEventListener('click', () => {
            this.pressMute(); 
        });
    }

    public continuePlay(): void {
        this.audio.onended = this.nextMusic;
    }

    public init(): void {
        this.subscribeAutoPlay();
        this.timeUpdate();
        this.pressPlayMusic();
        this.pressNextMusic();
        this.pressPrevMusic();
        this.pressMuteMusic();
        this.continuePlay();
    }
}

