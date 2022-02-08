let fs = window.__TAURI__.fs;

function shapedMode () {
    document.getElementById("leftTop").classList.remove("craftdisabled");
    document.getElementById("centerTop").classList.remove("craftdisabled");
    document.getElementById("rightTop").classList.remove("craftdisabled");
    document.getElementById("leftCenter").classList.remove("craftdisabled");
    document.getElementById("center").classList.remove("craftdisabled");
    document.getElementById("rightCenter").classList.remove("craftdisabled");
    document.getElementById("leftBottom").classList.remove("craftdisabled");
    document.getElementById("centerBottom").classList.remove("craftdisabled");
    document.getElementById("rightBottom").classList.remove("craftdisabled");

    document.getElementById("v").removeAttribute("disabled");
    document.getElementById("v").classList.remove("inputdisabled");
    document.getElementById("w").removeAttribute("disabled");
    document.getElementById("w").classList.remove("inputdisabled");
    document.getElementById("x").removeAttribute("disabled");
    document.getElementById("x").classList.remove("inputdisabled");
    document.getElementById("y").removeAttribute("disabled");
    document.getElementById("y").classList.remove("inputdisabled");
    document.getElementById("z").removeAttribute("disabled");
    document.getElementById("z").classList.remove("inputdisabled");

    localStorage.tableMode = "shaped";
}

function shapelessMode () {
    document.getElementById("leftTop").classList.add("craftdisabled");
    document.getElementById("centerTop").classList.add("craftdisabled");
    document.getElementById("rightTop").classList.add("craftdisabled");
    document.getElementById("leftCenter").classList.add("craftdisabled");
    document.getElementById("center").classList.add("craftdisabled");
    document.getElementById("rightCenter").classList.add("craftdisabled");
    document.getElementById("leftBottom").classList.add("craftdisabled");
    document.getElementById("centerBottom").classList.add("craftdisabled");
    document.getElementById("rightBottom").classList.add("craftdisabled");

    document.getElementById("v").removeAttribute("disabled");
    document.getElementById("v").classList.remove("inputdisabled");
    document.getElementById("w").removeAttribute("disabled");
    document.getElementById("w").classList.remove("inputdisabled");
    document.getElementById("x").removeAttribute("disabled");
    document.getElementById("x").classList.remove("inputdisabled");
    document.getElementById("y").removeAttribute("disabled");
    document.getElementById("y").classList.remove("inputdisabled");
    document.getElementById("z").removeAttribute("disabled");
    document.getElementById("z").classList.remove("inputdisabled");

    localStorage.tableMode = "shapeless";
}

function inventoryMode () {
    document.getElementById("leftTop").classList.remove("craftdisabled");
    document.getElementById("centerTop").classList.remove("craftdisabled");
    document.getElementById("rightTop").classList.add("craftdisabled");
    document.getElementById("leftCenter").classList.remove("craftdisabled");
    document.getElementById("center").classList.remove("craftdisabled");
    document.getElementById("rightCenter").classList.add("craftdisabled"); 
    document.getElementById("leftBottom").classList.add("craftdisabled");
    document.getElementById("centerBottom").classList.add("craftdisabled");
    document.getElementById("rightBottom").classList.add("craftdisabled");

    document.getElementById("v").setAttribute("disabled", "true");
    document.getElementById("v").classList.add("inputdisabled");
    document.getElementById("w").setAttribute("disabled", "true");
    document.getElementById("w").classList.add("inputdisabled");
    document.getElementById("x").setAttribute("disabled", "true");
    document.getElementById("x").classList.add("inputdisabled");
    document.getElementById("y").setAttribute("disabled", "true");
    document.getElementById("y").classList.add("inputdisabled");
    document.getElementById("z").setAttribute("disabled", "true");
    document.getElementById("z").classList.add("inputdisabled");
    
    localStorage.tableMode = "inventory";
}

