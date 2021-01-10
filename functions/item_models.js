const fs = require('fs');

test.onsubmit = form => {
    form.preventDefault();

    var nameOfBlock = document.getElementById("blockName").value;
    var nameOfMod = document.getElementById("modName").value;
    //var textureFile = document.getElementById("textureFiles").value;
    
    nameOfBlock = nameOfBlock.toLowerCase().split(/ +/).join('_');
    nameOfMod = nameOfMod.toLowerCase().split(/ +/).join('_');
    console.log(`${nameOfBlock} and ${nameOfMod}`);

    //console.log(filePath);

    function makeBlockItemModel () {
        const jsonProduct = {
            parent: `${nameOfMod}:block/${nameOfBlock}`
        };
    
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        console.log(jsonContent);

        fs.writeFile(filePath, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('made file');

        });
    }

    makeBlockItemModel();
};

