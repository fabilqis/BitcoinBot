const axios = require("axios");
require("dotenv").config();

const DIALOGFLOW_API_URL = process.env.DIALOGFLOW_API_URL;
const DIALOGFLOW_CLIENT_TOKEN = process.env.DIALOGFLOW_CLIENT_TOKEN;

module.exports = {
  reply: (talk, callback) => {
    axios
      .get(
        `https://api.dialogflow.com/v1/query?v=20150910&lang=en&sessionId=12345&query=${talk}`, {
          headers: {
            Authorization: "Bearer " + DIALOGFLOW_CLIENT_TOKEN
          }
        }
      )
      .then(response => callback(null, response.data.result.fulfillment.speech))
      .catch(error => callback(error, null));
  }
};