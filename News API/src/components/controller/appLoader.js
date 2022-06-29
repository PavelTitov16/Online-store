import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'f4cb2e3c3b5c4e2bb1db19fce6f1f2e4', 
        });
    }
}

export default AppLoader;
