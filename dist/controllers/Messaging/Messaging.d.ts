import { IMessage } from "../../interfaces/controllers/Messaging";
import { ISendBulkPayload, ISendPayload } from "../../interfaces/services/Messaging";
export default class Messaging implements IMessage {
    api_key: string;
    secret_key: string;
    constructor(api_key: string, secret_key: string);
    sendMessage(args: ISendPayload): Promise<any>;
    sendBulkMessage(args: ISendBulkPayload): Promise<any>;
}
