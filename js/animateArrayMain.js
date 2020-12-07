
var elements = Array();
var params = Array();

var canvas = new fabric.Canvas('canvas');

{ //CIRCLE
var circle = new fabric.Circle({
  left: 100,
  top: 100,
  radius: 50
});

circle.setGradient('fill', {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: circle.height,
  colorStops: {
    0: 'white',
    1: 'orange'
  }
});


canvas.add(circle);
elements.push(circle);
params.push({'name':'circle',
              'animate':'radius',
              'value':'200',
              'easing':linear,
              'duration':1000,
              'onCompleteAction':'animate',
              'onCompleteValue':'50',
              'cycle':'inf'});


}
{ //RECT
        var rect = new fabric.Rect({
          left:400,
          top: 200,
          width: 300,
          height: 400,
          fill:'blue'
          })
        
        
        canvas.add(rect);
        elements.push(rect);
        params.push({'name':'rect',
                      'animate':'top',
                      'value':'400',
                      'easing':fabric.util.ease.easeOutBounce,
                      'duration':2000,
                      'onCompleteAction':'set',
                      'onCompleteValue':{'top':200},
                      'cycle':2});
        

        rect.setGradient('fill', {
          x1: 0,
          y1: rect.width,
          x2: rect.height,
          y2: 0,
          colorStops: {
            0: 'yellow',
            1: 'red'
          }
        });
  }
  
{ //RECT2
        var rect2 = new fabric.Rect({
          left:600,
          top: 200,
          width: 200,
          height: 300,
          fill:'red'
          })
        
        
        canvas.add(rect2);
        elements.push(rect2);
        params.push({'name':'rect2',
                      'animate':'width',
                      'value':'400',
                      'easing':fabric.util.ease.easeOutBounce,
                      'duration':2000,
                      'onCompleteAction':'set',
                      'onCompleteValue':{'width':200},
                      'cycle':'inf'});
        
  }       
{ //POLYGON
        var startPoints = [
          {x: 0, y: 42},
          {x: 155, y: 0},
          {x: 155, y: 243},
          {x: 0, y: 256}
        ];
        
        
        var clonedStartPoints = startPoints.map(function(o){
          return fabric.util.object.clone(o);
        });
        
        
        var polygon = new fabric.Polygon(clonedStartPoints, {
          left: 0,
          top: 0,
          fill: 'purple',
          selectable: false
        });
        
        canvas.add(polygon);
        elements.push(polygon);
        //console.log(nextPoints(polygon,3));
        params.push({'name':'polygon',
                      'animate':'points',
                      'destination':nextPoints(polygon,3),
                      'easing':linear,
                      'duration':1000,
                      'onCompleteAction':'set',
                      'onCompleteValue':{'points':startPoints},
                      'cycle':'inf'});
    
  }
  
  counter=[0,0,0];
        setInterval(animateArray,2500,elements,params,counter);