export interface ISendMessage extends ISendPayload {
    "secret_key": string;
    "api_key": string;
}
export interface ISendPayload {
    "to": string;
    "from": string;
    "sms": string;
    "type": string;
    "channel": string;
    "media"?: object | {};
    "media.url"?: object | {};
    "media.caption"?: object | {};
}
export interface ISendBulkMessage extends ISendBulkPayload {
    "secret_key": string;
    "api_key": string;
}
export interface ISendBulkPayload {
    "to": string;
    "from": string;
    "sms": string;
    "type": string;
    "channel": string;
}
