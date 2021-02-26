import dialog, { remote } from 'electron';

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
            
        if (localStorage.namespace && document.getElementById("namespace")) {
            document.getElementById("namespace").value = localStorage.namespace;
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
        
        if (localStorage.namingConvention && document.getElementById("mojang")) {
            document.getElementById("mojang").checked = true;
        }

        if (localStorage.namingConvention && document.getElementById("custom")) {
            document.getElementById("custom").checked = true;
        }

        // Block Model Radio Handler
        if (localStorage.bmodelMode === "all" && document.getElementById("mainLabel")) {
            document.getElementById("all").checked = true;
            document.getElementById("sideTexture").setAttribute("disabled", "true");
            document.getElementById("topTexture").setAttribute("disabled", "true");
            document.getElementById("westTexture").setAttribute("disabled", "true");
            document.getElementById("southTexture").setAttribute("disabled", "true");
            document.getElementById("eastTexture").setAttribute("disabled", "true");
        
            document.getElementById("mainLabel").innerHTML = "Main Texture:";
        }

        if (localStorage.bmodelMode === "three" && document.getElementById("mainLabel")) {
            document.getElementById("threeMain").checked = true;
            document.getElementById("sideTexture").removeAttribute("disabled");
            document.getElementById("topTexture").removeAttribute("disabled");
            document.getElementById("westTexture").setAttribute("disabled", "true");
            document.getElementById("southTexture").setAttribute("disabled", "true");
            document.getElementById("eastTexture").setAttribute("disabled", "true");
        
            document.getElementById("mainLabel").innerHTML = "Bottom Texture:";
            document.getElementById("sideLabel").innerHTML = "Side Texture:";
        }

        if (localStorage.bmodelMode === "six" && document.getElementById("mainLabel")) {
            document.getElementById("directional").checked = true;
            document.getElementById("sideTexture").removeAttribute("disabled");
            document.getElementById("topTexture").removeAttribute("disabled");
            document.getElementById("westTexture").removeAttribute("disabled");
            document.getElementById("southTexture").removeAttribute("disabled");
            document.getElementById("eastTexture").removeAttribute("disabled");
        
            document.getElementById("mainLabel").innerHTML = "Bottom Texture:";
            document.getElementById("sideLabel").innerHTML = "North Texture:";
        }

        if (localStorage.bmodelMode === "front" && document.getElementById("mainLabel")) {
            document.getElementById("diffFront").checked = true;
            document.getElementById("sideTexture").removeAttribute("disabled");
            document.getElementById("topTexture").removeAttribute("disabled");
            document.getElementById("eastTexture").removeAttribute("disabled");
            document.getElementById("westTexture").setAttribute("disabled", "true");
            document.getElementById("southTexture").setAttribute("disabled", "true");
        
            document.getElementById("mainLabel").innerHTML = "Bottom Texture:";
            document.getElementById("eastLabel").innerHTML = "Front Texture:";
            document.getElementById("sideLabel").innerHTML = "Side Texture:";
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

        if (localStorage.rInput && document.getElementById("r")) {
            document.getElementById("r").value = localStorage.rInput;
        }

        if (localStorage.sInput && document.getElementById("s")) {
            document.getElementById("s").value = localStorage.sInput;
        }

        if (localStorage.tInput && document.getElementById("t")) {
            document.getElementById("t").value = localStorage.tInput;
        }

        if (localStorage.uInput && document.getElementById("u")) {
            document.getElementById("u").value = localStorage.uInput;
        }

        if (localStorage.vInput && document.getElementById("v")) {
            document.getElementById("v").value = localStorage.vInput;
        }

        if (localStorage.wInput && document.getElementById("w")) {
            document.getElementById("w").value = localStorage.wInput;
        }

        if (localStorage.xInput && document.getElementById("x")) {
            document.getElementById("x").value = localStorage.xInput;
        }

        if (localStorage.yInput && document.getElementById("y")) {
            document.getElementById("y").value = localStorage.yInput;
        }

        if (localStorage.zInput && document.getElementById("z")) {
            document.getElementById("z").value = localStorage.zInput;
        }


        if (localStorage.leftTop && document.getElementById("leftTop")) {
            document.getElementById("leftTop").innerHTML = localStorage.leftTop;
        }
        
        if (localStorage.centerTop && document.getElementById("centerTop")) {
            document.getElementById("centerTop").innerHTML = localStorage.centerTop;
        }
        
        if (localStorage.rightTop && document.getElementById("rightTop")) {
            document.getElementById("rightTop").innerHTML = localStorage.rightTop;
        }
        
        if (localStorage.leftCenter && document.getElementById("leftCenter")) {
            document.getElementById("leftCenter").innerHTML = localStorage.leftCenter;
        }
        
        if (localStorage.center && document.getElementById("center")) {
            document.getElementById("center").innerHTML = localStorage.center;
        }
        
        if (localStorage.rightCenter && document.getElementById("rightCenter")) {
            document.getElementById("rightCenter").innerHTML = localStorage.rightCenter;
        }
        
        if (localStorage.leftBottom && document.getElementById("leftBottom")) {
            document.getElementById("leftBottom").innerHTML = localStorage.leftBottom;
        }
        
        if (localStorage.centerBottom && document.getElementById("centerBottom")) {
            document.getElementById("centerBottom").innerHTML = localStorage.centerBottom;
        }
        
        if (localStorage.rightBottom && document.getElementById("rightBottom")) {
            document.getElementById("rightBottom").innerHTML = localStorage.rightBottom;
        }

    }, 25);

}