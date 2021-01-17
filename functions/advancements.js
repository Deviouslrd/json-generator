const fs = require('fs');

document.getElementById("advanceForm").onsubmit = form => {
    form.preventDefault();
    
    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    const filepath = localStorage.path;

    if (!filepath || localStorage.path === undefined) {
        return console.log('No filepath.');
    } 

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;

    localStorage.blockName = blockName;

    blockName = blockName.toLowerCase().split(/ +/).join('_');

    const jsonProduct = {
        parent: `minecraft:recipes/root`,
        rewards: {
            recipes: [
                `${modName}:${blockName}_slab`,
                `${modName}:${blockName}_stairs`,
                `${modName}:${blockName}_pillar`,
                `${modName}:${blockName}_wall`
            ]
        },
        criteria: {
            has_item: {
                trigger: `minecraft:inventory_changed`,
                conditions: {
                    items: [
                        {
                            item: `${modName}:${blockName}`
                        }
                    ]
                }
            }
        }
    };
    
    const jsonContent = JSON.stringify(jsonProduct, null, 4);

    if (!fs.existsSync(`${filepath}\\data\\advancements`)) {
        fs.mkdir(`${filepath}\\data\\advancements`, { recursive: true }, (err) => {
            if (err) throw err;
            console.log('Made the advancements folder.');
        });
    }

    fs.writeFile(`${filepath}\\data\\advancements\\${blockName}.json`, jsonContent, 'utf8', (err) => {
        if (err) throw err;
        console.log('Made advancement file.');

    });
    
    document.getElementById("generateBtn").value = "Generated!";

    setTimeout(() => {
        document.getElementById("generateBtn").value ="Generate!";
    }, 1000);
    
};
