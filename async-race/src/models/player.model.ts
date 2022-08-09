export interface PlayerModel {
    playMusic(sound: number): void;
    pauseMusic(): void;
    nextMusic(): void;
    prevMusic(): void;
    pressMute(): void;
    pressPlayMusic(): void;
    pressNextMusic(): void;
    pressPrevMusic(): void;
    pressMuteMusic(): void;
    timeUpdate(): void
    init(): void;
}
