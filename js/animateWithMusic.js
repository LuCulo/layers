//Handles HTML and wiring data
//Using Three v60

//var canvas = new fabric.StaticCanvas('canvas');


var events = new Events();
//var eventEmitter = new events.EventEmitter();

var elements = Array();
var params = Array();
var even=true;
var canvas = new fabric.Canvas('canvas');

var counter = 0;
 //CIRCLE
var circle = new fabric.Circle({
  left: 40,
  top: 0,
  radius: 50,
  fill:'white',
  stroke:'black',
  offsetX:'center',
  offsetY:'center'
});




canvas.add(circle);


var linear=function (t, b, c, d) {return c*t/d + b;};

function nextColor(counter){
  //colorstring='rgb(181,59,59)'
  var colorString='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';

  //console.log(colorstring);
  return(colorString);

}

var animatecircle=function(){


  if ((circle.get('radius')+circle.get('left')>canvas.getWidth()-50 && circle.get('left')>20) ||
      (circle.get('radius')<30||circle.get('left')<3)){
    even=!even;
    canvas.deactivateAll();
    counter=1;
    }
  //console.log(even);

  var endValue = circle.get('radius')
      if (even) {
        endValue += Math.floor(AudioHandler.levelsData[6]*30);
      } else{
        endValue -= Math.floor(AudioHandler.levelsData[6]*30);
      }
      
   var radius=circle.get('radius');
    
     {
      fabric.util.animate({
        
        startValue: circle.get('radius'),
        
        endValue: endValue,
        duration: 300,
        onChange: function(value) {
          circle.radius = value;
            
            if (even) {
              circle.left += value/100;
            } else {
            circle.left -= value/100;
            }
            
          canvas.renderAll();
        },
        onComplete: function() {
          counter++;
          var circle2 = new fabric.Circle({
            left: circle.left,
            top: circle.top,
            radius: circle.radius,
            fill:nextColor(counter),
            stroke:'black',
            offsetX:'center',
           offsetY:'center'
            });
      
          canvas.add(circle2);
          circle2.moveTo(-counter);
          circle.moveTo(-counter-1);

    
        }
      });
    }}


   

function waitFor(){
      //console.log("alskjdlkjasdsaljdaslkdjas");

  if (AudioHandler.levelsData[0]>0) {
    //console.log("alskjdlkjasdsaljdaslkdjas");

    animatecircle(circle);

  } else {
    //console.log(AudioHandler.levelsData[0]>0);
  }
  }


  events.on('onBeat', animatecircle);
