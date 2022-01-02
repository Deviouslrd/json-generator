const fs = require('fs');

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var ingredient = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    var result = document.getElementById("result").value;
    var itemNamespace;
    var count = parseFloat(document.getElementById("count").value);
    var baseBlock;
    var baseSlab;
    var baseStairs;
    var baseWall;
    var baseGate = `consistency_plus:${document.getElementById("blockName").value}_gate`;
    var cutBlock;
    var cutSlab;
    var cutStairs;
    var cutWall;
    var cutGate = `consistency_plus:cut_${document.getElementById("blockName").value}_gate`;
    var polishedBlock;
    var polishedSlab;
    var polishedStairs;
    var polishedWall;
    var polishedGate = `consistency_plus:polished_${document.getElementById("blockName").value}_gate`;
    var brickBlock;
    var brickSlab;
    var brickStairs;
    var brickWall;
    var brickGate = `consistency_plus:${document.getElementById("blockName").value}_brick_gate`;
    var smoothBlock;
    var smoothSlab;
    var smoothStairs;
    var smoothWall;
    var smoothGate = `consistency_plus:smooth_${document.getElementById("blockName").value}_gate`;
    var pillar;
    var carvedBlock;
    var chiseledBlock;

    var baseBlockFile = `${document.getElementById("blockName").value}`;
    var baseSlabFile = `${document.getElementById("blockName").value}_slab`;
    var baseStairsFile = `${document.getElementById("blockName").value}_stairs`;
    var baseWallFile = `${document.getElementById("blockName").value}_wall`;
    var baseGateFile = `${document.getElementById("blockName").value}_gate`;
    var cutBlockFile = `cut_${document.getElementById("blockName").value}`;
    var cutSlabFile = `cut_${document.getElementById("blockName").value}_slab`;
    var cutStairsFile = `cut_${document.getElementById("blockName").value}_stairs`;
    var cutWallFile = `cut_${document.getElementById("blockName").value}_wall`;
    var cutGateFile = `cut_${document.getElementById("blockName").value}_gate`;
    var polishedBlockFile = `polished_${document.getElementById("blockName").value}`;
    var polishedSlabFile = `polished_${document.getElementById("blockName").value}_slab`;
    var polishedStairsFile = `polished_${document.getElementById("blockName").value}_stairs`;
    var polishedWallFile = `polished_${document.getElementById("blockName").value}_wall`;
    var polishedGateFile = `polised_${document.getElementById("blockName").value}_gate`;
    var brickBlockFile = `${document.getElementById("blockName").value}_bricks`;
    var brickSlabFile = `${document.getElementById("blockName").value}_brick_slab`;
    var brickStairsFile = `${document.getElementById("blockName").value}_brick_stairs`;
    var brickWallFile = `${document.getElementById("blockName").value}_brick_wall`;
    var brickGateFile = `${document.getElementById("blockName").value}_brick_gate`;
    var smoothBlockFile = `smooth_${document.getElementById("blockName").value}`;
    var smoothSlabFile = `smooth_${document.getElementById("blockName").value}_slab`;
    var smoothStairsFile = `${document.getElementById("blockName").value}_brick_stairs`;
    var smoothWallFile = `smooth_${document.getElementById("blockName").value}_wall`;
    var smoothGateFile = `smooth_${document.getElementById("blockName").value}_gate`;
    var pillarFile = `${document.getElementById("blockName").value}_pillar`;
    var carvedBlockFile = `carved_${document.getElementById("blockName").value}`;
    var chiseledBlockFile = `chiseled_${document.getElementById("blockName").value}`;

    if (document.getElementById("namespace").value === ``) {
        itemNamespace = document.getElementById("modName").value;
    } else {
        itemNamespace = document.getElementById("namespace").value;
    }


