export interface CartModel {
    updatePaymentInfo(): void;
    addToCart(name: string): void;
    removeFromCart(name: string): void;
    subscribeOnUserActions(): void;
}



