const fs = require('fs');
const fixers = require('../functions/fixers.js');

document.getElementById("lootTableForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    var namespace;

    if (document.getElementById("namespace").value === ``) {
        namespace = document.getElementById("modName").value;
    } else {
        namespace = document.getElementById("namespace").value;
    }

    localStorage.modName = modName;
    localStorage.blockName = blockName;
    localStorage.namespace = namespace;

    localStorage.checkBlock = document.getElementById("block").checked;
    localStorage.checkSlab = document.getElementById("slab").checked;
    localStorage.checkStairs = document.getElementById("stairs").checked;
    localStorage.checkWall = document.getElementById("wall").checked;
    localStorage.checkPillar = document.getElementById("pillar").checked;
    
    if (document.getElementById("saveLocation").value === 'No location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    blockName = blockName.fixers(blockName);
    modName = modName.toLowerCase().trim().replace(/ +/g, '_');

    if (!fs.existsSync(`${filepath}\\data\\${modName}\\loot_tables\\blocks`)) {
        fs.mkdir(`${filepath}\\data\\${modName}\\loot_tables\\blocks`, { recursive: true }, (err) => {
            if (err) throw err;
            console.log('Made the loot tables folder.');
        });
    }

    setTimeout(() => {
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
                                name: `${namespace}:${blockName}`
                            }
                        ]
                    }
                ]
            };

            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the block loot table file');
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

            fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_slab.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the slab loot table file');
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

            fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_stairs.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the stairs loot table file');
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

            fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_wall.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the wall loot table file');
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

            fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_pillar.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the pillar loot table file');
            });
        } 
        
        // Template Creator
        if (document.getElementById("block").checked === true) {
            const jsonProduct = {
                type: "minecraft:block",
                pools: [
                    {
                        rolls: 1,
                        entries: [
                            {
                                type: "minecraft:item",
                                name: `[example_namespace]:[example_block]`
                            }
                        ]
                    }
                ]
            };

            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\loot_tables\\blocks\\loot_table_template.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the loot table template file.');
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
        document.getElementById("errorholder").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
        
    }, 10);
};
