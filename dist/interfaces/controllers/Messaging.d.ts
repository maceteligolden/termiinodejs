import { ISendBulkPayload, ISendPayload } from "../services/Messaging";
export interface IMessage {
    sendMessage(args: ISendPayload): Promise<any>;
    sendBulkMessage(args: ISendBulkPayload): Promise<any>;
}