// Base Namespaces
    if (document.getElementById("baseBlockNamespace").checked === true) {
        baseBlock = `${document.getElementById("namespace").value}:${document.getElementById("blockName").value}`;
    } else {
        baseBlock = `${document.getElementById("modName").value}:${document.getElementById("blockName").value}`;
    }

    if (document.getElementById("baseSlabNamespace").checked === true) {
        baseSlab = `${document.getElementById("namespace").value}:${document.getElementById("blockName").value}_slab`;
    } else {
        baseSlab = `${document.getElementById("modName").value}:${document.getElementById("blockName").value}_slab`;
    }

    if (document.getElementById("baseStairsNamespace").checked === true) {
        baseStairs = `${document.getElementById("namespace").value}:${document.getElementById("blockName").value}_stairs`;
    } else {
        baseStairs = `${document.getElementById("modName").value}:${document.getElementById("blockName").value}_stairs`;
    }

    if (document.getElementById("baseWallNamespace").checked === true) {
        baseWall = `${document.getElementById("namespace").value}:${document.getElementById("blockName").value}_wall`;
    } else {
        baseWall = `${document.getElementById("modName").value}:${document.getElementById("blockName").value}_wall`;
    }

    if (document.getElementById("pillarNamespace").checked === true) {
        pillar = `${document.getElementById("namespace").value}:${document.getElementById("blockName").value}_pillar`;
    } else {
        pillar = `${document.getElementById("modName").value}:${document.getElementById("blockName").value}_pillar`;
    }


// Cut Namespaces
        if (document.getElementById("cutBlockNamespace").checked === true) {
        cutBlock = `${document.getElementById("namespace").value}:cut_${document.getElementById("blockName").value}`;
    } else {
        cutBlock = `${document.getElementById("modName").value}:cut_${document.getElementById("blockName").value}`;
    }

    if (document.getElementById("cutSlabNamespace").checked === true) {
        cutSlab = `${document.getElementById("namespace").value}:cut_${document.getElementById("blockName").value}_slab`;
    } else {
        cutSlab = `${document.getElementById("modName").value}:cut_${document.getElementById("blockName").value}_slab`;
    }

    if (document.getElementById("cutStairsNamespace").checked === true) {
        cutStairs = `${document.getElementById("namespace").value}:cut_${document.getElementById("blockName").value}_stairs`;
    } else {
        cutStairs = `${document.getElementById("modName").value}:cut_${document.getElementById("blockName").value}_stairs`;
    }

    if (document.getElementById("cutWallNamespace").checked === true) {
        cutWall = `${document.getElementById("namespace").value}:cut_${document.getElementById("blockName").value}_wall`;
    } else {
        cutWall = `${document.getElementById("modName").value}:cut_${document.getElementById("blockName").value}_wall`;
    }


// Brick Namespaces
    if (document.getElementById("brickBlockNamespace").checked === true) {
        brickBlock = `${document.getElementById("namespace").value}:${document.getElementById("blockName").value}_bricks`;
    } else {
        brickBlock = `${document.getElementById("modName").value}:${document.getElementById("blockName").value}_bricks`;
    }

    if (document.getElementById("brickSlabNamespace").checked === true) {
        brickSlab = `${document.getElementById("namespace").value}:${document.getElementById("blockName").value}_brick_slab`;
    } else {
        brickSlab = `${document.getElementById("modName").value}:${document.getElementById("blockName").value}_brick_slab`;
    }

    if (document.getElementById("brickStairsNamespace").checked === true) {
        brickStairs = `${document.getElementById("namespace").value}:${document.getElementById("blockName").value}_brick_stairs`;
    } else {
        brickStairs = `${document.getElementById("modName").value}:${document.getElementById("blockName").value}_brick_stairs`;
    }

    if (document.getElementById("brickWallNamespace").checked === true) {
        brickWall = `${document.getElementById("namespace").value}:${document.getElementById("blockName").value}_brick_wall`;
    } else {
        brickWall = `${document.getElementById("modName").value}:${document.getElementById("blockName").value}_brick_wall`;
    }


