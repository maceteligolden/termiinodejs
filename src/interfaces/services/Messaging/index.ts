export interface ISendMessage {
    "secret_key": string,
    "api_key": string, 
    "to": string,
    "from": string,
    "sms": string,
    "type": string,
    "channel": string,
    "media"?: object | {},
    "media.url"?: object | {},
    "media.caption"?: object | {}
}

export interface ISendBulkMessage {
    "secret_key": string,
    "api_key": string, 
    "to": string,
    "from": string,
    "sms": string,
    "type": string,
    "channel": string,
}