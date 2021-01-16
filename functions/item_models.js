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

    // Everything but walls
    if (document.getElementById("nonWall").checked === true) {

        const jsonProduct = {
            parent: `${modName}:block/${blockName}`
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

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

        fs.writeFile(`${filepath}\\models\\item\\${blockName}.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');

        });
        
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }

    // Wall Model Creator
    if (document.getElementById("isWall").checked === true) {
        const jsonProduct = {
            parent: `minecraft:block/wall_inventory`,
            textures: { wall: `${modName}:block/${blockName}`}
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        if (!fs.existsSync(`${filepath}\\models`)) {
            fs.mkdir(`${filepath}\\models`, (err) => {
                if (err) throw err;
                console.log('Made the model folder.');
            });
        }

        if (!fs.existsSync(`${filepath}\\models\\item`)) {
            fs.mkdir(`${filepath}\\models\\item`, (err) => {
                if (err) throw err;
                console.log('Made the model/item/ folder.');
            });
        }

        fs.writeFileSync(`${filepath}\\models\\item\\${blockName}.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');

        });

        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000 );
    }

    if (document.getElementById("nonWall").checked === false &&
        document.getElementById("isWall").checked === false) {
            document.getElementById("errorholder").innerHTML = "Error: No boxes were selected!";
        }
};