// Polished Namespaces
        if (document.getElementById("polishedBlockNamespace").checked === true) {
        polishedBlock = `${document.getElementById("namespace").value}:polished_${document.getElementById("blockName").value}`;
    } else {
        polishedBlock = `${document.getElementById("modName").value}:polished_${document.getElementById("blockName").value}`;
    }

    if (document.getElementById("polishedSlabNamespace").checked === true) {
        polishedSlab = `${document.getElementById("namespace").value}:polished_${document.getElementById("blockName").value}_slab`;
    } else {
        polishedSlab = `${document.getElementById("modName").value}:polished_${document.getElementById("blockName").value}_slab`;
    }

    if (document.getElementById("polishedStairsNamespace").checked === true) {
        polishedStairs = `${document.getElementById("namespace").value}:polished_${document.getElementById("blockName").value}_stairs`;
    } else {
        polishedStairs = `${document.getElementById("modName").value}:polished_${document.getElementById("blockName").value}_stairs`;
    }

    if (document.getElementById("polishedWallNamespace").checked === true) {
        polishedWall = `${document.getElementById("namespace").value}:polished_${document.getElementById("blockName").value}_wall`;
    } else {
        polishedWall = `${document.getElementById("modName").value}:polished_${document.getElementById("blockName").value}_wall`;
    }


    // Smooth Namespaces
        if (document.getElementById("smoothBlockNamespace").checked === true) {
        smoothBlock = `${document.getElementById("namespace").value}:smooth_${document.getElementById("blockName").value}`;
    } else {
        smoothBlock = `${document.getElementById("modName").value}:smooth_${document.getElementById("blockName").value}`;
    }

    if (document.getElementById("smoothSlabNamespace").checked === true) {
        smoothSlab = `${document.getElementById("namespace").value}:smooth_${document.getElementById("blockName").value}_slab`;
    } else {
        smoothSlab = `${document.getElementById("modName").value}:smooth_${document.getElementById("blockName").value}_slab`;
    }

    if (document.getElementById("smoothStairsNamespace").checked === true) {
        smoothStairs = `${document.getElementById("namespace").value}:smooth_${document.getElementById("blockName").value}_stairs`;
    } else {
        smoothStairs = `${document.getElementById("modName").value}:smooth_${document.getElementById("blockName").value}_stairs`;
    }

    if (document.getElementById("smoothWallNamespace").checked === true) {
        smoothWall = `${document.getElementById("namespace").value}:smooth_${document.getElementById("blockName").value}_wall`;
    } else {
        smoothWall = `${document.getElementById("modName").value}:smooth_${document.getElementById("blockName").value}_wall`;
    }


//Carved+Chiseled
    if (document.getElementById("chiseledBlockNamespace").checked === true) {
        carvedBlock = `${document.getElementById("namespace").value}:chiseled_${document.getElementById("blockName").value}`;
    } else {
        carvedBlock = `${document.getElementById("modName").value}:carved_${document.getElementById("blockName").value}`;
    }

    if (document.getElementById("carvedBlockNamespace").checked === true) {
        chiseledBlock = `${document.getElementById("namespace").value}:chiseled_${document.getElementById("blockName").value}`;
    } else {
        chiseledBlock = `${document.getElementById("modName").value}:chiseled_${document.getElementById("blockName").value}`;
    }

    localStorage.modName = modName;
    localStorage.blockName = ingredient;
    localStorage.result = result;
    localStorage.namespace = itemNamespace;
    localStorage.count = count;
    
    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    ingredient = ingredient.toLowerCase().trim().split(/ +/).join('_');
    modName = modName.toLowerCase().trim().split(/ +/).join('_');
    result = result.toLowerCase().trim().split(/ +/).join('_');
    itemNamespace = itemNamespace.toLowerCase().split(/ +/).join('_');

    if (!fs.existsSync(`${filepath}\\data\\${modName}\\recipes`)) {
        fs.mkdir(`${filepath}\\data\\${modName}\\recipes`, { recursive: true}, (err) => {
            if (err) throw err;
            console.log('Made the stonecutting folder structure.');
        });
    }

    setTimeout(() => {

//BaseBlocks


        // Slab Creator
        if (document.getElementById("baseSlab").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${baseSlab}`,
                count: 2
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${baseSlabFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${baseSlab} stonecutter recipe.`);
            });
        }

        // Stairs Creator
        if (document.getElementById("baseStairs").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${baseStairs}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${baseStairsFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${baseStairs} stonecutter recipe.`);
            });
        }

            // Wall Creator
        if (document.getElementById("baseWall").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${baseWall}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${baseWallFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${baseWall} stonecutter recipe.`);
            });
        }

        // Gate Creator
        if (document.getElementById("baseWall").checked === true) {
            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${baseGate}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${baseGateFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${baseGate} stonecutter recipe.`);
            });


        }

        // Pillar Creator
        if (document.getElementById("pillar").checked === true) {
            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${pillar}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${pillar}_from_${baseBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${pillar} stonecutter recipe.`);
            });
        }

