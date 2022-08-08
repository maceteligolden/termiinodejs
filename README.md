#### Termii NodeJS SDK

### Setup

```bash 
npm install termii-node-sdk
```

```javascript
const Termii = require('termii-node-sdk');

const termii = new Termii(API_KEY, SECRET_KEY);
```

## Available Features

**1**. **Message API**

- SendMessage
- SendBulkMessage


# How to use

## Message API
## `Send Meesage`

Sending Single Messages to customers 

```javascript
const Termii = require('termii-node-sdk');

const termii = new Termii(API_KEY, SECRET_KEY);

const sendMessage = async () => {
  try {
    const payload = {
       "to": "2347880234567",
       "from": "talert",
       "sms": "Hi there, testing Termii",
       "type": "plain",
       "channel": "generic",
       "api_key": "Your API Key",
       "media": {
        "url": "https://media.example.com/file",
        "caption": "your media file"
      }    
    };

    const response = await termii.Message.sendMessage(payload);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
<a href="https://developers.termii.com/messaging#send-message" target="_blank"> More details on the feature </a>
