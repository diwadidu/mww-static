function hiliteArea(areaID) {

    offset = new Array();
    offset[0] = new Array(62,65);
    offset[1] = new Array(135,9);
    offset[2] = new Array(74,194);
    offset[3] = new Array(216,157);
    offset[4] = new Array(80,314);
    offset[5] = new Array(252,275);
    offset[6] = new Array(280,359);
    offset[7] = new Array(305,134);

    backgroundX = -275 * (areaID % 2);
    backgroundY = -135 * parseInt(areaID / 2);

    shell = document.getElementById('areashell')
    shell.style.display = 'block';
    shell.style.left = offset[areaID][0]+'px';
    shell.style.top  = offset[areaID][1]+'px';
    shell.style.backgroundPosition=backgroundX + 'px ' + backgroundY+'px';

    document.getElementById('regionshell').style.display = 'none';
}

function noReg() {document.getElementById('regionshell').style.display='none';}
function noArea() { document.getElementById('areashell').style.display = 'none' }
function hiliteRegion(regionID) {
    coords = document.getElementById('reg'+regionID).getAttribute('coords').split(',');
    href   = document.getElementById('reg'+regionID).getAttribute('href');

    x=coords[0];
    y=coords[1];

    width  = coords[2] - coords[0];
    height = coords[3] - coords[1];

    backgroundX = -90 * (regionID % 6);
    backgroundY = -45 * parseInt(regionID / 6) - 540;

    shell = document.getElementById('regionshell')
    shell.style.display = 'block';
    shell.style.left = x+'px';
    shell.style.top  = y+'px';
    shell.style.backgroundPosition=backgroundX + 'px ' + backgroundY+'px ';
    shell.style.width=width+'px';
    shell.style.height=height+'px';
}
