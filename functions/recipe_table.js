function dropdown (id, parent) {
    const test = document.getElementById(id).innerHTML;
    document.getElementById(parent.id).firstElementChild.innerHTML = test;
}

function shapedMode () {
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

    localStorage.tableMode = "shaped";
}

function shapelessMode () {
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

    localStorage.tableMode = "shapeless";
}

function inventoryMode () {
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
    
    localStorage.tableMode = "inventory";
}

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var modName = document.getElementById("modName").value;
    var itemNamespace = document.getElementById("textureNamespace").value;

    localStorage.modName = modName;
    localStorage.textureNamespace = itemNamespace;

    modName = modName.toLowerCase().split(/ +/).join('_');

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

    rInput = rInput.toLowerCase().split(/ +/).join('_');
    sInput = sInput.toLowerCase().split(/ +/).join('_');
    tInput = tInput.toLowerCase().split(/ +/).join('_');
    uInput = uInput.toLowerCase().split(/ +/).join('_');
    vInput = vInput.toLowerCase().split(/ +/).join('_');
    wInput = wInput.toLowerCase().split(/ +/).join('_');
    xInput = xInput.toLowerCase().split(/ +/).join('_');
    yInput = yInput.toLowerCase().split(/ +/).join('_');
    zInput = zInput.toLowerCase().split(/ +/).join('_');

    if (document.getElementById("saveLocation").value === 'No location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }
      
    const jsonProduct = {
        key: {

        }
    };

    if (rInput !== '') {  
        jsonProduct["key"]["R"] = { item: rInput };
    }

    if (sInput !== '') {
        jsonProduct["key"]["S"] = { item: sInput };
    }

    if (tInput !== '') {
        jsonProduct["key"]["T"] = { item: tInput };
    }

    if (uInput !== '') {
        jsonProduct["key"]["U"] = { item: uInput };
    }

    if (vInput !== '') {
        jsonProduct["key"]["V"] = { item: vInput };
    }

    if (wInput !== '') {
        jsonProduct["key"]["W"] = { item: wInput };
    }

    if (xInput !== '') {
        jsonProduct["key"]["X"] = { item: xInput };
    }

    if (yInput !== '') {
        jsonProduct["key"]["Y"] = { item: yInput };
    }

    if (zInput !== '') {
        jsonProduct["key"]["Z"] = { item: zInput };
    }

    const jsonContent = JSON.stringify(jsonProduct, null, 4);
    
    console.log(jsonContent);
    /* None of the below is working yet, leaving that for later once I figure it out.

    let rFinal = rInput;
    let sFinal = sInput;
    let tFinal = tInput;
    let uFinal = uInput;
    let vFinal = vInput;
    let wFinal = wInput;
    let xFinal = xInput;
    let yFinal = yInput;
    let zFinal = zInput;
    
    let finalBlocks = [rInput, sInput, tInput, uInput, vInput,  wInput, xInput, yInput, zInput];

    function brickSlice (block) {
        const blockLength = block.length - 6;
        const blockSubStr = block.substring(blockLength);
        
        if (blockSubStr === 'bricks') {
            return finalBlock = block.substring(0, ingredient.length - 1);
        }
    }

    finalBlocks.forEach(element => {
        brickSlice(finalBlocks);
    });*/

    /*if (document.getElementById("").checked === true) {*/

        /*if (!fs.existsSync(`${filepath}\\recipes`)) {
            fs.mkdir(`${filepath}\\recipes`, (err) => {
                if (err) throw err;
                console.log('Made the  folder.');
            });
        }

        fs.writeFile(`${filepath}\\recipes\\${blockName}.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');

        });
        
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("errorholder").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);*/
    /*}*/
};