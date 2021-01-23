const fs = require('fs');

document.getElementById("itemModelForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;
    var textureNamespace;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    if (document.getElementById("textureNamespace").value === ``) {
        textureNamespace = document.getElementById("modName").value;
    } else {
        textureNamespace = document.getElementById("textureNamespace").value;
    }

    localStorage.modName = modName;
    localStorage.blockName = blockName;
    localStorage.textureNamespace = textureNamespace;

    
    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    blockName = blockName.toLowerCase().split(/ +/).join('_');
    modName = modName.toLowerCase().split(/ +/).join('_');
    textureNamespace =  textureNamespace.toLowerCase().split(/ +/).join('_');

    function brickSlice () {
        const blockLength = blockName.length;
        const blockLengthStart = blockLength - 6;
        const blockSubStr = blockName.substring(blockLengthStart);
        
        if (blockSubStr === 'bricks') {
            var finalBlock = blockName.substring(0, blockName.length - 1);
        }
    }

    if (!fs.existsSync(`${filepath}\\assets\\${modName}\\models\\item`)) {
        fs.mkdir(`${filepath}\\assets\\${modName}\\models\\item`, {recursive: true}, (err) => {
            if (err) throw err;
            console.log('Made the models/item/ folder.');
        });
    }

    setTimeout(() => {
        // Block Creator
        if (document.getElementById("block").checked === true) {
            const jsonProduct = {
                parent: `${modName}:block/${blockName}`
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\item\\${blockName}.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the block file');
            });
        }

        // Slab Creator
        if (document.getElementById("slab").checked === true) {
            brickSlice();

            const jsonProduct = {
                parent: `${modName}:block/${blockName}_slab`
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\item\\${blockName}_slab.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the slab file');
            });
        }

        // Stairs Creator
        if (document.getElementById("stairs").checked === true) {
            brickSlice();

            const jsonProduct = {
                parent: `${modName}:block/${blockName}_stairs`
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\item\\${blockName}_stairs.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the stairs file.');
            });
        }

        // Pillar Creator
        if (document.getElementById("pillar").checked === true) {
            brickSlice();

            const jsonProduct = {
                parent: `${modName}:block/${blockName}_pillar`
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\item\\${blockName}_pillar.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the pillar file');
            });
        }

        // Wall Creator
        if (document.getElementById("wall").checked === true) {
            brickSlice();
            
            const jsonProduct = {
                parent: `minecraft:block/wall_inventory`,
                textures: { wall: `${textureNamespace}:block/${blockName}`}
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFileSync(`${filepath}\\assets\\${modName}\\models\\item\\${blockName}_wall.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the wall file');
            });
        }

        if (document.getElementById("block").checked === false &&
            document.getElementById("slab").checked === false &&
            document.getElementById("stairs").checked === false &&
            document.getElementById("wall").checked === false &&
            document.getElementById("pillar").checked === false) {
                return document.getElementById("errorholder").innerHTML = "Error: No boxes were selected!";
        }
        
        document.getElementById("errorholder").innerHTML = "";
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000 );

    }, 10);
};
