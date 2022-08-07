import { ISendBulkMessage, ISendMessage } from "../services/Messaging";

export interface IMessage {
    sendMessage(args: ISendMessage): Promise<any>
    sendBulkMessage(args: ISendBulkMessage): Promise<any>
}