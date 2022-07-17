const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const campaignSchema = new Schema({
  vk: {
    keyboard: {
      typeKeyboard: String,
      buttons: [{ typeButton: String, title: String, date: Number, link: String }],
    },
    text: String,
  },
  tg: {
    keyboard: {
      typeKeyboard: String,
      buttons: [{ typeButton: String, title: String, date: Number, link: String }],
    },
    text: String,
  },
  wa: {
    keyboard: {
      typeKeyboard: String,
      buttons: [{ typeButton: String, title: String, date: Number, link: String }],
    },
    text: String,
  },
  sms: {
    text: String,
  },
});

const conn = 'mongodb://localhost:27017/test-campaign';
const connection = mongoose.connect(conn, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const Сampaign = mongoose.model('Сampaign', campaignSchema);
module.exports = {
  Сampaign,
};
