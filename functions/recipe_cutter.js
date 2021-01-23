const fs = require('fs');

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    var result = document.getElementById("result").value;
    var textureNamespace = document.getElementById("textureNamespace").value;
    var count = document.getElementById("count").value;

    if (document.getElementById("textureNamespace").value === ``) {
        textureNamespace = document.getElementById("modName").value;
    } else {
        textureNamespace = document.getElementById("textureNamespace").value;
    }

    localStorage.modName = modName;
    localStorage.blockName = blockName;
    localStorage.result = result;
    localStorage.textureNamespace = textureNamespace;
    localStorage.count = count;
    
    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    blockName = blockName.toLowerCase().split(/ +/).join('_');
    modName = modName.toLowerCase().split(/ +/).join('_');
    result = result.toLowerCase().split(/ +/).join('_');
    textureNamespace = textureNamespace.toLowerCase().split(/ +/).join('_');

    const blockLength = blockName.length;
    const blockLengthStart = blockLength - 6;
    const blockSubStr = blockName.substring(blockLengthStart);
    
    if (blockSubStr === 'bricks') {
        blockName = blockName.substring(0, blockName.length - 1);
    }

    if (!fs.existsSync(`${filepath}\\data\\${modName}\\recipes`)) {
        fs.mkdir(`${filepath}\\data\\${modName}\\recipes`, { recursive: true}, (err) => {
            if (err) throw err;
            console.log('Made the stonecutting folder structure.');
        });
    }

    setTimeout(() => {
            const jsonProduct = {
                type: "minecraft:stonecutting",
                blockName: {
                  item: `${textureNamespace}:${blockName}`
                },
                result: `${textureNamespace}:${result}`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${result}_stonecutter.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made stonecutter recipe file');

            });
            
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("errorholder").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);

    }, 10);
};