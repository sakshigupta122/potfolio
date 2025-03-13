require('dotenv').config();

module.exports = {
    EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'gmail',
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    PORT: process.env.PORT || 3000
};
