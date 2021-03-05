const fs = require('fs');

document.getElementById("advanceForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    var triggerName = document.getElementById("triggerName").value;
    var itemNamespace;

    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    if (document.getElementById("namespace").value === ``) {
        itemNamespace = document.getElementById("modName").value;
    } else {
        itemNamespace = document.getElementById("namespace").value;
    }

    localStorage.blockName = blockName;
    localStorage.modName = modName;
    localStorage.triggerName = triggerName;
    localStorage.namespace = itemNamespace;

    blockName = blockName.toLowerCase().trim().split(/ +/).join('_');
    modName = modName.toLowerCase().trim().split(/ +/).join('_');
    triggerName = triggerName.toLowerCase().trim().split(/ +/).join('_');
    itemNamespace = itemNamespace.toLowerCase().trim().split(/ +/).join('_');
    
    let finalBlock = blockName;

    function brickSlice () {
        const blockLength = blockName.length - 6;
        const blockSubStr = blockName.substring(blockLength);
  
        if (blockSubStr === 'bricks') {
            finalBlock = blockName.substring(0, blockName.length - 1);
        }
    }

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