// This template was made by FusionTerror.
const DiscordRPC = require('discord-rpc'); // Requiring the discord-rpc package.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // Creating a client variable with is our rpc client.
require('dotenv').config(); // Requiring the content of our .env file.

(async () => {
    client.on('ready', async () => { // Calling the ready event.
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            buttons: [{ label: "Twitter", url: "https://twitter.com/LevraiXtasy" }, { label: "Join CIA", url: "https://discord.gg/WxrDCBDUr8" }],
            details: "JOIN CIΛ #CIΛSUPREMACY",
            largeImageKey: "2",
            largeImageText: "Tu fais quoi la ?"
        }).catch(err => console.log(err));

        console.log("DO NOT CLOSE A CONSOLE");
        console.log("NE PAS FERMER LA CONSOLE");
        console.log("https://discord.gg/WxrDCBDUr8");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();