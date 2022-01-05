let shell = window.__TAURI__.shell;

document.getElementById("gitlink").addEventListener('click', async function gitLink () {
    await shell.open("https://github.com/Deviouslrd/json-generator/tree/tauri");
});


document.getElementById("disclink").addEventListener('click', async () => {
    await shell.open("https://discord.gg/neXPNSY");
});

function helpLink () {
    //Put help page on domain
}

window.onload = async function changeVersion () {
    document.getElementById("header1").innerHTML = `Minecraft JSON Generator Tool v${await window.__TAURI__.app.getVersion()}`;
};