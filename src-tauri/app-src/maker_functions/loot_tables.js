let fs = window.__TAURI__.fs;
import fixers from './fixers.js';

const observer = new MutationObserver(function(mutationList, observer) { for (const mutation of mutationList) { if (mutation.type === 'childList') document.getElementById("error").classList.add("errortransition"); }});
observer.observe(document.getElementById("error"), {childList: true});

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
    localStorage.checkTemplate = document.getElementById("template").checked;
    
    if (document.getElementById("saveLocation").value === 'No Location' || !localStorage.path) {
        return document.getElementById("error").innerHTML = `Error: No save location given!`;
    }

    blockName = fixers(blockName);
    modName = modName.toLowerCase().trim().replace(/ +/g, '_');

    fs.createDir(`${filepath}\\data\\${modName}\\loot_tables\\blocks`, { recursive: true });

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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
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
                            maker_functions: [
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
            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_slab.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_stairs.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_wall.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\loot_tables\\blocks\\${blockName}_pillar.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\loot_tables\\blocks\\loot_table_template.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });
        }  

        if (document.getElementById("block").checked === false &&
        document.getElementById("slab").checked === false &&
        document.getElementById("stairs").checked === false &&
        document.getElementById("wall").checked === false &&
        document.getElementById("pillar").checked === false &&
        document.getElementById("template").checked === false) {
            document.getElementById("error").classList.add("errortransition");
            return document.getElementById("error").innerHTML = "Error: No boxes were selected!";
        }

        document.getElementById("error").classList.remove("errortransition");
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("error").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
        
    }, 10);
};
