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

    localStorage.blockName = blockName;

    blockName = blockName.toLowerCase().split(/ +/).join('_');

    const jsonProduct = {
        parent: `minecraft:recipes/root`,
        rewards: {
            recipes: [
                "ModName:BlockName_slab",
                "ModName:BlockName_stairs",
                "ModName:BlockName_wall"
            ]
        },
        criteria: {
            has_stone: {
                trigger: `minecraft:inventory_changed`,
                conditions: {
                    items: [
                        {
                            item: "ModName:BlockName"
                        }
                    ]
                }
            }
        }
    };
    
    const jsonContent = JSON.stringify(jsonProduct, null, 4);

    if (!fs.existsSync(`${filepath}\\advancements`)) {
        fs.mkdir(`${filepath}\\advancements`, (err) => {
            if (err) throw err;
            console.log('Made the advancements folder.');
        });
    }

    fs.writeFile(`${filepath}\\advancements\\${blockName}.json`, jsonContent, 'utf8', (err) => {
        if (err) throw err;
        console.log('made file');

    });
    
    document.getElementById("generateBtn").value = "Generated!";

    setTimeout(() => {
        document.getElementById("generateBtn").value ="Generate!";
    }, 1000);
    
};