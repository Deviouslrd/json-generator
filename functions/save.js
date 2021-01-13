const { dialog } = require('electron').remote;

document.getElementById("savebutton").addEventListener('click', async () => {
    localStorage.path = (await dialog.showOpenDialog({ properties: ['openDirectory']})).filePaths[0];
    document.getElementById("saveLocation").value = await localStorage.path;
});

function onLoad() {
    document.getElementById("blockName").value = localStorage.blockName;
    document.getElementById("modName").value = localStorage.modName;
    document.getElementById("saveLocation").value = localStorage.path;
}

const jsonObject = {
    ModName: document.getElementById("modName").value,
    BlockName: document.getElementById("blockName").value
};

const jsonProduct = JSON.stringify(jsonObject, null, 4);

function switchPage() {
    fs.writeFile('../values.json', jsonProduct, (err) => {
        if (err) throw err;
    });
}

document.getElementById("generateBtn").addEventListener('click', () => {
    fs.writeFile('../values.json', jsonProduct, (err) => {
        if (err) throw err;
    });
});