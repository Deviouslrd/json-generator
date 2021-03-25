// Bricks, Mossy, Pillars for removal
// Slab, Stairs, Wall - look for this within the word at all + remove

// This module slices and formats the output correctly for use, removing the need to contain that code in the main function file.

module.exports = function (blockName) {
    let blockPara = blockName.toLowerCase();
    let sliceCount = 0;

    if (blockPara.indexOf('bricks') >= 0) {
        sliceCount += 1;
        blockPara = blockPara.replace(/\bbricks\b/g, 'brick');
    } 

    if (blockPara.indexOf('mossy') >= 0) {
        sliceCount += 1;
        blockPara = blockPara.replace(/\bmossy\b/g, '');
    } 

    if (blockPara.indexOf('pillar') >= 0) {
        sliceCount += 1;
        blockPara = blockPara.replace(/\bpillar\b/g, '');
    }

    if (blockPara.indexOf('slab') >= 0) {
        sliceCount += 1;
        blockPara = blockPara.replace(/\bslab\b/, '');
    } else if (blockPara.indexOf('stairs') >= 0) {
        sliceCount += 1;
        blockPara = blockPara.replace(/\bstairs\b/, '');
    } else if (blockPara.indexOf('wall') >= 0) {
        sliceCount += 1;
        blockPara = blockPara.replace(/\bwall\b/, '');
    }

    blockPara = blockPara.replace(/\s+/g, ' ').trim().replace(/ +/g, '_');
    //blockPara = blockPara;
    
    if (sliceCount > 0) {
        return blockPara;
    } else {
        return blockName;
    }
};