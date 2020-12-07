var drawSquirrel0 = function(ctx,scalex,scaley) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(198.75,0);
    ctx.lineTo(198.75,153.75);
    ctx.lineTo(0,153.75);
    ctx.closePath();
    //ctx.clip();
    ctx.scale(scalex,scaley);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();

    ctx.save();
    //ctx.fillStyle = "#010001";
    ctx.beginPath();
    ctx.moveTo(127.28,15.12);
    ctx.bezierCurveTo(134.92,18.4,142.28,26.09,145.98,34.09);
    ctx.bezierCurveTo(148.78,42.75,137.42,40.56,132.92,41.16);
    ctx.bezierCurveTo(133.41,50.19,143.17,45.27,148.8,45.1);
    ctx.bezierCurveTo(153.06,50.24,139.39,53.29,144.36,58.66);
    ctx.bezierCurveTo(145.38,61.41,149.31,62.73,148.96,65.83);
    ctx.bezierCurveTo(144.23,68.93,136.41,68.96,133.96,74.96);
    ctx.bezierCurveTo(129.5,86.74,132.32,99.81,138.96,110.08);
    ctx.bezierCurveTo(138.94,118.49,127.72,112.98,123.99,110.08);
    ctx.bezierCurveTo(117.39,105.14,113.36,112.07,110.83,116.98);
    ctx.bezierCurveTo(100.88,119.37,101.72,106.54,95.93,103.02);
    ctx.bezierCurveTo(78.71,108.2,59.18,112.46,41.85,105.28);
    ctx.bezierCurveTo(28.14,101.46,14.4,92.11,9.77,78.14);
    ctx.bezierCurveTo(0.93,48.29,36.32,24.52,62.64,30.41);
    ctx.bezierCurveTo(80.45,33.65,92.67,53.32,88.66,70.7);
    ctx.bezierCurveTo(87.45,78.17,72.16,81.4,78.96,90.01);
    ctx.bezierCurveTo(86.02,96.43,93.25,86.9,99.57,83.51);
    ctx.bezierCurveTo(109.28,69.77,123.07,52.2,114.55,34.61);
    ctx.bezierCurveTo(114.5,31.06,108.23,27.19,112.33,24.37);
    ctx.bezierCurveTo(118.51,23.41,125.09,21.98,127.28,15.12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
        ctx.strokeStyle = 'rgba(100,100,100,0)';

    //context.beginPath();
    //  context.rect(188, 50, 200, 100);
    //  context.fillStyle = 'yellow';
    //  context.fill();
    //  context.lineWidth = 7;
    //  context.strokeStyle = 'black';
    //  context.stroke();
    
        
}
function drawDebugDots(ctx) {
    
ctx.beginPath();
ctx.strokeStyle = 'red';
    ctx.rect(127.28,15.12,3,3);
    ctx.rect(108.4368421,68.00578947,4,4);

    ctx.stroke();

    


    ctx.strokeStyle = 'blue';
    ctx.rect(142.28,26.09,2,2);
ctx.rect(137.42,40.56,2,2);
ctx.rect(143.17,45.27,2,2);
ctx.rect(139.39,53.29,2,2);
ctx.rect(149.31,62.73,2,2);
ctx.rect(136.41,68.96,2,2);
ctx.rect(132.32,99.81,2,2);
ctx.rect(127.72,112.98,2,2);
ctx.rect(113.36,112.07,2,2);
ctx.rect(101.72,106.54,2,2);
ctx.rect(59.18,112.46,2,2);
ctx.rect(14.4,92.11,2,2);
ctx.rect(36.32,24.52,2,2);
ctx.rect(92.67,53.32,2,2);
ctx.rect(72.16,81.4,2,2);
ctx.rect(93.25,86.9,2,2);
ctx.rect(123.07,52.2,2,2);
ctx.rect(108.23,27.19,2,2);
ctx.rect(125.09,21.98,2,2);
    ctx.stroke();
ctx.beginPath();
ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.rect(145.98,34.09,2,2);
ctx.rect(132.92,41.16,2,2);
ctx.rect(148.8,45.1,2,2);
ctx.rect(144.36,58.66,2,2);
ctx.rect(148.96,65.83,2,2);
ctx.rect(133.96,74.96,2,2);
ctx.rect(138.96,110.08,2,2);
ctx.rect(123.99,110.08,2,2);
ctx.rect(110.83,116.98,2,2);
ctx.rect(95.93,103.02,2,2);
ctx.rect(41.85,105.28,2,2);
ctx.rect(9.77,78.14,2,2);
ctx.rect(62.64,30.41,2,2);
ctx.rect(88.66,70.7,2,2);
ctx.rect(78.96,90.01,2,2);
ctx.rect(99.57,83.51,2,2);
ctx.rect(114.55,34.61,2,2);
ctx.rect(112.33,24.37,2,2);
ctx.rect(127.28,15.12,2,2);
    ctx.stroke();

    ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.rect(134.92,18.4,2,2);
ctx.rect(148.78,42.75,2,2);
ctx.rect(133.41,50.19,2,2);
ctx.rect(153.06,50.24,2,2);
ctx.rect(145.38,61.41,2,2);
ctx.rect(144.23,68.93,2,2);
ctx.rect(129.5,86.74,2,2);
ctx.rect(138.94,118.49,2,2);
ctx.rect(117.39,105.14,2,2);
ctx.rect(100.88,119.37,2,2);
ctx.rect(78.71,108.2,2,2);
ctx.rect(28.14,101.46,2,2);
ctx.rect(0.93,48.29,2,2);
ctx.rect(80.45,33.65,2,2);
ctx.rect(87.45,78.17,2,2);
ctx.rect(86.02,96.43,2,2);
ctx.rect(109.28,69.77,2,2);
ctx.rect(114.5,31.06,2,2);
ctx.rect(118.51,23.41,2,2);
    ctx.stroke();
ctx.beginPath();
    ctx.restore();
    ctx.save();
    ctx.restore();
};

