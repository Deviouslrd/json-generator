const { dialog } = require('electron').remote;

/*function saveLocation () {
    dialog.showOpenDialog( { properties: ['openDirectory'] } ).then(data => {
        const filepath = data.filePaths;
        module.exports.filepath = filepath;
        document.getElementById("saveLocation").value = filepath;
    });

}*/

document.getElementById("savebutton").addEventListener('click', async () => {
    localStorage.path = (await dialog.showOpenDialog({ properties: ['openDirectory']})).filePaths[0];
    document.getElementById("saveLocation").value = await localStorage.path;
});