const { dialog } = require('electron').remote;

document.getElementById("savebutton").addEventListener('click', async () => {
    localStorage.path = (await dialog.showOpenDialog({ properties: ['openDirectory']})).filePaths[0];
    document.getElementById("saveLocation").value = await localStorage.path;
});

function onLoad() {
    setTimeout(() => {
        // Input boxes present on nearly all pages
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

        // Recipe specific boxes
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

        // Checkbox loaders
        if (localStorage.checkBlock === "true" && document.getElementById("block")) {
            document.getElementById("block").checked = true;
        }

        if (localStorage.checkSlab === "true" && document.getElementById("slab")) {
            document.getElementById("slab").checked = true;
        }

        if (localStorage.checkStairs === "true" && document.getElementById("stairs")) {
            document.getElementById("stairs").checked = true;
        }

        if (localStorage.checkWall === "true" && document.getElementById("wall")) {
            document.getElementById("wall").checked = true;
        }

        if (localStorage.checkPillar === "true" && document.getElementById("pillar")) {
            document.getElementById("pillar").checked = true;
        }

        // Other Boxes
        if (localStorage.triggerName && document.getElementById("triggerName")) {
            document.getElementById("triggerName").value = localStorage.triggerName;
        }
        
    }, 25);

}

document.getElementById("generateBtn").addEventListener('click', () => {
    localStorage.blockName = document.getElementById("blockName").value;
    localStorage.modName = document.getElementById("modName").value;
    localStorage.textureNamespace = document.getElementById("textureNamespace").value;
    localStorage.path = document.getElementById("saveLocation").value; 
});
