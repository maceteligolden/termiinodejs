import { IMessage } from "../../interfaces/controllers/Messaging"
import { ISendBulkMessage, ISendMessage } from "../../interfaces/services/Messaging"
import { sendBulkMessage } from "../../services/Messaging/SendBulkMessage"
import { sendMessage } from "../../services/Messaging/SendMessage"


export default class Messaging implements IMessage {

    api_key: string;
    secret_key: string;

    constructor(api_key: string, secret_key: string){
        this.api_key = api_key;
        this.secret_key = secret_key;
    }

    async sendMessage(args: ISendMessage): Promise<any> {
        try {
            return await sendMessage({
                ...args,
                api_key: this.api_key,
                secret_key: this.secret_key
            })
        } catch (err){
            return err
        }
    }

    async sendBulkMessage(args: ISendBulkMessage): Promise<any> {
        try {
            return await sendBulkMessage({
                ...args,
                api_key: this.api_key,
                secret_key: this.secret_key
            })
        } catch (err){
            return err
        }
    }
}