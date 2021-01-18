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

    // Block Creator
    if (document.getElementById("block").checked === true) {
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

        if (!fs.existsSync(`${filepath}\\data\\${modName}\\loot_tables\\`)) {
            fs.mkdir(`${filepath}\\data\\${modName}\\loot_tables\\`, { recursive: true }, (err) => {
                if (err) throw err;
                console.log('Made the loot tables folder.');
            });
        }

        if (!fs.existsSync(`${filepath}\\data\\${modName}\\loot_tables\\blocks`)) {
            fs.mkdir(`${filepath}\\data\\${modName}\\loot_tables\\blocks`, { recursive: true }, (err) => {
                if (err) throw err;
                console.log('Made the loot tables folder.');
            });
        }

        fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('Made the loot table file');
        });
    }   
    
    // Slab Creator
    if (document.getElementById("slab").checked === true) {
        const jsonProduct = {
        "type": "minecraft:block",
        "pools": [
            {
                "rolls": 1,
                "entries": [
                    {
                        type: "minecraft:item",
                        name: `${modName}:${blockName}_slab`,
                        functions: [
                            {
                                function: "minecraft:explosion_decay"
                            },
                            {
                                function: "minecraft:set_count",
                                count: 2,
                                conditions: [
                                    {
                                        condition: "minecraft:block_state_property",
                                        block: `${modName}:${blockName}_slab`,
                                        properties: {
                                            type: "double"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        if (!fs.existsSync(`${filepath}\\data\\${modName}\\loot_tables\\blocks`)) {
            fs.mkdir(`${filepath}\\data\\${modName}\\loot_tables\\blocks`, { recursive: true }, (err) => {
                if (err) throw err;
                console.log('Made the loot tables folder.');
            });
        }

        fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_slab.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('Made the loot table file');
        });
    }   

    // Stair Creator
    if (document.getElementById("stairs").checked === true) {
        const jsonProduct = {
            type: "minecraft:block",
            pools: [
                {
                    rolls: 1,
                    entries: [
                        {
                            type: "minecraft:item",
                            name: `${modName}:${blockName}_stairs`
                        }
                    ]
                }
            ]
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        if (!fs.existsSync(`${filepath}\\data\\${modName}\\loot_tables\\blocks`)) {
            fs.mkdir(`${filepath}\\data\\${modName}\\loot_tables\\blocks`, { recursive: true }, (err) => {
                if (err) throw err;
                console.log('Made the loot tables folder.');
            });
        }

        fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_stairs.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('Made the loot table file');
        });
    }   
    
    // Wall Creator
    if (document.getElementById("wall").checked === true) {
        const jsonProduct = {
            type: "minecraft:block",
            pools: [
                {
                    rolls: 1,
                    entries: [
                        {
                            type: "minecraft:item",
                            name: `${modName}:${blockName}_wall`
                        }
                    ]
                }
            ]
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        if (!fs.existsSync(`${filepath}\\data\\${modName}\\loot_tables\\blocks`)) {
            fs.mkdir(`${filepath}\\data\\${modName}\\loot_tables\\blocks`, { recursive: true }, (err) => {
                if (err) throw err;
                console.log('Made the loot tables folder.');
            });
        }

        fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_wall.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('Made the loot table file');
        });
    }   

    // Pillar Creator
    if (document.getElementById("pillar").checked === true) {
        const jsonProduct = {
            type: "minecraft:block",
            pools: [
                {
                    rolls: 1,
                    entries: [
                        {
                            type: "minecraft:item",
                            name: `${modName}:${blockName}_pillar`
                        }
                    ]
                }
            ]
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        if (!fs.existsSync(`${filepath}\\data\\${modName}\\loot_tables\\blocks`)) {
            fs.mkdir(`${filepath}\\data\\${modName}\\loot_tables\\blocks`, { recursive: true }, (err) => {
                if (err) throw err;
                console.log('Made the loot tables folder.');
            });
        }

        fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_pillar.json`, jsonContent, 'utf8', (err) => {
            if (err) throw err;
            console.log('Made the loot table file');
        });
    }  
    
    if (document.getElementById("block").checked === false &&
    document.getElementById("slab").checked === false &&
    document.getElementById("stairs").checked === false &&
    document.getElementById("wall").checked === false &&
    document.getElementById("pillar").checked === false) {
        return document.getElementById("errorholder").innerHTML = "Error: No boxes were selected!";
    }

    document.getElementById("generateBtn").value = "Generated!";

    setTimeout(() => {
        document.getElementById("generateBtn").value ="Generate!";
    }, 1000);
};
