export interface PlayerModel {
    loadMusic(currentSound: number): void;
    playMusic(): void;
    pauseMusic(): void;
    nextMusic(): void;
    prevMusic(): void;
    pressMute(): void;
    startAutoPlay(): void;
    subscribeAutoPlay(): void;
    timeUpdate(): void;
    pressPlayMusic(): void;
    pressNextMusic(): void;
    pressPrevMusic(): void;
    pressMuteMusic(): void;
    continuePlay(): void;
    init(): void;
}
