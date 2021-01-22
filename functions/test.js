const fs = require('fs');

document.getElementById("test").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;

    localStorage.modName = modName;
    localStorage.blockName = blockName;
    
    blockName = blockName.toLowerCase().split(/ +/).join('_');
    modName = modName.toLowerCase().split(/ +/).join('_');

    const blockLength = blockName.length;
    const blockLengthStart = blockLength - 6;
    const blockSubStr = blockName.substring(blockLengthStart);
    
    if (blockSubStr === 'bricks') {
        var finalBlock = blockName.substring(0, blockName.length - 1);
    }
};