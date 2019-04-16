const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
      process.env.G_CLIENT_ID,
      process.env.G_CLIENT_SECRET,
      process.env.G_RUI
);

google.options({
      auth: oauth2Client
});

module.exports = oauth2Client;

      