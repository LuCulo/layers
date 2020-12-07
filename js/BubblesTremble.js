

var canvas = document.getElementById("audioDebug2");
ctx = canvas.getContext('2d');

var counter=0;
var radius=20;
var g=102;
////ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
//ctx.fillStyle = "red";
//ctx.strokeStyle = 'rgb(255,102,0)';
//
//ctx.arc(200, 100, radius, 0, 2*Math.PI, true);
//ctx.fill();
//ctx.stroke();

var circlesCenters=[{'x':60,'y':100},{'x':160,'y':150},{'x':330,'y':50},{'x':210,'y':220},{'x':30,'y':250},{'x':210,'y':50},{'x':270,'y':200}];

////var i=1; var value = 0.4; var counter=123;
////for(var counter = 123;counter<987;counter++){    
////for(var value = 0;value<=2*Math.PI;value=value+0.001){ 
////    console.log(value);
////    ctx.fillRect(circlesCenters[i]['x']+20*Math.cos(value),circlesCenters[i]['x']+20*Math.sin(value),10,10);
////    ctx.stroke();
////}
function animate(counter) {
    ctx.fillStyle = "rgba(255,255,255,0.3)";

    ctx.fillRect ( 0 , 0 , canvas.width, canvas.height );
    
    for(var i=0;i<circlesCenters.length;i++){
	

	if (AudioHandler.levelsData[i]>0) {
	    //ctx.transform(0,0,0,0,10,10);
	    var radius=20+AudioHandler.levelsData[i]*100;
	    //circlesCenters[i]['x']=circlesCenters[i]['x']+AudioHandler.levelsData[i]*10;
	    g+=AudioHandler.levelsData[i]*10;
            var value=AudioHandler.levelsData[i];
	    var radius2=Math.random()*Math.PI*2;
	    //console.log(radius2);
	    } else {
		var radius=20;
		var value = 1;
		var radius2 = 0;
		
	    }
	//console.log(radius);
	ctx.beginPath();
	
	//ctx.arc(circlesCenters[i]['x']+AudioHandler.levelsData[i]*Math.cos(AudioHandler.levelsData[i]*Math.PI), circlesCenters[i]['y']+3*AudioHandler.levelsData[i]*Math.sin(AudioHandler.levelsData[i]*Math.PI), radius, 0, 2*Math.PI, true);
	ctx.arc(circlesCenters[i]['x']+value*Math.cos(radius2)*24,circlesCenters[i]['y']+value*Math.sin(radius2)*15,radius,0,2*Math.PI,true);
	//ctx.arc(circlesCenters[i]['x'],circlesCenters[i]['y'],radius,0,2*Math.PI,true);
	b=0;
	
	ctx.strokeStyle='rgb('+circlesCenters[i]['x']+','+Math.floor(g%255)+','+b+')';
	

	ctx.closePath();

	ctx.stroke();
    }
}



function draw() {
    counter++;
    //console.log(counter);

    requestAnimationFrame(draw);
    animate(counter);

}



draw();