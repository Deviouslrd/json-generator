const fs = require('fs');

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    var result = document.getElementById("result").value;

    localStorage.modName = modName;
    localStorage.blockName = blockName;
    localStorage.result = result;
    
    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    blockName = blockName.toLowerCase().split(/ +/).join('_');
    modName = modName.toLowerCase().split(/ +/).join('_');
    result = result.toLowerCase().split(/ +/).join('_');

    const blockLength = blockName.length;
    const blockLengthStart = blockLength - 6;
    const blockSubStr = blockName.substring(blockLengthStart);
    
    if (blockSubStr === 'bricks') {
        blockName = blockName.substring(0, blockName.length - 1);
    }

    if (!fs.existsSync(`${filepath}\\data\\${modName}\\recipes\\`)) {
        fs.mkdir(`${filepath}\\data\\${modName}\\recipes\\`, { recursive: true}, (err) => {
            if (err) throw err;
            console.log('Made the furnace folder structure.');
        });
    }

    setTimeout(() => {
            const jsonProduct = {
                    type: "minecraft:smelting",
                    ingredient: {
                      item: `${textureNamespace}:${blockName}`
                    },
                    result: `${modName}:${result}`,
                    experience: 1,
                    cooking_time: 200
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${blockName}_furnace.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('made file');

            });
            
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("errorholder").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);

    }, 10);
};