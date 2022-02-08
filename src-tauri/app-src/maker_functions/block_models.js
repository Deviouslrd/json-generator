let fs = window.__TAURI__.fs;
import fixers from './fixers.js';

function allTextures () {
    document.getElementById("sideTexture").classList.add('inputdisabled');
    document.getElementById("sideTexture").setAttribute('disabled', 'true');
    document.getElementById("topTexture").classList.add('inputdisabled');
    document.getElementById("topTexture").setAttribute('disabled', 'true');
    document.getElementById("westTexture").classList.add('inputdisabled');
    document.getElementById("westTexture").setAttribute('disabled', 'true');
    document.getElementById("southTexture").classList.add('inputdisabled');
    document.getElementById("southTexture").setAttribute('disabled', 'true');
    document.getElementById("eastTexture").classList.add('inputdisabled');
    document.getElementById("eastTexture").setAttribute('disabled', 'true');

    document.getElementById("mainLabel").innerHTML = "Main Texture:";
    localStorage.bmodelMode = "all";
}

function threeDirections () {
    document.getElementById("sideTexture").classList.remove('inputdisabled');
    document.getElementById("sideTexture").removeAttribute('disabled');
    document.getElementById("topTexture").classList.remove('inputdisabled');
    document.getElementById("topTexture").removeAttribute('disabled');
    document.getElementById("westTexture").classList.add('inputdisabled');
    document.getElementById("westTexture").setAttribute('disabled', 'true');
    document.getElementById("southTexture").classList.add('inputdisabled');
    document.getElementById("southTexture").setAttribute('disabled', 'true');
    document.getElementById("eastTexture").classList.add('inputdisabled');
    document.getElementById("eastTexture").setAttribute('disabled', 'true');

    document.getElementById("mainLabel").innerHTML = "Bottom Texture:";
    document.getElementById("sideLabel").innerHTML = "Side Texture:";
    localStorage.bmodelMode = "three";
}

function directionalTextures () {
    document.getElementById("sideTexture").classList.remove('inputdisabled');
    document.getElementById("sideTexture").removeAttribute('disabled');
    document.getElementById("topTexture").classList.remove('inputdisabled');
    document.getElementById("topTexture").removeAttribute('disabled');
    document.getElementById("westTexture").classList.remove('inputdisabled');
    document.getElementById("westTexture").removeAttribute('disabled');
    document.getElementById("southTexture").classList.remove('inputdisabled');
    document.getElementById("southTexture").removeAttribute('disabled');
    document.getElementById("eastTexture").classList.remove('inputdisabled');
    document.getElementById("eastTexture").removeAttribute('disabled');

    document.getElementById("mainLabel").innerHTML = "Bottom Texture:";
    document.getElementById("sideLabel").innerHTML = "North Texture:";
    localStorage.bmodelMode = "six";
}

function frontDiff () {
    document.getElementById("sideTexture").classList.remove('inputdisabled');
    document.getElementById("sideTexture").removeAttribute('disabled');
    document.getElementById("topTexture").classList.remove('inputdisabled');
    document.getElementById("topTexture").removeAttribute('disabled');
    document.getElementById("eastTexture").classList.remove('inputdisabled');
    document.getElementById("eastTexture").removeAttribute('disabled');
    document.getElementById("westTexture").classList.add('inputdisabled');
    document.getElementById("westTexture").setAttribute('disabled', 'true');
    document.getElementById("southTexture").classList.add('inputdisabled');
    document.getElementById("southTexture").setAttribute('disabled', 'true');

    document.getElementById("mainLabel").innerHTML = "Bottom Texture:";
    document.getElementById("eastLabel").innerHTML = "Front Texture:";
    document.getElementById("sideLabel").innerHTML = "Side Texture:";
    localStorage.bmodelMode = "front";
}

document.getElementById("all").addEventListener("click", allTextures, false);
document.getElementById("threeMain").addEventListener("click", threeDirections, false);
document.getElementById("directional").addEventListener("click", directionalTextures, false);
document.getElementById("diffFront").addEventListener("click", frontDiff, false);

const observer = new MutationObserver(function(mutationList, observer) { for (const mutation of mutationList) { if (mutation.type === 'childList') document.getElementById("error").classList.add("errortransition"); }});
observer.observe(document.getElementById("error"), {childList: true});

