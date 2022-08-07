import Messaging from "./controllers/Messaging/Messaging";

class Termii {

    api_key: string;
    secret_key: string;

    Messaging: Messaging

    constructor(api_key: string, secret_key: string){
        this.api_key = api_key;
        this.secret_key = secret_key;
        this.Messaging = new Messaging(this.api_key, this.secret_key);
    }
}

export default Termii;