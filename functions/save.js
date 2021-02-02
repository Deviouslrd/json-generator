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

        if (localStorage.xp && document.getElementById("xpAmount")) {
            document.getElementById("xpAmount").value = localStorage.xp;
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
        

        // Block Model Radio Handler
        if (localStorage.bmodelMode === "all" && document.getElementById("mainLabel")) {
            document.getElementById("all").checked = true;
            document.getElementById("sideTexture").setAttribute("disabled", "true");
            document.getElementById("topTexture").setAttribute("disabled", "true");
            document.getElementById("westTexture").setAttribute("disabled", "true");
            document.getElementById("southTexture").setAttribute("disabled", "true");
            document.getElementById("eastTexture").setAttribute("disabled", "true");
        
            document.getElementById("mainLabel").innerHTML = "Main Texture";
        }

        if (localStorage.bmodelMode === "three" && document.getElementById("mainLabel")) {
            document.getElementById("threeMain").checked = true;
            document.getElementById("sideTexture").removeAttribute("disabled");
            document.getElementById("topTexture").removeAttribute("disabled");
            document.getElementById("westTexture").setAttribute("disabled", "true");
            document.getElementById("southTexture").setAttribute("disabled", "true");
            document.getElementById("eastTexture").setAttribute("disabled", "true");
        
            document.getElementById("mainLabel").innerHTML = "Bottom Texture";
            document.getElementById("sideLabel").innerHTML = "Side Texture";
        }

        if (localStorage.bmodelMode === "six" && document.getElementById("mainLabel")) {
            document.getElementById("directional").checked = true;
            document.getElementById("sideTexture").removeAttribute("disabled");
            document.getElementById("topTexture").removeAttribute("disabled");
            document.getElementById("westTexture").removeAttribute("disabled");
            document.getElementById("southTexture").removeAttribute("disabled");
            document.getElementById("eastTexture").removeAttribute("disabled");
        
            document.getElementById("mainLabel").innerHTML = "Bottom Texture";
            document.getElementById("sideLabel").innerHTML = "North Texture";
        }

        // Block Model Multi-texture handler
        if (localStorage.topTexture && document.getElementById("topTexture")) {
            document.getElementById("topTexture").value = localStorage.topTexture;
        }

        if (localStorage.sideTexture && document.getElementById("sideTexture")) {
            document.getElementById("sideTexture").value = localStorage.sideTexture;
        }

        if (localStorage.eastTexture && document.getElementById("eastTexture")) {
            document.getElementById("eastTexture").value = localStorage.eastTexture;
        }

        if (localStorage.southTexture && document.getElementById("southTexture")) {
            document.getElementById("southTexture").value = localStorage.southTexture;
        }

        if (localStorage.westTexture && document.getElementById("westTexture")) {
            document.getElementById("westTexture").value = localStorage.westTexture;
        }

        // Crafting Tables
        if (localStorage.tableMode === "shaped" && document.getElementById("shaped")) {
            document.getElementById("shaped").checked = true;
            document.getElementById("rightBottom").classList.remove("craftdisabled");
            document.getElementById("centerBottom").classList.remove("craftdisabled");
            document.getElementById("leftBottom").classList.remove("craftdisabled");
            document.getElementById("rightCenter").classList.remove("craftdisabled");
            document.getElementById("rightTop").classList.remove("craftdisabled");
        
            document.getElementById("v").removeAttribute("disabled");
            document.getElementById("w").removeAttribute("disabled");
            document.getElementById("x").removeAttribute("disabled");
            document.getElementById("y").removeAttribute("disabled");
            document.getElementById("z").removeAttribute("disabled");
        }

        if (localStorage.tableMode === "shapeless" && document.getElementById("shapeless")) {
            document.getElementById("shapeless").checked = true;
            document.getElementById("rightBottom").classList.remove("craftdisabled");
            document.getElementById("centerBottom").classList.remove("craftdisabled");
            document.getElementById("leftBottom").classList.remove("craftdisabled");
            document.getElementById("rightCenter").classList.remove("craftdisabled");
            document.getElementById("rightTop").classList.remove("craftdisabled");
        
            document.getElementById("v").removeAttribute("disabled");
            document.getElementById("w").removeAttribute("disabled");
            document.getElementById("x").removeAttribute("disabled");
            document.getElementById("y").removeAttribute("disabled");
            document.getElementById("z").removeAttribute("disabled");
        }

        if (localStorage.tableMode === "inventory" && document.getElementById("inventory")) {
            document.getElementById("inventory").checked = true;
            document.getElementById("rightBottom").classList.add("craftdisabled");
            document.getElementById("centerBottom").classList.add("craftdisabled");
            document.getElementById("leftBottom").classList.add("craftdisabled");
            document.getElementById("rightCenter").classList.add("craftdisabled");
            document.getElementById("rightTop").classList.add("craftdisabled");
        
            document.getElementById("v").setAttribute("disabled", "true");
            document.getElementById("w").setAttribute("disabled", "true");
            document.getElementById("x").setAttribute("disabled", "true");
            document.getElementById("y").setAttribute("disabled", "true");
            document.getElementById("z").setAttribute("disabled", "true");
        }
    }, 25);

}

document.getElementById("generateBtn").addEventListener('click', () => {
    localStorage.blockName = document.getElementById("blockName").value;
    localStorage.modName = document.getElementById("modName").value;
    localStorage.textureNamespace = document.getElementById("textureNamespace").value;
    localStorage.path = document.getElementById("saveLocation").value; 
});