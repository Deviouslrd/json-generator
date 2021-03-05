const fs = require('fs');

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var ingredient = document.getElementById("blockName").value;
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
    localStorage.blockName = ingredient;
    localStorage.result = result;
    localStorage.namespace = itemNamespace;
    localStorage.count = count;
    
    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    ingredient = ingredient.toLowerCase().trim().split(/ +/).join('_');
    modName = modName.toLowerCase().trim().split(/ +/).join('_');
    result = result.toLowerCase().trim().split(/ +/).join('_');
    itemNamespace = itemNamespace.toLowerCase().split(/ +/).join('_');

    let finalBlock = ingredient;

    function brickSlice () {
        const blockLength = ingredient.length - 6;
        const blockSubStr = ingredient.substring(blockLength);
  
        if (blockSubStr === 'bricks') {
            finalBlock = ingredient.substring(0, ingredient.length - 1);
        }
    }

    if (!fs.existsSync(`${filepath}\\data\\${modName}\\recipes`)) {
        fs.mkdir(`${filepath}\\data\\${modName}\\recipes`, { recursive: true}, (err) => {
            if (err) throw err;
            console.log('Made the stonecutting folder structure.');
        });
    }

    let filename;

    if (document.getElementById("mojang").checked === true) {
        filename = `${result}_from_${ingredient}_stonecutting`;
        localStorage.namingConvention = "mojang";
    }

    if (document.getElementById("custom").checked === true) {
        filename = `${result}_stonecutting`;
        localStorage.namingConvention = "custom";
    }

    setTimeout(() => {
        // Slab Creator
        if (document.getElementById("slab").checked === true) {
            brickSlice();

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${itemNamespace}:${ingredient}`
                },
                result: `${modName}:${result}_slab`,
                count: 2
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            let filename;

            if (document.getElementById("mojang").checked === true) {
                filename = `${result}_slab_from_${ingredient}_stonecutting`;
                localStorage.namingConvention = "mojang";
            }
        
            if (document.getElementById("custom").checked === true) {
                filename = `${result}_slab_stonecutting`;
                localStorage.namingConvention = "custom";
            }

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${filename}.json`, jsonContent, 'utf8', (err) => {
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
                    item: `${itemNamespace}:${ingredient}`
                },
                result: `${modName}:${result}_stairs`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            let filename;

            if (document.getElementById("mojang").checked === true) {
                filename = `${result}_stairs_from_${ingredient}_stonecutting`;
                localStorage.namingConvention = "mojang";
            }
        
            if (document.getElementById("custom").checked === true) {
                filename = `${result}_stairs_stonecutting`;
                localStorage.namingConvention = "custom";
            }

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${filename}.json`, jsonContent, 'utf8', (err) => {
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
                    item: `${itemNamespace}:${ingredient}`
                },
                result: `${modName}:${result}_pillar`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            let filename;

            if (document.getElementById("mojang").checked === true) {
                filename = `${result}_pillar_from_${ingredient}_stonecutting`;
                localStorage.namingConvention = "mojang";
            }
        
            if (document.getElementById("custom").checked === true) {
                filename = `${result}_pillar_stonecutting`;
                localStorage.namingConvention = "custom";
            }

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${result}_pillar_stonecutting.json`, jsonContent, 'utf8', (err) => {
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
                    item: `${itemNamespace}:${ingredient}`
                },
                result: `${modName}:${result}_wall`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            let filename;

            if (document.getElementById("mojang").checked === true) {
                filename = `${result}_wall_from_${ingredient}_stonecutting`;
                localStorage.namingConvention = "mojang";
            }
        
            if (document.getElementById("custom").checked === true) {
                filename = `${result}_wall_stonecutting`;
                localStorage.namingConvention = "custom";
            }

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${filename}.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the wall stonecutter recipe.');
            });
        }

        if (//document.getElementById("block").checked === false &&
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