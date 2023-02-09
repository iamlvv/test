require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const client = require("twilio")(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

function sendSMS(twilionumber, myphonenumber, content) {
  client.messages
    .create({ twilionumber, myphonenumber, content })
    .then((message) => {
      console.log(
        `SMS message has been sent. Message SID: ${message.sid}`
      );
    })
    .catch((error) => {
      console.error(error);
    });
}
app.post('/gencode', function createNewAccessCode(req, res) {
    const { phone } = req.body;
    const code = Math.floor(100000 + Math.random() * 900000);
    //sendSMS(process.env.TWILIO_PHONE_NUMBER, process.env.MY_PHONE_NUMBER, "Your access code is " + code + "");
    res.send({ code });
});
app.post('/verifycode', function validateAccessCode(req, res) {
    const { phone, code } = req.body;
    res.send({ success: true });
});
//sendSMS(process.env.TWILIO_PHONE_NUMBER, process.env.MY_PHONE_NUMBER, "This is an SMS notification!");
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
