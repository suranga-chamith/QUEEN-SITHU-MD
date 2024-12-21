const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=q2Z2iBzK#uAuZlkvi8uiecHg8obrPOAIZJ5gT7BSVdxHxEAs4yqo',
    MONGODB: process.env.MONGODB || 'mongodb+srv://udavin56:1234@cluster0.urhma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
};
