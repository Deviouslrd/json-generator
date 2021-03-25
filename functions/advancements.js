const fs = require('fs');
const fixers = require('../functions/fixers.js');

document.getElementById("advanceForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    var triggerName = document.getElementById("triggerName").value;
    
    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    var itemNamespace;

    if (document.getElementById("namespace").value === ``) {
        itemNamespace = document.getElementById("modName").value;
    } else {
        itemNamespace = document.getElementById("namespace").value;
    }

    localStorage.blockName = blockName;
    localStorage.modName = modName;
    localStorage.triggerName = triggerName;
    localStorage.namespace = itemNamespace;

    finalBlock = fixers(blockName);
    triggerName = fixers(triggerName);

    modName = modName.toLowerCase().trim().replace(/ +/g, '_');
    itemNamespace = itemNamespace.toLowerCase().trim().replace(/ +/g, '_');

    const jsonProduct = {
        parent: `minecraft:recipes/root`,
        rewards: {
            recipes: [
                `${itemNamespace}:${finalBlock}_slab`,
                `${itemNamespace}:${finalBlock}_stairs`,
                `${itemNamespace}:${finalBlock}_pillar`,
                `${itemNamespace}:${finalBlock}_wall`
            ]
        },
        criteria: {
            has_item: {
                trigger: `minecraft:inventory_changed`,
                conditions: {
                    items: [
                        {
                            item: `${itemNamespace}:${triggerName}`
                        }
                    ]
                }
            }
        }
    };
    
    const jsonContent = JSON.stringify(jsonProduct, null, 4);

    if (!fs.existsSync(`${filepath}\\data\\${modName}\\advancements`)) {
        fs.mkdir(`${filepath}\\data\\${modName}\\advancements`, { recursive: true }, (err) => {
            if (err) throw err;
            console.log('Made the advancements folder.');
        });
    }

    fs.writeFile(`${filepath}\\data\\${modName}\\advancements\\${blockName}.json`, jsonContent, 'utf8', (err) => {
        if (err) throw err;
        console.log('Made advancement file.');
    });
    
    document.getElementById("generateBtn").value = "Generated!";
    document.getElementById("errorholder").innerHTML = "";

    setTimeout(() => {
        document.getElementById("generateBtn").value ="Generate!";
    }, 1000);
};