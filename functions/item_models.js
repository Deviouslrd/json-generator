const fs = require('fs');

document.getElementById("itemModelForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;

    localStorage.modName = modName;
    localStorage.blockName = blockName;
    
    if (!filepath || localStorage.path === undefined) {
        return console.log('No filepath.');
    } 

    blockName = blockName.toLowerCase().split(/ +/).join('_');
    modName = modName.toLowerCase().split(/ +/).join('_');

    if (!fs.existsSync(`${filepath}\\models`)) {
        fs.mkdir(`${filepath}\\models`, (err) => {
            if (err) throw err;
            console.log('Made the model folder.');
        });
    }

    if (!fs.existsSync(`${filepath}\\models\\item`)) {
        fs.mkdir(`${filepath}\\models\\item`, (err) => {
            if (err) throw err;
            console.log('Made the models/item/ folder.');
        });
    }

    // Block Creator
    if (document.getElementById("block").checked === true) {

        const jsonProduct = {
            parent: `${modName}:block/${blockName}`
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        fs.writeFile(`${filepath}\\models\\item\\${blockName}.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');
        });
        
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }

    // Slab Creator
    if (document.getElementById("slab").checked === true) {

        const jsonProduct = {
            parent: `${modName}:block/${blockName}`
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        fs.writeFile(`${filepath}\\models\\item\\${blockName}_slab.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');
        });
        
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }

    // Stairs Creator
    if (document.getElementById("stairs").checked === true) {

        const jsonProduct = {
            parent: `${modName}:block/${blockName}`
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        fs.writeFile(`${filepath}\\models\\item\\${blockName}_stairs.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');
        });
        
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }

    // Pillar Creator
    if (document.getElementById("pillar").checked === true) {

        const jsonProduct = {
            parent: `${modName}:block/${blockName}`
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        fs.writeFile(`${filepath}\\models\\item\\${blockName}_pillar.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');
        });
        
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }

    // Wall Creator
    if (document.getElementById("wall").checked === true) {
        const jsonProduct = {
            parent: `minecraft:block/wall_inventory`,
            textures: { wall: `${modName}:block/${blockName}`}
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        fs.writeFileSync(`${filepath}\\models\\item\\${blockName}_wall.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');
        });

        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000 );
    }

    if (document.getElementById("block").checked === false &&
        document.getElementById("slab").checked === false &&
        document.getElementById("stairs").checked === false &&
        document.getElementById("wall").checked === false &&
        document.getElementById("pillar").checked === false) {
            document.getElementById("errorholder").innerHTML = "Error: No boxes were selected!";
        }
};