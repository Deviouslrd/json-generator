let fs = window.__TAURI__.fs;
import fixers from './fixers.js';

const observer = new MutationObserver(function(mutationList, observer) { for (const mutation of mutationList) { if (mutation.type === 'childList') document.getElementById("error").classList.add("errortransition"); }});
observer.observe(document.getElementById("error"), {childList: true});

document.getElementById("advanceForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    var triggerName = document.getElementById("triggerName").value;
    
    if (document.getElementById("saveLocation").value === 'No Location' || !localStorage.path) {
        return document.getElementById("error").innerHTML = `Error: No save location given!`;
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
    localStorage.checkTemplate = document.getElementById("template").checked;

    blockName = fixers(blockName);
    triggerName = fixers(triggerName);

    modName = modName.toLowerCase().trim().replace(/ +/g, '_');
    itemNamespace = itemNamespace.toLowerCase().trim().replace(/ +/g, '_');

    const jsonProduct = {
        parent: `minecraft:recipes/root`,
        rewards: {
            recipes: [
                `${itemNamespace}:${blockName}_slab`,
                `${itemNamespace}:${blockName}_stairs`,
                `${itemNamespace}:${blockName}_pillar`,
                `${itemNamespace}:${blockName}_wall`
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

    fs.createDir(`${filepath}\\data\\${modName}\\advancements`, { recursive: true });

    fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\advancements\\${blockName}.json`}, {}, (err) => {
        if (err) {
            document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
            throw err;
        }
    });

    if (document.getElementById("template").checked === true) {
        const jsonProduct = {
            parent: `minecraft:recipes/root`,
            rewards: {
                recipes: [
                    `[example_namespace]: [ingredient_name]`
                ]
            },
            criteria: {
                has_item: {
                    trigger: `minecraft: inventory_changed`,
                    conditions: {
                        items: [
                            {
                                item: `[example_namespace]: [trigger_name]`
                            }
                        ]
                    }
                }
            }
        };

        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\advancements\\advancement_template.json`}, {}, (err) => {
            if (err) {
                document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                throw err;
            }
        });
    }

    document.getElementById("error").classList.remove("errortransition");
    document.getElementById("generateBtn").value = "Generated!";
    document.getElementById("error").innerHTML = "";

    setTimeout(() => {
        document.getElementById("generateBtn").value ="Generate!";
    }, 1000);
};