// Polished Creator

       // Block Creator
        if (document.getElementById("polishedBlock").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${polishedBlock}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedBlockFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedBlock} stonecutter recipe.`);
            });
        }

        // Slab Creator
        if (document.getElementById("polishedSlab").checked === true) {
 

            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${polishedSlab}`,
                count: 2
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${polishedSlab}`,
                count: 2
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseSlab}`
                },
                result: `${polishedSlab}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedSlabFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedSlab} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedSlabFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedSlab} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedSlabFile}_from_${baseSlabFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedSlab} stonecutter recipe.`);
            });
        }

        // Stairs Creator
        if (document.getElementById("polishedStairs").checked === true) {
 

            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${polishedStairs}`,
                count: 1
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${polishedStairs}`,
                count: 1
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseStairs}`
                },
                result: `${polishedStairs}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedStairsFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedStairs} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedStairsFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedStairs} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedStairsFile}_from_${baseStairsFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedStairs} stonecutter recipe.`);
            });

        }

            // Wall Creator
        if (document.getElementById("polishedWall").checked === true) {
 

            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${polishedWall}`,
                count: 1
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${polishedWall}`,
                count: 1
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseWall}`
                },
                result: `${polishedWall}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedWallFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedWall} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedWallFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedWall} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedWallFile}_from_${baseWallFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedWall} stonecutter recipe.`);
            });

        }

        // Gate Creator
         if (document.getElementById("polishedWall").checked === true) {
 

            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${polishedGate}`,
                count: 1
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${polishedGate}`,
                count: 1
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseGate}`
                },
                result: `${polishedGate}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedGateFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedGate} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedGateFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedGate} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${polishedGateFile}_from_${baseGateFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${polishedGate} stonecutter recipe.`);
            });

        }



// Bricks Generator
               // Block Creator
        if (document.getElementById("brickBlock").checked === true) {
 

            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${brickBlock}`,
                count: 1
            };
            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${brickBlock}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickBlockFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickBlock} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickBlockFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickBlock} stonecutter recipe.`);
            });
        }

        // Slab Creator
        if (document.getElementById("brickSlab").checked === true) {
 

            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${brickSlab}`,
                count: 2
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${brickSlab}`,
                count: 2
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseSlab}`
                },
                result: `${brickSlab}`,
                count: 1
            };

            const jsonProduct4 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${brickSlab}`,
                count: 2
            };
            
            const jsonProduct5 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedSlab}`
                },
                result: `${brickSlab}`,
                count: 1
            };

            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);
            const jsonContent4 = JSON.stringify(jsonProduct4, null, 4);
            const jsonContent5 = JSON.stringify(jsonProduct5, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickSlabFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickSlab} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickSlabFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickSlab} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickSlabFile}_from_${baseSlabFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickSlab} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickSlabFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent4, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickSlab} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickSlabFile}_from_${polishedSlabFile}_stonecutting.json`, jsonContent5, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickSlab} stonecutter recipe.`);
            });
        }

        // Stairs Creator
        if (document.getElementById("brickStairs").checked === true) {
 

            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${brickStairs}`,
                count: 1
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${brickStairs}`,
                count: 1
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseStairs}`
                },
                result: `${brickStairs}`,
                count: 1
            };
            
            const jsonProduct4 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${brickStairs}`,
                count: 1
            };

            const jsonProduct5 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedStairs}`
                },
                result: `${brickStairs}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);
                        const jsonContent4 = JSON.stringify(jsonProduct4, null, 4);
            const jsonContent5 = JSON.stringify(jsonProduct5, null, 4);


            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickStairsFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickStairs} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickStairsFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickStairs} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickStairsFile}_from_${baseStairsFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickStairs} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickStairsFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent4, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickStairs} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickStairsFile}_from_${polishedStairsFile}_stonecutting.json`, jsonContent5, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickStairs} stonecutter recipe.`);
            });


        }

            // Wall Creator
        if (document.getElementById("brickWall").checked === true) {
 

            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${brickWall}`,
                count: 1
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${brickWall}`,
                count: 1
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseWall}`
                },
                result: `${brickWall}`,
                count: 1
            };

                        const jsonProduct4 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${brickWall}`,
                count: 1
            };

            const jsonProduct5 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedWall}`
                },
                result: `${brickWall}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);
            const jsonContent4 = JSON.stringify(jsonProduct4, null, 4);
            const jsonContent5 = JSON.stringify(jsonProduct5, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickWallFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickWall} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickWallFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickWall} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickWallFile}_from_${baseWallFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickWall} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickWallFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent4, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickWall} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickWallFile}_from_${polishedWallFile}_stonecutting.json`, jsonContent5, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickWall} stonecutter recipe.`);
            });


        }

        // Gate Creator
         if (document.getElementById("brickWall").checked === true) {
 

            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${brickGate}`,
                count: 1
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${brickGate}`,
                count: 1
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseGate}`
                },
                result: `${brickGate}`,
                count: 1
            };

                        const jsonProduct4 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${brickGate}`,
                count: 1
            };

            const jsonProduct5 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedGate}`
                },
                result: `${brickGate}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);
            const jsonContent4 = JSON.stringify(jsonProduct4, null, 4);
            const jsonContent5 = JSON.stringify(jsonProduct5, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickGateFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickGate} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickGateFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickGate} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickGateFile}_from_${baseGateFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickGate} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickGateFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent4, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickGate} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${brickGateFile}_from_${polishedGateFile}_stonecutting.json`, jsonContent5, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${brickGate} stonecutter recipe.`);
            });

        }

        // Cuts Generator
               // Block Creator
        if (document.getElementById("cutBlock").checked === true) {

            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${cutBlock}`,
                count: 1
            };
            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${cutBlock}`,
                count: 1
            };
                        const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${cutBlock}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
                        const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutBlockFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutBlock} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutBlockFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutBlock} stonecutter recipe.`);
            });
                                    fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutBlockFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutBlock} stonecutter recipe.`);
            });
        }

        // Slab Creator
        if (document.getElementById("cutSlab").checked === true) {


            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${cutBlock}`
                },
                result: `${cutSlab}`,
                count: 2
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${cutSlab}`,
                count: 2
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseSlab}`
                },
                result: `${cutSlab}`,
                count: 1
            };

            const jsonProduct4 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${cutSlab}`,
                count: 2
            };
            
            const jsonProduct5 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedSlab}`
                },
                result: `${cutSlab}`,
                count: 1
            };

                        const jsonProduct6 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${cutSlab}`,
                count: 2
            };
            
            const jsonProduct7 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickSlab}`
                },
                result: `${cutSlab}`,
                count: 1
            };

            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);
            const jsonContent4 = JSON.stringify(jsonProduct4, null, 4);
            const jsonContent5 = JSON.stringify(jsonProduct5, null, 4);
                        const jsonContent6 = JSON.stringify(jsonProduct6, null, 4);
            const jsonContent7 = JSON.stringify(jsonProduct7, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutSlabFile}_from_${cutBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutSlab} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutSlabFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutSlab} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutSlabFile}_from_${baseSlabFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutSlab} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutSlabFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent4, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutSlab} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutSlabFile}_from_${polishedSlabFile}_stonecutting.json`, jsonContent5, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutSlab} stonecutter recipe.`);
            });

                                    fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutSlabFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent6, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutSlab} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutSlabFile}_from_${brickSlabFile}_stonecutting.json`, jsonContent7, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutSlab} stonecutter recipe.`);
            });
        }

        // Stairs Creator
              // Stairs Creator
        if (document.getElementById("cutStairs").checked === true) {


            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${cutBlock}`
                },
                result: `${cutStairs}`,
                count: 1
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${cutStairs}`,
                count: 1
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseStairs}`
                },
                result: `${cutStairs}`,
                count: 1
            };

            const jsonProduct4 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${cutStairs}`,
                count: 1
            };
            
            const jsonProduct5 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedStairs}`
                },
                result: `${cutStairs}`,
                count: 1
            };

                        const jsonProduct6 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${cutStairs}`,
                count: 1
            };
            
            const jsonProduct7 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickStairs}`
                },
                result: `${cutStairs}`,
                count: 1
            };

            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);
            const jsonContent4 = JSON.stringify(jsonProduct4, null, 4);
            const jsonContent5 = JSON.stringify(jsonProduct5, null, 4);
                        const jsonContent6 = JSON.stringify(jsonProduct6, null, 4);
            const jsonContent7 = JSON.stringify(jsonProduct7, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutStairsFile}_from_${cutBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutStairs} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutStairsFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutStairs} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutStairsFile}_from_${baseStairsFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutStairs} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutStairsFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent4, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutStairs} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutStairsFile}_from_${polishedStairsFile}_stonecutting.json`, jsonContent5, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutStairs} stonecutter recipe.`);
            });

                                    fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutStairsFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent6, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutStairs} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutStairsFile}_from_${brickStairsFile}_stonecutting.json`, jsonContent7, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutStairs} stonecutter recipe.`);
            });
        }
         // Walls Creator
        if (document.getElementById("cutWall").checked === true) {


            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${cutBlock}`
                },
                result: `${cutWall}`,
                count: 1
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${cutWall}`,
                count: 1
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseWall}`
                },
                result: `${cutWall}`,
                count: 1
            };

            const jsonProduct4 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${cutWall}`,
                count: 1
            };
            
            const jsonProduct5 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedWall}`
                },
                result: `${cutWall}`,
                count: 1
            };

                        const jsonProduct6 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${cutWall}`,
                count: 1
            };
            
            const jsonProduct7 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickWall}`
                },
                result: `${cutWall}`,
                count: 1
            };

            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);
            const jsonContent4 = JSON.stringify(jsonProduct4, null, 4);
            const jsonContent5 = JSON.stringify(jsonProduct5, null, 4);
                        const jsonContent6 = JSON.stringify(jsonProduct6, null, 4);
            const jsonContent7 = JSON.stringify(jsonProduct7, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutWallFile}_from_${cutBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutWall} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutWallFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutWall} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutWallFile}_from_${baseWallFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutWall} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutWallFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent4, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutWall} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutWall}_from_${polishedWallFile}_stonecutting.json`, jsonContent5, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutWall} stonecutter recipe.`);
            });

                                    fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutWallFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent6, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutWall} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutWallFile}_from_${brickWallFile}_stonecutting.json`, jsonContent7, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutWall} stonecutter recipe.`);
            });
        }

      // Gate Creator
        if (document.getElementById("cutGate").checked === true) {


            const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${cutBlock}`
                },
                result: `${cutGate}`,
                count: 1
            };

            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${cutGate}`,
                count: 1
            };

            const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseGate}`
                },
                result: `${cutGate}`,
                count: 1
            };

            const jsonProduct4 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${cutGate}`,
                count: 1
            };
            
            const jsonProduct5 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedGate}`
                },
                result: `${cutGate}`,
                count: 1
            };

                        const jsonProduct6 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${cutGate}`,
                count: 1
            };
            
            const jsonProduct7 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickGate}`
                },
                result: `${cutGate}`,
                count: 1
            };

            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);
            const jsonContent4 = JSON.stringify(jsonProduct4, null, 4);
            const jsonContent5 = JSON.stringify(jsonProduct5, null, 4);
                        const jsonContent6 = JSON.stringify(jsonProduct6, null, 4);
            const jsonContent7 = JSON.stringify(jsonProduct7, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutGateFile}_from_${cutBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutGate} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutGateFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutGate} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutGateFile}_from_${baseGateFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutGate} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutGateFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent4, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutGate} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutGateFile}_from_${polishedGateFile}_stonecutting.json`, jsonContent5, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutGate} stonecutter recipe.`);
            });

                                    fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutGateFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent6, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutGate} stonecutter recipe.`);
            });

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${cutGateFile}_from_${brickGateFile}_stonecutting.json`, jsonContent7, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${cutGate} stonecutter recipe.`);
            });
        }

        // Slab Creator
        if (document.getElementById("baseSlab").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${baseSlab}`,
                count: 2
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${baseSlabFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${baseSlab} stonecutter recipe.`);
            });
        }

        // Stairs Creator
        if (document.getElementById("baseStairs").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${baseStairs}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${baseStairsFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${baseStairs} stonecutter recipe.`);
            });
        }

        // Wall Creator
        if (document.getElementById("baseWall").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${baseWall}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${baseWallFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${baseWall} stonecutter recipe.`);
            });
        }

        // Gate Creator
         if (document.getElementById("baseWall").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${baseGate}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${baseGateFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${baseGate} stonecutter recipe.`);
            });
        }

        // Slab Creator
        if (document.getElementById("smoothSlab").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${smoothBlock}`
                },
                result: `${smoothSlab}`,
                count: 2
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${smoothSlabFile}_from_${smoothBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${smoothSlab} stonecutter recipe.`);
            });
        }

        // Stairs Creator
        if (document.getElementById("smoothStairs").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${smoothBlock}`
                },
                result: `${smoothStairs}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${smoothStairsFile}_from_${smoothBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${smoothStairs} stonecutter recipe.`);
            });
        }

        // Wall Creator
        if (document.getElementById("smoothWall").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${smoothBlock}`
                },
                result: `${smoothWall}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${smoothWallFile}_from_${smoothBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${smoothWall} stonecutter recipe.`);
            });
        }

        // Gate Creator
         if (document.getElementById("smoothWall").checked === true) {
 

            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${smoothBlock}`
                },
                result: `${smoothGate}`,
                count: 1
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${smoothGateFile}_from_${smoothBlockFile}_stonecutting.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${smoothGate} stonecutter recipe.`);
            });
        }

         if (document.getElementById("chiseledBlock").checked === true) {
                    const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${chiseledBlock}`,
                count: 1
            };
            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${chiseledBlock}`,
                count: 1
            };
                        const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${chiseledBlock}`,
                count: 1
            };

                                    const jsonProduct4 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${cutBlock}`
                },
                result: `${chiseledBlock}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
                        const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);
                                                const jsonContent4 = JSON.stringify(jsonProduct4, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${chiseledBlockFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${chiseledBlock} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${chiseledBlockFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${chiseledBlock} stonecutter recipe.`);
            });
                                    fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${chiseledBlockFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${chiseledBlock} stonecutter recipe.`);
            });
                                                fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${chiseledBlockFile}_from_${cutBlockFile}_stonecutting.json`, jsonContent4, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${chiseledBlock} stonecutter recipe.`);
            });
        }

        if (document.getElementById("carvedBlock").checked === true) {
                    const jsonProduct1 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${baseBlock}`
                },
                result: `${carvedBlock}`,
                count: 1
            };
            const jsonProduct2 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${polishedBlock}`
                },
                result: `${carvedBlock}`,
                count: 1
            };
                        const jsonProduct3 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${brickBlock}`
                },
                result: `${carvedBlock}`,
                count: 1
            };

                                    const jsonProduct4 = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${cutBlock}`
                },
                result: `${carvedBlock}`,
                count: 1
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
                        const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);
                                                const jsonContent4 = JSON.stringify(jsonProduct4, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${carvedBlockFile}_from_${baseBlockFile}_stonecutting.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${carvedBlock} stonecutter recipe.`);
            });

                        fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${carvedBlockFile}_from_${polishedBlockFile}_stonecutting.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${carvedBlock} stonecutter recipe.`);
            });
                                    fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${carvedBlockFile}_from_${brickBlockFile}_stonecutting.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${carvedBlock} stonecutter recipe.`);
            });
                                                fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${carvedBlockFile}_from_${cutBlockFile}_stonecutting.json`, jsonContent4, 'utf8', (err) => {
                if (err) throw err;
                console.log(`Made the ${carvedBlock} stonecutter recipe.`);
            });
        }
        
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("errorholder").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
        
    }, 10);
};