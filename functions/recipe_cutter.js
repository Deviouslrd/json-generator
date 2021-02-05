const fs = require('fs');

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    var result = document.getElementById("result").value;
    var itemNamespace;
    var count = parseFloat(document.getElementById("count").value);

    if (document.getElementById("namespace").value === ``) {
        itemNamespace = document.getElementById("modName").value;
    } else {
        itemNamespace = document.getElementById("namespace").value;
    }

    localStorage.modName = modName;
    localStorage.blockName = blockName;
    localStorage.result = result;
    localStorage.namespace = itemNamespace;
    localStorage.count = count;
    
    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    blockName = blockName.toLowerCase().trim().split(/ +/).join('_');
    modName = modName.toLowerCase().trim().split(/ +/).join('_');
    result = result.toLowerCase().trim().split(/ +/).join('_');
    itemNamespace = itemNamespace.toLowerCase().split(/ +/).join('_');

    let finalBlock = blockName;

    function brickSlice () {
        const blockLength = blockName.length - 6;
        const blockSubStr = blockName.substring(blockLength);
  
        if (blockSubStr === 'bricks') {
            finalBlock = blockName.substring(0, blockName.length - 1);
        }
    }

    if (!fs.existsSync(`${filepath}\\data\\${modName}\\recipes`)) {
        fs.mkdir(`${filepath}\\data\\${modName}\\recipes`, { recursive: true}, (err) => {
            if (err) throw err;
            console.log('Made the stonecutting folder structure.');
        });
    }

    setTimeout(() => {
        // Block Creator
        if (document.getElementById("block").checked === true) {
            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${itemNamespace}:${blockName}`
                },
                result: `${modName}:${result}`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${result}_stonecutter.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the block stonecutter recipe.');
            });
        }

        // Slab Creator
        if (document.getElementById("slab").checked === true) {
            brickSlice();

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${itemNamespace}:${blockName}`
                },
                result: `${modName}:${result}_slab`,
                count: 2
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${result}_slab_stonecutter.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the slab stonecutter recipe.');
            });
        }

        // Stairs Creator
        if (document.getElementById("stairs").checked === true) {
            brickSlice();

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${itemNamespace}:${blockName}`
                },
                result: `${modName}:${result}_stairs`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${result}_stairs_stonecutter.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the stairs stonecutter recipe.');
            });
        }

        // Pillar Creator
        if (document.getElementById("pillar").checked === true) {
            brickSlice();

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${itemNamespace}:${blockName}`
                },
                result: `${modName}:${result}_pillar`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${result}_pillar_stonecutter.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the pillar stonecutter recipe.');
            });
        }

        // Wall Creator
        if (document.getElementById("wall").checked === true) {
            brickSlice();
            
            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${itemNamespace}:${blockName}`
                },
                result: `${modName}:${result}_wall`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${result}_wall_stonecutter.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the wall stonecutter recipe.');
            });
        }

        if (document.getElementById("block").checked === false &&
        document.getElementById("slab").checked === false &&
        document.getElementById("stairs").checked === false &&
        document.getElementById("wall").checked === false &&
        document.getElementById("pillar").checked === false) {
            return document.getElementById("errorholder").innerHTML = "Error: No boxes were selected!";
        }

        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("errorholder").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
        
    }, 10);
};

