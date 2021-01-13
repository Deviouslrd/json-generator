const fs = require('fs');

document.getElementById("lootTableForm").onsubmit = form => {
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
            type: "minecraft:block",
            pools: [
                {
                    rolls: 1,
                    entries: [
                        {
                            type: "minecraft:item",
                            name: `${modName}:${blockName}`
                        }
                    ]
                }
            ]
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        if (!fs.existsSync(`${filepath}\\loot_tables`)) {
            fs.mkdir(`${filepath}\\loot_tables`, (err) => {
                if (err) throw err;
                console.log('Made the loot tables folder.');
            });
        }

        fs.writeFile(`${filepath}\\loot_tables\\${blockName}.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('Made the loot table file');

        });
        
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
    }
}