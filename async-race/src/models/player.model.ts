export interface PlayerModel {
    loadMusic(currentSound: number): void;
    playMusic(): void;
    pauseMusic(): void;
    nextMusic(): void;
    prevMusic(): void;
    pressMute(): void;
    pressPlayMusic(): void;
    pressNextMusic(): void;
    pressPrevMusic(): void;
    pressMuteMusic(): void;
    continuePlay(): void;
    timeUpdate(): void
    init(): void;
}
