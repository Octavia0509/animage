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

    /* ===== Methods ===== */

    /**
     * Send a **dog** image
     * @param {any} message Parameter of the message event
     * @param {boolean} embed If the image is to be returned in an embed
     * * Specify `true` if the image must be returned in an embed,` false` if not
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
            if(embed === true) {
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

    /**
     * Send a **cat** image
     * @param {any} message Parameter of the message event
     * @param {boolean} embed If the image is to be returned in an embed
     * * Specify `true` if the image must be returned in an embed,` false` if not
     * @returns {any}
     */
    async cat(message, embed) {
        if(!message) throw new Error("The message parameter is obligatory");

        if(!embed) embed = true;
        if(typeof embed !== "boolean") throw new Error(`The embed parameter must be type of string (Given: ${typeof embed})`);

        await axios({
            method: 'GET',
            url: 'https://some-random-api.ml/img/cat',
            responseType: 'json'
        }).then((body) => {
            if(embed === true) {
                message.channel.send({ embed: {
                    color: 'RANDOM',
                    image: {
                        url: body.data.link
                    }
                }})
            } else {
                message.channel.send(body.data.link);
            };
        });
    };

    /**
     * Send a **panda** image
     * @param {any} message Parameter of the message event
     * @param {boolean} embed If the image is to be returned in an embed
     * * Specify `true` if the image must be returned in an embed,` false` if not
     * @returns {any}
     */
    async panda(message, embed) {
        if(!message) throw new Error("The message parameter is obligatory");

        if(!embed) embed = true;
        if(typeof embed !== "boolean") throw new Error(`The embed parameter must be type of string (Given: ${typeof embed})`);

        await axios({
            method: 'GET',
            url: 'https://some-random-api.ml/img/panda',
            responseType: 'json'
        }).then((body) => {
            if(embed === true) {
                message.channel.send({ embed: {
                    color: 'RANDOM',
                    image: {
                        url: body.data.link
                    }
                }})
            } else {
                message.channel.send(body.data.link);
            };
        });
    };
    
    /**
     * Send a **koala** image
     * @param {any} message Parameter of the message event
     * @param {boolean} embed If the image is to be returned in an embed
     * * Specify `true` if the image must be returned in an embed,` false` if not
     * @returns {any}
     */
    async koala(message, embed) {
        if(!message) throw new Error("The message parameter is obligatory");

        if(!embed) embed = true;
        if(typeof embed !== "boolean") throw new Error(`The embed parameter must be type of string (Given: ${typeof embed})`);

        await axios({
            method: 'GET',
            url: 'https://some-random-api.ml/img/koala',
            responseType: 'json'
        }).then((body) => {
            if(embed === true) {
                message.channel.send({ embed: {
                    color: 'RANDOM',
                    image: {
                        url: body.data.link
                    }
                }})
            } else {
                message.channel.send(body.data.link);
            };
        });
    };
    
    /**
     * Send a **fox** image
     * @param {any} message Parameter of the message event
     * @param {boolean} embed If the image is to be returned in an embed
     * * Specify `true` if the image must be returned in an embed,` false` if not
     * @returns {any}
     */
    async fox(message, embed) {
        if(!message) throw new Error("The message parameter is obligatory");

        if(!embed) embed = true;
        if(typeof embed !== "boolean") throw new Error(`The embed parameter must be type of string (Given: ${typeof embed})`);

        await axios({
            method: 'GET',
            url: 'https://some-random-api.ml/img/fox',
            responseType: 'json'
        }).then((body) => {
            if(embed === true) {
                message.channel.send({ embed: {
                    color: 'RANDOM',
                    image: {
                        url: body.data.link
                    }
                }})
            } else {
                message.channel.send(body.data.link);
            };
        });
    };
    
    /**
     * Send a **random animal** image
     * @param {any} message Parameter of the message event
     * @returns {any}
     */
    async random(message) {
        if(!message) throw new Error("The message parameter is obligatory");

        const array = [ "dog", "cat", "panda", "koala", "fox" ];
        const randomChoice = array[Math.floor(Math.random() * array.length)];

        await axios({
            method: 'GET',
            url: `https://some-random-api.ml/img/${randomChoice}`,
            responseType: 'json'
        }).then((body) => {
            message.channel.send(`• __Animal :__ **${randomChoice.toUpperCase()}** \n• __Image :__ <${body.data.link}>`, {
                files: [ body.data.link ]
            });
        });
    };

};

module.exports = Client;