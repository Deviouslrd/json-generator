const { dialog } = require('electron').remote;

document.getElementById("savebutton").addEventListener('click', async () => {
    localStorage.path = (await dialog.showOpenDialog({ properties: ['openDirectory']})).filePaths[0];
    document.getElementById("saveLocation").value = await localStorage.path;
});

function onLoad() {
    setTimeout(() => {
        if (localStorage.blockName && document.getElementById("blockName")) {
            document.getElementById("blockName").value = localStorage.blockName;
        }

        if (localStorage.modName && document.getElementById("modName")) {
            document.getElementById("modName").value = localStorage.modName;
        }
            
        if (localStorage.textureNamespace && document.getElementById("textureNamespace")) {
            document.getElementById("textureNamespace").value = localStorage.textureNamespace;
        }

        if (localStorage.path) {
            document.getElementById("saveLocation").value = localStorage.path;
        }

        if (localStorage.result && document.getElementById("result")) {
            document.getElementById("result").value = localStorage.result;
        }

        if (localStorage.count && document.getElementById("count")) {
            document.getElementById("count").value = localStorage.count;
        } 

        if (localStorage.xp && document.getElementById("xp")) {
            document.getElementById("xp").value = localStorage.xp;
        }

        if (localStorage.cookTime && document.getElementById("cookTime")) {
            document.getElementById("cookTime").value = localStorage.cookTime;
        }
    }, 75);

}

document.getElementById("generateBtn").addEventListener('click', () => {
    localStorage.blockName = document.getElementById("blockName").value;
    localStorage.modName = document.getElementById("modName").value;
    localStorage.textureNamespace = document.getElementById("textureNamespace").value;
    localStorage.path = document.getElementById("saveLocation").value; 
});
