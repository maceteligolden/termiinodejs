# Termii NodeJS SDK

## Setup

```bash 
npm install @goldenmaceteli/termiinodejs
```

## Available Features

**1**. **Message API**

- SendMessage
- SendBulkMessage
---
## How to use

### Message API
### `Send Meesage`

Sending Single Messages to customers 

```javascript
const Termii = require('@goldenmaceteli/termiinodejs');

const termii = new Termii(API_KEY, SECRET_KEY);

const sendMessage = async () => {
  try {
    const payload = {
       "to": "2347880234567",
       "from": "talert",
       "sms": "Hi there, testing Termii",
       "type": "plain",
       "channel": "generic",
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
[More details on this feature](https://developers.termii.com/messaging#send-message)
----
## Support
[Report Issue](https://github.com/maceteligolden/termiinodejs/issues)
---
## Todo 
- Send ID API
- Number API
- Template API
- Campaign API
- Send Token
- Voice Token
- Voice Call
- Verify Token
- In-App Token
- Inbox (incoming)
- Events and Report
- Balance
- Search
- Status
- History


## Contact Me
EMAIL: maceteligolden@gmail.com
TWITTER: @golden_eteli

