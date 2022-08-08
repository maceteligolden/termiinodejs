import Messaging from "./controllers/Messaging/Messaging";
declare class Termii {
    api_key: string;
    secret_key: string;
    Messaging: Messaging;
    constructor(api_key: string, secret_key: string);
}
export default Termii;
