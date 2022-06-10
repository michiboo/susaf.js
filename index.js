
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
    dimensions = {"social": [], "individual": [[566,667], [252, 1071], [883, 1071]], "environmental": [], "technical":[], "economical": []}
    var r = randomPointTri(dimensions[dimension][0], dimensions[dimension][1], dimensions[dimension][2])
    ctx.font = '20px serif';
    if(positive)
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