var squirrelPoints=[[0,0,0,0,127.28,15.12],
[134.92,18.4,142.28,26.09,145.98,34.09],
[148.78,42.75,137.42,40.56,132.92,41.16],
[133.41,50.19,143.17,45.27,148.8,45.1],
[153.06,50.24,139.39,53.29,144.36,58.66],
[145.38,61.41,149.31,62.73,148.96,65.83],
[144.23,68.93,136.41,68.96,133.96,74.96],
[129.5,86.74,132.32,99.81,138.96,110.08],
[138.94,118.49,127.72,112.98,123.99,110.08],
[117.39,105.14,113.36,112.07,110.83,116.98],
[100.88,119.37,101.72,106.54,95.93,103.02],
[78.71,108.2,59.18,112.46,41.85,105.28],
[28.14,101.46,14.4,92.11,9.77,78.14],
[0.93,48.29,36.32,24.52,62.64,30.41],
[80.45,33.65,92.67,53.32,88.66,70.7],
[87.45,78.17,72.16,81.4,78.96,90.01],
[86.02,96.43,93.25,86.9,99.57,83.51],
[109.28,69.77,123.07,52.2,114.55,34.61],
[114.5,31.06,108.23,27.19,112.33,24.37],
[118.51,23.41,125.09,21.98,127.28,15.12]];

function centerOfPoints(array) {
    var maxx=-9999999999;
    var maxy=-9999999999;
    var minx=miny=999999999999;
    for(var i = 1;i<array.length;i++){
	if (maxx<array[i][4]) {
	    maxx = array[i][4]
	}
	if (maxy<array[i][5]) {
	    maxy = array[i][5]
	}
	if (minx>array[i][4]) {
	    minx = array[i][4]
	}
	if (miny>array[i][5]) {
	    miny = array[i][5]
	}
    }
    centerx=(maxx-minx)/2+minx;
    centery=(maxy-miny)/2+miny;
    return {"x":centerx,"y":centery};
}
function radiusFromCenter(array) {
    var radius=0;
    center=centerOfPoints(array);
    
    for(var i = 1;i<array.length;i++){
	distance=Math.sqrt(Math.pow(center["x"]-array[i][4],2)+Math.pow(center["y"]-array[i][5],2));
	//console.log(i+" "+distance);
	if (distance>radius) {
	    radius=distance;
	}
    }
    return radius;

}

