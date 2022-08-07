import { API_URL } from "../../constants/api"
import { ISendMessage } from "../../interfaces/services/Messaging"
import { setSecretKey, TermiiApi } from "../../util/api"

export const sendMessage = async (args: ISendMessage) => {

    //adding secret key to header
    setSecretKey(args.secret_key)

    const payload = {
        "api_key": args.api_key, 
        "to": args.to,
        "from": args.from,
        "sms": args.sms,
        "type": args.type,
        "channel": args.channel,
        "media": args.media,
        "media.url": args["media.url"],
        "media.caption": args["media.caption"]
    }

    const response = await TermiiApi.post(`${API_URL}/sms/send`, payload)

    return response?.data
}