const fs = require('fs');



document.getElementById("itemModelForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    if (!filepath) {
        return console.log('No filepath.');
    } 

    var nameOfBlock = document.getElementById("blockName").value;
    var nameOfMod = document.getElementById("modName").value;
    
    nameOfBlock = nameOfBlock.toLowerCase().split(/ +/).join('_');
    nameOfMod = nameOfMod.toLowerCase().split(/ +/).join('_');

    if (document.getElementById("nonWall").checked === true) {

        const jsonProduct = {
            parent: `${nameOfMod}:block/${nameOfBlock}`
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        if (!fs.existsSync(`${filepath}\\model`)) {
            fs.mkdir(`${filepath}\\model`, (err) => {
                if (err) throw err;
                console.log('Made the model folder.');
            });
        }

        if (!fs.existsSync(`${filepath}\\model\\item`)) {
            fs.mkdir(`${filepath}\\model\\item`, (err) => {
                if (err) throw err;
                console.log('Made the model/item/ folder.');
            });
        }

        fs.writeFile(`${filepath}\\model\\item\\${nameOfBlock}.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');

        });
        
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }

    if (document.getElementById("isWall").checked === true) {
        const jsonProduct = {
            parent: `minecraft:block/wall_inventory`,
            textures: { wall: `${nameOfMod}:block/${nameOfBlock}`}
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        if (!fs.existsSync(`${filepath}\\model`)) {
            fs.mkdir(`${filepath}\\model`, (err) => {
                if (err) throw err;
                console.log('Made the model folder.');
            });
        }

        if (!fs.existsSync(`${filepath}\\model\\item`)) {
            fs.mkdir(`${filepath}\\model\\item`, (err) => {
                if (err) throw err;
                console.log('Made the model/item/ folder.');
            });
        }

        fs.writeFileSync(`${filepath}\\model\\item\\${nameOfBlock}.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');

        });

        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000 );
    }
};