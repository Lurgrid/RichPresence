const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc"});
const date = new Date(8600);

const activity = {
    details : "SAG BOT",
    assets: {
        large_image: "image_1",
        large_text: "By Lurgrid",
    },
    buttons: [
        {
            "label": "Add In Your Server",
            "url":"https://discord.com/api/oauth2/authorize?client_id=827533997932150795&permissions=8&scope=bot"
        },
        {
            "label": "Server Minecraft",
            "url": "http://www.sagbot.xyz"
        }
    ],
    timestamps: {start: date.getTime()},
    instance: true
};

client.on("ready", () => {
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
    console.log('MINECRAFT');
})

client.login({ clientId: "827533997932150795"});