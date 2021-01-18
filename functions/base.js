const fs = require('fs');

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

    blockName = blockName.toLowerCase().split(/ +/).join('_');
    modName = modName.toLowerCase().split(/ +/).join('_');

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
            
            document.getElementById("generateBtn").value = "Generated!";

            setTimeout(() => {
                document.getElementById("generateBtn").value ="Generate!";
            }, 1000);
        }
    }, 10);
};