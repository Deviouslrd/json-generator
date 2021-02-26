import fs from "fs";

document.getElementById("").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;

    localStorage.modName = modName;
    localStorage.blockName = blockName;
    
    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    blockName = blockName.toLowerCase().trim().split(/ +/).join('_');
    modName = modName.toLowerCase().trim().split(/ +/).join('_');

    const blockLength = blockName.length;
    const blockLengthStart = blockLength - 6;
    const blockSubStr = blockName.substring(blockLengthStart);
    
    if (blockSubStr === 'bricks') {
        var finalBlock = blockName.substring(0, blockName.length - 1);
    }

    if (!fs.existsSync(`${filepath}\\`)) {
        fs.mkdir(`${filepath}\\`, { recursive: true}, (err) => {
            if (err) throw err;
            console.log('Made the  folder.');
        });
    }

    setTimeout(() => {
        if (document.getElementById("").checked === true) {
            const jsonProduct = {

            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\ \\${blockName}.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('made file');

            });

        }
            
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("errorholder").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);

    }, 10);
};