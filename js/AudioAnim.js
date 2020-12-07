

var canvas = document.getElementById("audioDebug2");
ctx = canvas.getContext('2d');

var counter=0;
var radius=20;
var g=102;

var circlesCenters = Array();
for (var k=0;k<60;k++){
    circlesCenters[k]={'x':Math.random()*canvas.width,'y':Math.random()*canvas.height};
}

//var circlesCenters=[{'x':60,'y':60},{'x':160,'y':60},{'x':260,'y':60},{'x':360,'y':60},{'x':460,'y':60},{'x':560,'y':60},{'x':660,'y':60},
//		    {'x':60,'y':160},{'x':160,'y':250},{'x':260,'y':320},{'x':360,'y':450},{'x':460,'y':510},{'x':560,'y':620},{'x':660,'y':730},{'x':660,'y':840}];

function animate(counter) {
    ctx.fillStyle = "rgba(255,255,255,0.3)";

    ctx.fillRect ( 0 , 0 , canvas.width, canvas.height );
    
    for(var i=0;i<circlesCenters.length;i++){
	
	j=i%(AudioHandler.levelsData.length-5);
	
	if (AudioHandler.levelsData[j]>0) {
	    var radius=20+AudioHandler.levelsData[j]*100;
	    
	    g+=AudioHandler.levelsData[j]*10;

            var value=AudioHandler.levelsData[j];
	    //var radius2=Math.random()*Math.PI*2;
	    
	    } else {
		var radius=20;
		var value = 1;
		var radius2 = 0;
		
	    }
	ctx.beginPath();
	
	ctx.arc(circlesCenters[i]['x'],circlesCenters[i]['y'],radius,0,2*Math.PI,true);
	
	b=0;
	
	ctx.strokeStyle='rgb('+Math.floor(circlesCenters[i]['x']-circlesCenters[i]['y'])+','+Math.floor(g%255)+','+b+')';
	
	ctx.closePath();
	ctx.stroke();
    }
}



function draw() {
    counter++;
    requestAnimationFrame(draw);
    animate(counter);

}



draw();