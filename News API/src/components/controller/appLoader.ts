import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '89616b3c014648d4ac3ecb5fea05b48b', 
        });
    }
}

export default AppLoader;
