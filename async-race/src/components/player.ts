import '../assets/audio/1.Riders on the Storm.mp3';
import '../assets/audio/2.Get Low.mp3';
import '../assets/audio/3.In A Hood Near You.mp3';
import '../assets/audio/4.24.mp3';
import '../assets/audio/5.I Need Speed.mp3';
import '../assets/audio/6.Nine Thou.mp3';
import '../assets/audio/7.Black Betty.mp3';
import '../assets/audio/8.LAX.mp3';
import '../assets/audio/9.Fired up.mp3';
import '../assets/audio/10.Born Too Slow.mp3';
import '../assets/audio/11.Most Wanted Mash Up.mp3';

import { PlayerModel } from '../models/player.model';

export class Player implements PlayerModel {
  public audio = document.getElementById('audio') as HTMLAudioElement;

  public playBtn = document.getElementById('play') as HTMLDivElement;

  public prevBtn = document.getElementById('prev') as HTMLDivElement;

  public nextBtn = document.getElementById('next') as HTMLDivElement;

  public muteBtn = document.getElementById('mute') as HTMLDivElement;

  public progressbar = document.getElementById('progress-bar') as HTMLProgressElement;

  public playList: string[] = [
    '1.Riders on the Storm',
    '2.Get Low',
    '3.In A Hood Near You',
    '4.24',
    '5.I Need Speed',
    '6.Nine Thou',
    '7.Black Betty',
    '8.LAX',
    '9.Fired up',
    '10.Born Too Slow',
    '11.Most Wanted Mash Up'
  ];

  public limit: number = this.playList.length;

  public currentSound = 0;

  public loadMusic(): void {
    this.audio.src = `assets/audio/${this.playList[this.currentSound]}.mp3` as string;
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
    this.currentSound += 1;
    if (this.currentSound > this.limit) {
      this.currentSound = 0;
    }

    this.loadMusic();
    this.playMusic();
  }

  public prevMusic(): void {
    this.currentSound -= 1;
    if (this.currentSound < 0) {
      this.currentSound = this.limit - 1;
    }

    this.loadMusic();
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
    this.loadMusic();
    this.playMusic();
  }

  public subscribeAutoPlay(): void {
    window.addEventListener('click', this.startAutoPlay.bind(this), { once: true });
  }

  public timeUpdate(): void {
    this.audio.ontimeupdate = () => {
      if (!Number.isNaN(this.audio.duration)) {
        (this.progressbar as HTMLProgressElement)
          .value = this.audio.currentTime / this.audio.duration;
      }
    };
  }

  public pressPlayMusic(): void {
    this.playBtn.addEventListener('click', ()=> {
      this.loadMusic();
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

  public init(): void {
    this.timeUpdate();
    this.pressPlayMusic();
    this.pressNextMusic();
    this.pressPrevMusic();
    this.pressMuteMusic();
    this.subscribeAutoPlay();
  }
}
