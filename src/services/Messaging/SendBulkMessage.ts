import { API_URL } from "../../constants/api"
import { setSecretKey, TermiiApi } from "../../util/api"
import { ISendBulkMessage } from "../../interfaces/services/Messaging"

export const sendBulkMessage = async (args: ISendBulkMessage) => {

    //adding secret key to header
    setSecretKey(args.secret_key)

    const payload = {
        "api_key": args.api_key, 
        "to": args.to,
        "from": args.from,
        "sms": args.sms,
        "type": args.type,
        "channel": args.channel,
    }

    const response = await TermiiApi.post(`${API_URL}/sms/send/bulk`, payload)

    return response?.data
}