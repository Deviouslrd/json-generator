const fs = require('fs');

document.getElementById("recipeForm").onsubmit = form => {
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

    if (document.getElementById("").checked === true) {

        const jsonProduct = {

        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        if (!fs.existsSync(`${filepath}\\recipes`)) {
            fs.mkdir(`${filepath}\\recipes`, (err) => {
                if (err) throw err;
                console.log('Made the  folder.');
            });
        }

        fs.writeFile(`${filepath}\\recipes\\${blockName}.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');

        });
        
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }
};