document.getElementById("shaped").addEventListener('click', shapedMode, false);
document.getElementById("shapeless").addEventListener('click', shapelessMode, false);
document.getElementById("inventory").addEventListener('click', inventoryMode, false);

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var modName = document.getElementById("modName").value;
    var itemNamespace;
    var result = document.getElementById("result").value;
    var count = parseInt(document.getElementById("count").value);

    if (document.getElementById("namespace").value === ``) {
        itemNamespace = document.getElementById("modName").value;
    } else {
        itemNamespace = document.getElementById("namespace").value;
    }

    localStorage.modName = modName;
    localStorage.namespace = itemNamespace;
    localStorage.result = result;
    localStorage.count = count;
    localStorage.checkTemplate = document.getElementById("template").checked;

    modName = modName.toLowerCase().replace(/ +/g, '_');
    result = result.toLowerCase().replace(/ +/g, '_');
    itemNamespace = itemNamespace.toLowerCase().replace(/ +/g, '_');

    var leftTop = document.getElementById("leftTop").innerHTML;
    var centerTop = document.getElementById("centerTop").innerHTML;
    var rightTop = document.getElementById("rightTop").innerHTML;
    var leftCenter = document.getElementById("leftCenter").innerHTML;
    var center = document.getElementById("center").innerHTML;
    var rightCenter = document.getElementById("rightCenter").innerHTML;
    var leftBottom = document.getElementById("leftBottom").innerHTML;
    var centerBottom = document.getElementById("centerBottom").innerHTML;
    var rightBottom = document.getElementById("rightBottom").innerHTML;

    localStorage.leftTop = leftTop;
    localStorage.centerTop = centerTop;
    localStorage.rightTop = rightTop;
    localStorage.leftCenter = leftCenter;
    localStorage.center = center;
    localStorage.rightCenter = rightCenter;
    localStorage.leftBottom = leftBottom;
    localStorage.centerBottom = centerBottom;
    localStorage.rightBottom = rightBottom;

    leftTop = leftTop.replace(/[\s.]/, ' ');
    centerTop = centerTop.replace(/[\s.]/, ' ');
    rightTop = rightTop.replace(/[\s.]/, ' ');
    leftCenter = leftCenter.replace(/[\s.]/, ' ');
    center = center.replace(/[\s.]/, ' ');
    rightCenter = rightCenter.replace(/[\s.]/, ' ');
    leftBottom = leftBottom.replace(/[\s.]/, ' ');
    centerBottom = centerBottom.replace(/[\s.]/, ' ');
    rightBottom = rightBottom.replace(/[\s.]/, ' ');

    let inputString = `${leftTop} ${centerTop} ${rightTop} ${leftCenter} ${center} ${rightCenter} ${leftBottom} ${centerBottom} ${rightBottom}`;
    inputString = inputString.replace(/[\s.]/, ' ');

    var rInput = document.getElementById("r").value;
    var sInput = document.getElementById("s").value;
    var tInput = document.getElementById("t").value;
    var uInput = document.getElementById("u").value;
    var vInput = document.getElementById("v").value;
    var wInput = document.getElementById("w").value;
    var xInput = document.getElementById("x").value;
    var yInput = document.getElementById("y").value;
    var zInput = document.getElementById("z").value;

    localStorage.rInput = rInput;
    localStorage.sInput = sInput;
    localStorage.tInput = tInput;
    localStorage.uInput = uInput;
    localStorage.vInput = vInput;
    localStorage.wInput = wInput;
    localStorage.xInput = xInput;
    localStorage.yInput = yInput;
    localStorage.zInput = zInput;

    rInput = rInput.toLowerCase().replace(/ +/g, '_');
    sInput = sInput.toLowerCase().replace(/ +/g, '_');
    tInput = tInput.toLowerCase().replace(/ +/g, '_');
    uInput = uInput.toLowerCase().replace(/ +/g, '_');
    vInput = vInput.toLowerCase().replace(/ +/g, '_');
    wInput = wInput.toLowerCase().replace(/ +/g, '_');
    xInput = xInput.toLowerCase().replace(/ +/g, '_');
    yInput = yInput.toLowerCase().replace(/ +/g, '_');
    zInput = zInput.toLowerCase().replace(/ +/g, '_');

    if (document.getElementById("saveLocation").value === 'No location' || !localStorage.path) {
        return document.getElementById("error").innerHTML = `Error: No save location given!`;
    }

    fs.createDir(`${filepath}\\data\\${modName}\\recipes`, { recursive: true });

    if (document.getElementById("shaped").checked === true) {
        const jsonProduct = {
            type: "minecraft:crafting_shaped",
            pattern: [
                `${leftTop}${centerTop}${rightTop}`,
                `${leftCenter}${center}${rightCenter}`,
                `${leftBottom}${centerBottom}${rightBottom}`
            ],
            key: {

            },
            result: {
                item: `${itemNamespace}:${result}`,
                count: count
            }
        };

        if (rInput !== '' && inputString.includes("R")) {  
            jsonProduct["key"]["R"] = { item: `${itemNamespace}:${rInput}` };
        }
    
        if (sInput !== '' && inputString.includes("S")) {
            jsonProduct["key"]["S"] = { item: `${itemNamespace}:${sInput}` };
        }
    
        if (tInput !== '' && inputString.includes("T")) {
            jsonProduct["key"]["T"] = { item: `${itemNamespace}:${tInput}`};
        }
    
        if (uInput !== '' && inputString.includes("U")) {
            jsonProduct["key"]["U"] = { item: `${itemNamespace}:${uInput}` };
        }
    
        if (vInput !== '' && inputString.includes("V")) {
            jsonProduct["key"]["V"] = { item: `${itemNamespace}:${vInput}` };
        }
    
        if (wInput !== '' && inputString.includes("W")) {
            jsonProduct["key"]["W"] = { item: `${itemNamespace}:${wInput}` };
        }
    
        if (xInput !== '' && inputString.includes("X")) {
            jsonProduct["key"]["X"] = { item: `${itemNamespace}:${xInput}` };
        }
    
        if (yInput !== '' && inputString.includes("Y")) {
            jsonProduct["key"]["Y"] = { item: `${itemNamespace}:${yInput}` };
        }
    
        if (zInput !== '' && inputString.includes("Z")) {
            jsonProduct["key"]["Z"] = { item: `${itemNamespace}:${zInput}` };
        }
    
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${result}.json`}, {}, (err) => {
            if (err) {
                document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                throw err;
            }
        });

        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("error").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }

    if (document.getElementById("shapeless").checked === true) {
        const jsonProduct = {
            type: "minecraft:crafting_shapeless",
            ingredients: [

            ],
            result: {
                item: `${itemNamespace}:${result}`,
                count: count
            }
        };

        if (rInput !== '' && inputString.includes("R")) {  
            jsonProduct["ingredients"].push({ item: `${itemNamespace}:${rInput}` });
        }
    
        if (sInput !== '' && inputString.includes("S")) {
            jsonProduct["ingredients"].push({ item: `${itemNamespace}:${sInput}` });
        }
    
        if (tInput !== '' && inputString.includes("T")) {
            jsonProduct["ingredients"].push({ item: `${itemNamespace}:${tInput}`});
        }
    
        if (uInput !== '' && inputString.includes("U")) {
            jsonProduct["ingredients"].push({ item: `${itemNamespace}:${uInput}` });
        }
    
        if (vInput !== '' && inputString.includes("V")) {
            jsonProduct["ingredients"].push({ item: `${itemNamespace}:${vInput}` });
        }
    
        if (wInput !== '' && inputString.includes("W")) {
            jsonProduct["ingredients"].push({ item: `${itemNamespace}:${wInput}` });
        }
    
        if (xInput !== '' && inputString.includes("X")) {
            jsonProduct["ingredients"].push({ item: `${itemNamespace}:${xInput}` });
        }
    
        if (yInput !== '' && inputString.includes("Y")) {
            jsonProduct["ingredients"].push({ item: `${itemNamespace}:${yInput}` });
        }
    
        if (zInput !== '' && inputString.includes("Z")) {
            jsonProduct["ingredients"].push({ item: `${itemNamespace}:${zInput}` });
        }
    
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${result}.json`}, {}, (err) => {
            if (err) {
                document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                throw err;
            }
        });

        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("error").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }

    if (document.getElementById("inventory").checked === true) {
        const jsonProduct = {
            type: "minecraft:crafting_shaped",
            pattern: [
                `${leftTop}${centerTop}`,
                `${leftCenter}${center}`,
            ],
            key: {

            },
            result: {
                item: `${itemNamespace}:${result}`,
                count: count
            }
        };

        if (rInput !== '') {  
            jsonProduct["key"]["R"] = { item: `${itemNamespace}:${rInput}` };
        }
    
        if (sInput !== '') {
            jsonProduct["key"]["S"] = { item: `${itemNamespace}:${sInput}` };
        }
    
        if (tInput !== '') {
            jsonProduct["key"]["T"] = { item: `${itemNamespace}:${tInput}`};
        }
    
        if (uInput !== '') {
            jsonProduct["key"]["U"] = { item: `${itemNamespace}:${uInput}` };
        }
    
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${result}.json`}, {}, (err) => {
            if (err) {
                document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                throw err;
            }
        });

        document.getElementById("error").classList.remove("errortransition");
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("error").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }
};