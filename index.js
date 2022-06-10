existedPoints = {}

function createBaseSusaf() {
    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

    var background = new Image();
    background.src = "base.png";
    canvas.width = background.width;
    canvas.height = background.height;
    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function () {
        ctx.drawImage(background, 0, 0);
    }
}


  

function addNote(dimension, order, text, positive){
    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
    dimensions = {"social":[[566, 633], [57, 471], [254, 1070]], "individual": [[566,667], [252, 1071], [883, 1071]], "environmental": [[882,1070],[567,635],[1077,468]], "technical":[[1077,468],[567,635],[566,99]], "economicalal": [[567,637], [56,466], [567,95]]}
    dimensions = {"economical1" : [[566,360],[567,96],[305,550]],
        "technical1" : [[566,360],[830,550],[567,360]],
        "economical2" : [[305,550],[568,360],[165,503],[568,210]],
        "technical2" : [[568,360],[830,550],[968,504],[568,212]],
        "economical3" : [[165,503],[56,466],[568,214],[568,100]],
        "technical3" : [[567,212],[567,98],[970,505],[1075,468]],
        "individual1" : [[566, 635], [406, 863], [728, 859]],
        "individual2" : [[406, 863], [728, 859], [319, 981], [817, 979]],
        "individual3" : [[319, 981], [817, 979], [256, 1074], [878, 1070]],
        "social1" : [[566, 635], [304, 551], [406, 857]],
        "social2" : [[304, 551], [406, 857], [167, 502], [317, 981]],
        "social3" : [[167, 502], [317, 981], [51, 473], [256, 1074]],
        "environmental1" : [[566, 635],  [825, 551],  [733, 859]],
        "environmental2" : [[825, 551], [733, 859], [967, 504], [815, 975]],
        "environmental3" : [[815, 975],[967, 504], [878, 1070], [1074, 470]]
    }
    var r = randomPointTri(dimensions[dimension+order][0], dimensions[dimension+order][1], dimensions[dimension+order][2])
    ctx.font = '15px serif';
    if(positive==1)
        ctx.fillStyle = "#00FF00"
    else
    ctx.fillStyle = "#FF0000"
    ctx.fillText(text, r[0], r[1]);
}

function sign (p1, p2, p3)
{
    return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);
}

function PointInTriangle (pt, v1, v2, v3)
{
    var d1, d2, d3;
    var has_neg, has_pos;

    d1 = sign(pt, v1, v2);
    d2 = sign(pt, v2, v3);
    d3 = sign(pt, v3, v1);

    has_neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    has_pos = (d1 > 0) || (d2 > 0) || (d3 > 0);

    return !(has_neg && has_pos);
}


function randomPointTri(A,B, C)
{   r1 = randomInRange(0, 1)
    r2 = randomInRange(0, 1)
    p = [0, 0]
    p[0] = (1 - Math.sqrt(r1)) * A[0] + (Math.sqrt(r1) * (1 - r2)) * B[0] + (Math.sqrt(r1) * r2) * C[0]
    p[1] = (1 - Math.sqrt(r1)) * A[1] + (Math.sqrt(r1) * (1 - r2)) * B[1] + (Math.sqrt(r1) * r2) * C[1]
    return p
}

function randomInRange(min, max) {
    return Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);
  }

  