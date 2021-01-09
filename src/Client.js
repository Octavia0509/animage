const axios = require('axios').default;
const Discord = require('discord.js');

class Client {

    /**
     * @constructor
     * @description Instantiates the client to use the package
     */

    constructor(client) {
        if(!client) throw new Error("A discord client must be given");
    
        this.client = client;
    };

    /* ===== Méthods ===== */

    /**
     * Send a **dog** image
     * * Specify `true` if the image must be returned in an embed,` false` if not
     * @param {any} message Parameter of the message event
     * @param {boolean} embed If the image is to be returned in an embed
     * @returns {any}
     */
    async dog(message, embed) {
        if(!message) throw new Error("The message parameter is obligatory");

        if(!embed) embed = true;
        if(typeof embed !== "boolean") throw new Error(`The embed parameter must be type of string (Given: ${typeof embed})`);

        await axios({
            method: 'GET',
            url: 'https://some-random-api.ml/img/dog',
            responseType: 'json'
        }).then((body) => {
            if(embed) {
                message.channel.send({ embed: {
                    color: 'RANDOM',
                    image: {
                        url: body.data.link
                    }
                }})
            } else {
                message.channel.send(body.data.link);
            }
        })
    };


};

module.exports = Client;