var drawSquirrel = function(ctx,points) {
    

    //ctx.translate(center["x"],center["y"]);
    ctx.beginPath();
    ctx.moveTo(points[0][4],points[0][5]);
    for(var i = 1;i<points.length;i++){
    ctx.bezierCurveTo(points[i][0],points[i][1],points[i][2],points[i][3],points[i][4],points[i][5]);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //console.log(ctx.fillStyle);
}

function findMiddlePoint(point1,point2){
    
    var value=Array();
    
    var pos="x";
	{
	p1=Math.max(point1[pos],point2[pos]);
	p2=Math.min(point1[pos],point2[pos]);
	value[pos]=(p1-p2)/2+p1;
	}
    var pos="y";
	{
	p1=Math.max(point1[pos],point2[pos]);
	p2=Math.min(point1[pos],point2[pos]);
	value[pos]=(p1-p2)/2+p1;
	}
    return value;
}


function playScales() {
    
   center=centerOfPoints(squirrelPoints);
   scale1=1.2;
   ctx.scale(scale1,scale1);
   ctx.fillStyle="orange";
   drawSquirrel(ctx,squirrelPoints);
   
   //
   
   center2=centerOfPoints(squirrelPoints);
   //middle=findMiddlePoint(center,center2);
   scale2=0.8;
   factor=Math.abs(scale1-scale2)/2;
   ctx.translate(center["x"]*factor,center["y"]*factor);
   ctx.scale(scale2,scale2);
   ctx.fillStyle="red";
   drawSquirrel(ctx,squirrelPoints);
   ctx.save();
   
   scale3=2.8;
   factor=Math.abs(scale3-scale1)/2;
   ctx.translate(center["x"]*factor,center["y"]*factor);
   ctx.scale(scale3,scale3);
   ctx.fillStyle="blue";
   drawSquirrel(ctx,squirrelPoints);
   ctx.restore();
   
   //ctx.fillStyle="blue";
   ////ctx.fillRect(center2["x"],center2["y"],10,10);
   //ctx.fillRect(center["x"],center["y"],10,10);


}

function centerAndScale(ctx,center,scale2){

    
	//ctx.fillRect(center["x"],center["y"],10,10);
    factor=scale2;
    center2={"x":center["x"]-center["x"]*factor,"y":center["y"]-center["y"]*factor};

    ctx.translate(center2["x"],center2["y"]);
    ctx.scale(scale2,scale2);
	//ctx.fillRect(center["x"],center["y"],10,10);

}

function identifyPoints(points){
    for (var i=0;i<points.length;i++){
        ctx.fillText(i,points[i][4]+5,points[i][5]+5,20);
	ctx.fillRect(points[i][4]-2,points[i][5]-2,5,5);
    }
}

function lameAttemptOfScalingSquirrels() {

ctx.translate(100,100);
    scale1=2;
    scale2=1.2;
ctx.fillStyle="red";

ctx.scale(scale1,scale1);

drawSquirrel(ctx,squirrelPoints);

ctx.save();

ctx.fillStyle="blue";

////I separate squirrel to make it look better when enlarged. This is caco stuff.
identifyPoints(squirrelPoints);
////with this I know I want to find the centers of points 1-10;16-19 and 11-15

indexes1=[2,3,4,5,6,7,8,9,10,16];
set1=Array();
    for (var i=0;i<indexes1.length;i++){
	set1.push(squirrelPoints[indexes1[i]]);
    }
    
indexes2=[10,11,12,13,14,15,16];
set2=Array();
    for (var i=0;i<indexes2.length;i++){
	set2.push(squirrelPoints[indexes2[i]]);
    }
    
indexes3=[0,1,2,17,18,19];
set3=Array();
    for (var i=0;i<indexes3.length;i++){
	set3.push(squirrelPoints[indexes3[i]]);
    }

ctx.save();
ctx.fillStyle="green";
//drawSquirrel(ctx,set2);

//identifyPoints(set2);
center1=centerOfPoints(set1);
ctx.fillRect(center1["x"]-5,center1["y"]-5,10,10);

center2=centerOfPoints(set2);
ctx.fillRect(center2["x"]-5,center2["y"]-5,10,10);
//ctx.fill();

center3=centerOfPoints(set3);
ctx.fillRect(center3["x"]-5,center3["y"]-5,10,10);


ctx.beginPath();
ctx.fillStyle="rgba(200,100,0,0.6)";
ctx.arc(center1["x"],center1["y"],radiusFromCenter(set1)*1.2,0,2*Math.PI,false);
ctx.clip();
centerAndScale(ctx,center1,1.09);
drawSquirrel(ctx,squirrelPoints);
ctx.save();
//ctx.stroke();
//ctx.beginPath();
ctx.arc(center2["x"],center2["y"],radiusFromCenter(set2)*1.2,0,2*Math.PI,false);
ctx.clip();
centerAndScale(ctx,center2,1.09);
drawSquirrel(ctx,squirrelPoints);
ctx.save();
ctx.arc(center3["x"],center3["y"],radiusFromCenter(set3)*1.2,0,2*Math.PI,false);
ctx.clip();
centerAndScale(ctx,center3,1.09);
drawSquirrel(ctx,squirrelPoints);
ctx.save();

ctx.restore();
ctx.restore();
ctx.restore();
}

//function moveSquirrelHalos(points,translate,steps,colorcallback) {
//TODO:CABLE ALL THIS
function moveSquirrelHalos(points,translate) {

    for (var i=1;i<10;i++){
	a=100/i;
	ctx.translate(translate["x"],translate["y"]);
	ctx.fillStyle="rgba(200,"+i*20+",0,"+a+")"
	ctx.strokeStyle="rgba(200,"+i*20+",0,"+a+")";
	ctx.lineWidth=(9-i)*10+1;
	drawSquirrel(ctx,points);
	ctx.stroke();
    }
}

function prepareSquirrelHalos(points,steps,translate,color,strokew,newSequence){
    if (newSequence) {
	strokeacum= 0;
	translateacum = {"x":0,"y":0};
	coloracum=Array();
	coloracum[0]=[color(0,steps())];
	    for (var i=1;i<=steps();i++){
		translateacum["x"]=translate(i,steps())["x"]+translateacum["x"];
		translateacum["y"]=translate(i,steps())["y"]+translateacum["y"];
		strokeacum=strokew(i,steps())+strokeacum;
		
		coloracum.push(color(i,steps()));
		//console.log(color(i,steps()));
	    }
	}

	ctx.fillStyle=coloracum[0];
	ctx.fillRect(-100,-100,canvas.width,canvas.height);
	//don't ask me why this needs a -1
	//ctx.translate(-(translateacum["x"]+strokew(steps(),steps())),-(translateacum["y"]+strokew(steps(),steps())));

	ctx.translate(-(translateacum["x"]+strokew(steps(),steps())-1),-(translateacum["y"]+strokew(steps(),steps())-1));

    //return {"translateacum":translateacum,"strokeacum":strokeacum,"coloracum":coloracum}
}

function squirrelHalos(points,steps,translate,color,strokew,newSequence) {
	
	prepareSquirrelHalos(points,steps,translate,color,strokew,newSequence);
	//console.log(translate(i,steps));
	//ctx.rect(0,0,translateacum["x"]+strokew(steps(),steps()),translateacum["y"]+strokew(steps(),steps()));
	//ctx.stroke();
	//console.log(-(translateacum["x"]+strokeacum)+','+-(translateacum["y"]+strokeacum));

	
	
	for (var i=1;i<=steps();i++){

	    
	    ctx.translate(translate(i,steps())["x"],translate(i,steps())["y"]);

	    ctx.strokeStyle="rgba(0,0,0,1)";
	    ctx.lineWidth=strokew(i,steps())+1;
	    drawSquirrel(ctx,points(i,steps()));
	    ctx.stroke();
	    //ctx.globalCompositeOperation="source-out";
	    
	    ctx.fillStyle=coloracum[i];
	    //ctx.translate(translate(i,steps())["x"],translate(i,steps())["y"]);
	    ctx.strokeStyle=ctx.fillStyle;
	    ctx.lineWidth=strokew(i,steps());
	    drawSquirrel(ctx,points(i,steps()));
	    //ctx.rect(0,0,10,10);
	    
	    ctx.stroke();
	    //console.log(strokew(i,steps()));

	}
	counter++;


}
function moveSquirrelHalosOUT(points,translate) {
    

    //drawSquirrel(ctx,points);

    //for (var i=1;i<10;i++){
	
	//ctx.translate(translate["x"],translate["y"]);
    i=5;{
    a=100/i;

	ctx.lineWidth=(9-i)*10+1;
	ctx.fillStyle="rgba(200,"+i*20+",0,"+a+")"
	ctx.strokeStyle="rgba(200,"+i*20+",0,"+a+")";
	    ctx.lineWidth=(i)*8+1;
	    drawSquirrel(ctx,points);
	    ctx.stroke();
	    ctx.fill();
	    ctx.globalCompositeOperation="destination-out";


//console.log(i*28);

	    ctx.lineWidth=(i-1)*8;
	    drawSquirrel(ctx,points);
	    ctx.fill();
	    ctx.stroke();
	    ctx.fill();
	    
	    ctx.globalCompositeOperation="destination-over";
	    //ctx.fillRect(30,30,30,30);
    i=4;
	ctx.fillStyle="rgba(200,"+i*20+",0,"+a+")"
	ctx.strokeStyle="rgba(200,"+i*20+",0,"+a+")";
	    ctx.lineWidth=(i)*8+1;
	    drawSquirrel(ctx,points);
	    ctx.stroke();
	    ctx.fill();
	    ctx.globalCompositeOperation="destination-out";
	    	    
	    ctx.lineWidth=(i-1)*8;
	    drawSquirrel(ctx,points);
	    ctx.fill();
	    ctx.stroke();
	    ctx.fill();
	    
	    ctx.globalCompositeOperation="destination-over";
	    ctx.fillRect(30,30,30,30);
    }
}

function moveSquirrelHalosOUT2(points,translate) {
   

    //drawSquirrel(ctx,points);

    //for (var i=10;i>2;i--){
	
	//ctx.translate(translate["x"],translate["y"]);
    i=5;{
    a=100/i;

    //Drawing extern ring

	ctx.fillStyle="rgba(200,"+i*20+",0,"+a+")"
	ctx.strokeStyle="rgba(200,"+i*20+",0,"+a+")";
	    ctx.lineWidth=(i)*8+1;
	    drawSquirrel(ctx,points);
	    ctx.stroke();
	    ctx.fill();
	    ctx.globalCompositeOperation="destination-out";




	    ctx.lineWidth=(i-1)*8;
	    drawSquirrel(ctx,points);
	    ctx.fill();
	    ctx.stroke();
	    ctx.fill();
	    
	    ctx.globalCompositeOperation="destination-over";

}
}
function draw() {
    counter++;
    //console.log(counter);
//    if (counter<2500) {
//	requestAnimationFrame(draw);
//	animate(counter);
//    }
 
    setInterval(animate,100,counter); 

}

function animateold(counter) {
//    var step=counter%10;
//    var direction=Array();
//    var translate=Array();
//
//    direction["x"]=0;
//    direction["y"]=0;
//    
//    if (step==0) {
//	direction["x"]=Math.floor(Math.random()*(2)-1); // possible values: 1, 0, -1
//	direction["y"]=Math.floor(Math.random()*(2)-1); // possible values: 1, 0, -1
//
//    }
//    
//    translate["x"]=step*direction["x"];
//    translate["y"]=step*direction["y"];
    
    for (var i = 0;i<10;i++) {
	    moveSquirrelHalos(squirrelPoints,i*3)

    }
    //moveSquirrelHalos(squirrelPoints,translate)
}

function pointsForSquirrelHalos(i,steps){
    return squirrelPoints;
}

function stepsForSquirrelHalos(){
    return 10;
}

function translateForSquirrelHalos(i,steps){
      //return {"x":0,"y":0};
    return {"x":5,"y":5};
    //return {"x":(steps-i)*2,"y":0};
}

function colorForSquirrelHalos(i,steps){
    var r = Math.floor(Math.random()*200);
    //var g = Math.floor(150 + i/steps*100);
    var g = Math.floor(Math.random()*100);
    var b = Math.floor(Math.random()*200);
	if (Math.abs(r-g)<50) {
	    g=g+50;
	} if (Math.abs(g-b)<50){
	    b=b+50;
	}if (Math.abs(b-r)<50){
	    r=r+50;
	}
    var r = 100+15*i;
    var g = 50+10*i;
    var b = 10;
    var a = 1;
    return 'rgba('+r+','+g+','+b+','+a+')';
}

function strokewForSquirrelHalos(i,steps){
    //console.log(-Math.log(i/steps)*100);
    return -Math.log(Math.sqrt(i/steps))*300+1;
    //return (steps-i)*10+1;
    
}

var canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');
ctx.translate(0,0);
ctx.scale(3,3);
ctx.lineJoin="rounded";
counter=0;

var translateacum = Array();
var strokeacum= 0;
var coloracum=Array();
var animationCycle=10;

var translate=Array();
var direction=Array();
var amplitudes = [2,4,6,8,10,-10,-8,-6,-4,-2];

//ctx.setLineDash([2,3]);
//ctx.lineCap="round";

function animate(counter){
    	      //quadTranslateForAnimatedSquirrelHalos(1,1);

    squirrelHalos(pointsForSquirrelHalos,
	      /*stepsForSquirrelHalos,*/
	      function (i,steps) {
		    //return 10+counter*2;
		    return 20;

		},
	      NLtranslateForAnimatedSquirrelHalos,
	      colorMathed,
	      strokewForSquirrelHalos,
	      true);
    //counter++;
    //console.log(counter);
}

function getRandomDirection(step) {
    
    if (step==0) {
	    direction["x"]=Math.floor(Math.random()*3-1); // possible values: 1, 0, -1
	    direction["y"]=Math.floor(Math.random()*3-1); // possible values: 1, 0, -1
	}
	if (direction["x"]==0&&direction["y"]==0) {
	    direction["y"]=-1;
	}
    return direction;
}
function translateForAnimatedSquirrelHalos(i,steps){
    
    var step=counter%animationCycle;
    
    direction=getRandomDirection(step);
    
    if (step<=Math.floor(animationCycle/2)) {
    translate["x"]=step*direction["x"]*Math.cos(counter*1/2);
    translate["y"]=step*direction["y"]*Math.sin(counter*1/2);
    } else {
    translate["x"]=(animationCycle-step)*direction["x"]*Math.cos(counter*1/2);
    translate["y"]=(animationCycle-step)*direction["y"]*Math.sin(counter*1/2);
    }
    
    return translate;
}	
var max=10;

function NLtranslateForAnimatedSquirrelHalos(i,steps){
    var step=counter%animationCycle;
    
    direction=getRandomDirection(step);

    if (step<=Math.floor(animationCycle/2)) {
    translate["x"]=(step/animationCycle)*direction["x"]*Math.sqrt(i)*2*Math.cos(counter*1/2);
    translate["y"]=(step/animationCycle)*direction["y"]*Math.sqrt(i)*2*Math.sin(counter*1/2);
    } else {
    translate["x"]=((animationCycle-step)/animationCycle)*direction["x"]*Math.sqrt(i)*2*Math.cos(counter*1/2);
    translate["y"]=((animationCycle-step)/animationCycle)*direction["y"]*Math.sqrt(i)*2*Math.sin(counter*1/2);
    }
    
    return translate;
}	

//draw();
var colorSwitch=0;
function changeTranslate() {
    
//    if (counter<1) {
//	draw();
//    }
    
    console.log(counter);
    
    squirrelHalos(pointsForSquirrelHalos,
	      /*stepsForSquirrelHalos,*/
	      function (i,steps) {
		    //return 10+counter*2;
		    return 20;

		},
	      translateForAnimatedSquirrelHalos,
	      colorChanger,
	      strokewForSquirrelHalos,
	      true); 
    //counter++;

    colorSwitch++;
    
//    for (var i=19;i<31;i++){
//	for (var j=0;j<6;j=j+2){
//	squirrelPoints2[i][j]+=1;
//	}
//	for (var j=1;j<6;j=j+2){
//	squirrelPoints2[i][j]-=1;
//	}
//    }
//    squirrelPoints2[19][0]=squirrelPoints2[19][4];
//    squirrelPoints2[19][1]=squirrelPoints2[19][5];
//    ctx.fillStyle="black";	
//    drawSquirrel(ctx,squirrelPoints2);
//    ctx.fillStyle="blue";	
//    identifyPoints(squirrelPoints2);

}


function colorChanger(i,steps) {
    colors=[[0,255,255],[0,0,255],[102,0,204],[204,0,102],[255,0,0],[255,153,51],[255,255,0],[0,255,0]];
    var pick1=colorSwitch%8;
    var pick2=(colorSwitch+3)%8;
    var finalColor=Array();
    
    for (c=0;c<3;c++){
	finalColor[c]=Math.ceil((i/steps)*(colors[pick2][c]-colors[pick1][c])+colors[pick1][c]);
    }
    
    return "rgba("+finalColor[0]+","+finalColor[1]+","+finalColor[2]+",1)";
}

var squirrelPoints2 = [
		[0,0,0,0,154.44,39.43],
		[155.98,37.89,156.58,35.01,158.87,34.5],
		[162,36.54,164.53,39.37,167.64,41.46],
		[172.41,44.69,176.31,49.55,177.29,55.33],
		[177.58,57.14,176.91,59.19,175.33,60.21],
		[171.04,60.82,166.66,60.48,162.34,60.81],
		[162.97,63.6,164.6,66.28,167.43,67.25],
		[172.95,67.13,178.9,61.8,183.92,66.35],
		[182.54,70.56,177.85,72.03,175.38,75.41],
		[174.6,80.72,181.41,81.95,183.55,85.91],
		[181.01,89.5,175.51,87.67,171.92,89.8],
		[166.52,91.59,164.2,97.33,163.6,102.53],
		[163.1,107.97,163.27,113.59,165.28,118.75],
		[166.92,123.69,170.5,128.04,170.62,133.42],
		[167.61,133.76,164.46,134.16,161.53,133.12],
		[157.65,131.71,154.13,129.31,150.03,128.5],
		[145.78,130.45,143.86,135.55,139.82,137.72],
		[134.69,137.31,131.79,132.55,129.12,128.75],
		[127.25,125.84,123.42,128.09,120.9,128.77],
		[113.12,132.21,104.5,132.09,96.21,133.07],
		[89.7,134.27,83.07,135.01,76.47,134.24],
		[65.86,132.76,54.91,134.58,44.51,131.46],
		[37.59,129.54,28.5,130.77,23.78,124.31],
		[19.83,116.6,19.28,107.08,21.91,98.88],
		[28.81,85.97,41.77,77.7,54.86,72.02],
		[59.93,69.71,65.63,70.75,71.01,70.47],
		[77.36,70.2,83.49,72.15,89.54,73.8],
		[93.36,74.69,95.49,78.24,98.19,80.76],
		[105.09,86.62,105.1,96.79,103.71,105.02],
		[102.77,108.41,105.15,111.78,108.26,112.96],
		[111.62,114.25,115.47,113.46,118.35,111.41],
		[125.44,106.63,132.41,101.08,136.58,93.46],
		[140.67,86.07,146.39,79.34,148.06,70.84],
		[149.75,64.89,146.18,59.37,144,54.09],
		[143,51.33,140.5,48.84,140.73,45.78],
		[144.54,42.27,151.42,44.22,154.44,39.43]];

function discoParty(i,steps) {
    
    var finalColor=[200,200,0];
    var cycle=steps;
    var instructions=[[0,-1,0],[0,0,1],[-1,0,0],[0,1,0],[0,0,-1],[1,0,0]]    
    var variation=(counter+i)*(200/cycle);
    var currentInstruction=((counter+i))%6;
    
    console.log(currentInstruction);
    for (c=0;c<3;c++){
	finalColor[c]=Math.floor(instructions[currentInstruction][c]*variation+finalColor[c]);
    }
    //console.log("rgba("+finalColor[0]+","+finalColor[1]+","+finalColor[2]+",1)");
    
    return "rgba("+finalColor[0]+","+finalColor[1]+","+finalColor[2]+",1)";
}

var variation=1;
var currentInstruction=0;
var direction=1;

function changeColorFailed(i,steps) {
    
    var finalColor=[200,0,0];
    var cycle=steps;
    
    //var instructions=[[0,0,1],[-1,0,0],[0,1,0],[0,0,-1],[1,0,0],[0,-1,0]];
    var instructions=[[0,0,1],[1,0,0],[0,1,0],[0,0,1],[1,0,0],[0,1,0]];

    console.log(variation);

    if (variation>=200){
	variation=200-200/steps;
    }if (variation<=0){
	variation=1+200/steps;
    }
    
    variation=variation+(200/steps)*direction;
    
    
    if (variation>=200 || variation<=0) {
	console.log("daslkjsa");
	direction=direction*-1;
	currentInstruction++;
    }    
    currentInstruction=currentInstruction%6;
console.log(currentInstruction);
    
    for (c=0;c<3;c++){
	finalColor[c]=Math.floor(instructions[currentInstruction][c]*variation+finalColor[c]);
    }
    //console.log("rgba("+finalColor[0]+","+finalColor[1]+","+finalColor[2]+",1)");
    console.log("rgba("+finalColor[0]+","+finalColor[1]+","+finalColor[2]+",1)");
    return "rgba("+finalColor[0]+","+finalColor[1]+","+finalColor[2]+",1)";
}
var x=0;


function colorMathed(i,steps){
    finalColor=Array();
    x=x+0.01;
//    k=x/Math.PI;
//    if ( Math.abs(x-Math.PI)<0.5 ){
//	x=x+0.01;
//    }
    
    finalColor[0]=Math.floor(-1*Math.cos(Math.PI*Math.cos(x))*200);
    finalColor[1]=Math.floor(-1*Math.cos(Math.PI*Math.cos(x+Math.PI/3))*200);
    finalColor[2]=Math.floor(-1*Math.cos(Math.PI*Math.cos(x+2*Math.PI/3))*200);
    
//    for (c=0;c<3;c++){
//	if (finalColor[c]>200) {
//	    finalColor[c]=200
//	}
//	if (finalColor[c]<0) {
//	    finalColor[c]=0
//	}
//    }
//    if (finalColor[0]==0&&finalColor[1]==0&&finalColor[2]==0) {
//	console.log(x/Math.PI);
//    }
    //console.log("rgba("+finalColor[0]+","+finalColor[1]+","+finalColor[2]+",1)");
    return "rgba("+finalColor[0]+","+finalColor[1]+","+finalColor[2]+",1)";
}



