document.getElementById("blockModelForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var namespace;
    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;

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

    var topTexture = document.getElementById("topTexture").value;
    var sideTexture = document.getElementById("sideTexture").value;
    var eastTexture = document.getElementById("eastTexture").value;
    var southTexture = document.getElementById("southTexture").value;
    var westTexture = document.getElementById("westTexture").value;

    localStorage.topTexture = topTexture;
    localStorage.sideTexture = sideTexture;
    localStorage.eastTexture = eastTexture;
    localStorage.southTexture = southTexture;
    localStorage.westTexture = westTexture;
    
    if (document.getElementById("saveLocation").value === 'No Location' || !localStorage.path) {
        return document.getElementById("error").innerHTML = `Error: No save location given!`;
    }

    blockName = fixers(blockName);
    modName = modName.toLowerCase().trim().replace(/ +/g, '_');
    namespace = namespace.toLowerCase().trim().replace(/ +/g, '_');
    topTexture = fixers(topTexture);
    sideTexture = fixers(sideTexture);
    eastTexture = fixers(eastTexture);
    westTexture = fixers(westTexture);
    southTexture = fixers(southTexture);

    fs.createDir(`${filepath}\\assets\\${modName}\\models\\block`, { recursive: true });

    setTimeout(() => {
        // Block Creator
        if (document.getElementById("block").checked === true) {
            let finalProduct = {};

            if (document.getElementById("all").checked === true) {
                finalProduct = {
                    parent: `minecraft:block/cube_all`,
                    textures: {
                        all: `${namespace}:block/${blockName}`
                    }  
                };
            }

            if (document.getElementById("threeMain").checked === true) {
                finalProduct = {
                    parent: `minecraft:block/orientable`,
                    textures: {
                        top: `${namespace}:block/${topTexture}`,
                        bottom: `${namespace}:block/${blockName}`,
                        side: `${namespace}:block/${sideTexture}`
                    } 
                };
            }

            if (document.getElementById("directional").checked === true) {
                finalProduct = {
                    parent: `minecraft:block/cube`,
                    textures: {
                        particle: `${namespace}:block/${westTexture}`,
                        north: `${namespace}:block/${sideTexture}`,
                        south: `${namespace}:block/${southTexture}`,
                        east: `${namespace}:block/${eastTexture}`,
                        west: `${namespace}:block/${westTexture}`,
                        up: `${namespace}:block/${topTexture}`,
                        down: `${namespace}:block/${blockName}`
                    }
                };
            }

            if (document.getElementById("diffFront").checked === true) {
                finalProduct = {
                    parent: `minecraft:block/orientable`,
                    textures: {
                        top: `${namespace}:block/${topTexture}`,
                        bottom: `${namespace}:block/${blockName}`,
                        side: `${namespace}:block/${sideTexture}`,
                        front: `${namespace}:block/${eastTexture}`
                    } 
                };
            }
            
            const jsonContent = JSON.stringify(finalProduct, null, 4);

            fs.writeFile({contents: jsonContent, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;
                    throw err;
                }
            });
        }

        // Slab Creator
        if (document.getElementById("slab").checked === true) { 
            let finalProduct1 = {};
            let finalProduct2 = {};

            if (document.getElementById("all").checked === true) {
                finalProduct1 = {
                    parent: `minecraft:block/slab`,
                    textures: {
                        top: `${namespace}:block/${blockName}`,
                        bottom: `${namespace}:block/${blockName}`,
                        side: `${namespace}:block/${blockName}`
                    } 
                };

                finalProduct2 = {
                    parent: `minecraft:block/slab_top`,
                    textures: {
                        top: `${namespace}:block/${blockName}`,
                        bottom: `${namespace}:block/${blockName}`,
                        side: `${namespace}:block/${blockName}`
                    } 
                };
            }

            if (document.getElementById("threeMain").checked === true) {
                finalProduct1 = {
                    parent: `minecraft:block/slab`,
                    textures: {
                        top: `${namespace}:block/${topTexture}`,
                        bottom: `${namespace}:block/${blockName}`,
                        side: `${namespace}:block/${sideTexture}`
                    } 
                };

                finalProduct2 = {
                    parent: `minecraft:block/slab_top`,
                    textures: {
                        top: `${namespace}:block/${topTexture}`,
                        bottom: `${namespace}:block/${blockName}`,
                        side: `${namespace}:block/${sideTexture}`
                    } 
                };
            }

            if (document.getElementById("directional").checked === true) {
                finalProduct = {
                    parent: `minecraft:block/slab`,
                    textures: {
                        top: `${namespace}:block/${topTexture}`,
                        bottom: `${namespace}:block/${blockName}`,
                        side: `${namespace}:block/${sideTexture}`
                    }
                };

                finalProduct = {
                    parent: `minecraft:block/slab_top`,
                    textures: {
                        top: `${namespace}:block/${westTexture}`,
                        bottom: `${namespace}:block/${southTexture}`,
                        side: `${namespace}:block/${eastTexture}`
                    } 
                };
            }
            
            const jsonContent1 = JSON.stringify(finalProduct1, null, 4);
            const jsonContent2 = JSON.stringify(finalProduct2, null, 4);

            fs.writeFile({contents: jsonContent1, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}_slab.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;
                    throw err;
                } 
            });

            fs.writeFile({contents: jsonContent2, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}_slab_top.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`; 
                    throw err;
                }
            });
        }

        // Stair Creator
        if (document.getElementById("stairs").checked === true) {
            let finalProduct1 = {};
            let finalProduct2 = {};
            let finalProduct3 = {};
            
            if (document.getElementById("all").checked === true) {
                finalProduct1 = {
                    parent: "minecraft:block/stairs",
                    textures: {
                        bottom: `${namespace}:block/${blockName}`,
                        top: `${namespace}:block/${blockName}`,
                        side: `${namespace}:block/${blockName}`
                    }
                };

                finalProduct2 = {
                    parent: "minecraft:block/inner_stairs",
                    textures: {
                        bottom: `${namespace}:block/${blockName}`,
                        top: `${namespace}:block/${blockName}`,
                        side: `${namespace}:block/${blockName}`
                    } 
                };

                finalProduct3 = {
                    parent: "minecraft:block/outer_stairs",
                    textures: {
                        bottom: `${namespace}:block/${blockName}`,
                        top: `${namespace}:block/${blockName}`,
                        side: `${namespace}:block/${blockName}`
                    }
                };
            }

            if (document.getElementById("threeMain").checked === true || document.getElementById("directional").checked === true) {
                finalProduct1 = {
                    parent: "minecraft:block/stairs",
                    textures: {
                        bottom: `${namespace}:block/${blockName}`,
                        top: `${namespace}:block/${topTexture}`,
                        side: `${namespace}:block/${sideTexture}`
                    }
                };

                finalProduct2 = {
                    parent: "minecraft:block/inner_stairs",
                    textures: {
                        bottom: `${namespace}:block/${blockName}`,
                        top: `${namespace}:block/${topTexture}`,
                        side: `${namespace}:block/${sideTexture}`
                    } 
                };

                finalProduct3 = {
                    parent: "minecraft:block/outer_stairs",
                    textures: {
                        bottom: `${namespace}:block/${blockName}`,
                        top: `${namespace}:block/${topTexture}`,
                        side: `${namespace}:block/${sideTexture}`
                    }
                };
            }
            
            const jsonContent1 = JSON.stringify(finalProduct1, null, 4);
            const jsonContent2 = JSON.stringify(finalProduct2, null, 4);
            const jsonContent3 = JSON.stringify(finalProduct3, null, 4);

            fs.writeFile({contents: jsonContent1, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}_stairs.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });

            fs.writeFile({contents: jsonContent1, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}_stairs_inner.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });

            fs.writeFile({contents: jsonContent1, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}_stairs_outer.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });
        }
        
        // Wall Creator
        if (document.getElementById("wall").checked === true) {
            const jsonProduct1 = {
                parent: `minecraft:block/template_wall_post`,
                textures: {
                    wall: `${namespace}:block/${blockName}`
                }
            };

            const jsonProduct2 = {
                parent: `minecraft:block/template_wall_side`,
                textures: {
                    wall: `${namespace}:block/${blockName}`
                }
            };

            const jsonProduct3 = {
                parent: `minecraft:block/template_wall_side_tall`,
                textures: {
                    wall: `${namespace}:block/${blockName}`
                }
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);

            fs.writeFile({contents: jsonContent1, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}_wall_post.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });

            fs.writeFile({contents: jsonContent2, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}_wall_side.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });

            fs.writeFile({contents: jsonContent3, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}_wall_side_tall.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });
        }

        // Pillar Creator
        if (document.getElementById("pillar").checked === true) {
            const jsonProduct1 = {
                parent: "minecraft:block/cube_column",
                textures: {
                    end: `${namespace}:block/${blockName}_pillar_top`,
                    side: `${namespace}:block/${blockName}_pillar`
                }
            };

            const jsonProduct2 = {
                parent: "minecraft:block/cube_column_horizontal",
                textures: {
                    end: `${namespace}:block/${blockName}_pillar_top`,
                    side: `${namespace}:block/${blockName}_pillar`
                }
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);

            fs.writeFile({contents: jsonContent1, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}_pillar.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });

            fs.writeFile({contents: jsonContent2, path: `${filepath}\\assets\\${modName}\\models\\block\\${blockName}_pillar_horizontal.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });

        }

        // Template Creator
        if (document.getElementById("template").checked === true) {
            const jsonProduct = {
                parent: "minecraft:block/cube",
                textures: {
                    all: "[example_namespace]: [example_block]"
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile({contents: jsonContent, path: `${filepath}\\assets\\${modName}\\models\\block\\block_model_template.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });

        }

        document.getElementById("error").addEventListener('change', () => document.getElementById("error").classList.add("errortransition"));

        if (document.getElementById("block").checked === false &&
            document.getElementById("slab").checked === false &&
            document.getElementById("stairs").checked === false &&
            document.getElementById("wall").checked === false &&
            document.getElementById("pillar").checked === false &&
            document.getElementById("template").checked === false) {
                //document.getElementById("error").classList.add("errortransition");
                return document.getElementById("error").innerHTML = "Error: No boxes were selected!";
        }  
        
        document.getElementById("error").classList.remove("errortransition");
        document.getElementById("error").innerHTML = "";
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
        
    }, 10);
};
