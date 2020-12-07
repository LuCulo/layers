var linear=function (t, b, c, d) {return c*t/d + b;};

 
  
var nextPoints = function(polygon,counter){
    var points = Array();
    var points = translatePoints(polygon);
    
    t= counter*50;
    
    var targetPoints=Array();
    targetPoints=[{x:-t,y:0},{x:t,y:0},
                  {x:-t,y:0},{x:t,y:0}];
  
    for (var i=0;i<points.length;i++) {
      points[i]['x'] = targetPoints[i]['x'] + points[i]['x'];
      points[i]['y'] = targetPoints[i]['y'] + points[i]['y'];
  
    }
  
    return points;
}
  //considering how to make animation logics... 
var nextPointsFunction = function(polygon,counter,callback){
    var points = Array();
    var points = translatePoints(polygon);
    
    t= counter*50;
    
    var targetPoints=Array();
    targetPoints=callback(counter,polygon.points);
    //targetPoints=[{x:-t,y:0},{x:t,y:0},
    //              {x:-t,y:0},{x:t,y:0}];
  
    for (var i=0;i<points.length;i++) {
      points[i]['x'] = targetPoints[i]['x'] + points[i]['x'];
      points[i]['y'] = targetPoints[i]['y'] + points[i]['y'];
  
    }
  
    return points;
}


  var translatePoints = function(polygon){
    var polygonCenter = polygon.getCenterPoint();

    return polygon.get('points').map(function(p) {
        return { 
          x: polygonCenter.x + p.x, 
          y: polygonCenter.y + p.y
        };
      });
  }
        


var animateArrayOnComplete = function(arrayOfElements,arrayOfParams,counter){
    {
    
    
    //console.log(counter);
    if (counter%arrayOfElements.length==0) {
    
    for (var j = 0; j < arrayOfElements.length;j++){
      element = arrayOfElements[j];
      params = arrayOfParams[j];
      
      if (params['cycle']>0 || params['cycle']=='inf'){
        //console.log("cyclic");
        if (params['onCompleteAction']=="set"){
            params['onStartAction']='set';

        }
        if (params['onCompleteAction']=="animate"){
          var val = params['onCompleteValue'];
          params['onCompleteValue']=params['value'];
          params['value']=val;
        //console.log(params['value']);
        }
        
        
      }
      
    }}
    }
  }


  function animateArray(arrayOfElements,arrayOfParams,counters) {
    //console.log(arrayOfParams);
    for (var k = 0; k < arrayOfElements.length;k++){
      element = arrayOfElements[k];
      params = arrayOfParams[k];
      
      if (params['onStartAction']=="set"){
        params['onStartAction']='';

        element.set(params['onCompleteValue']);
      }
      
      if (params['animate']=='propertyArray') {
          
      } else if (params['animate']=='points'){
        destination=params['destination'];
        for (var i = 0, len = destination.length; i < len; i++) {
 	              animatePoint(element,i, 'x', destination,params);
 	              animatePoint(element,i, 'y', destination,params);
 	            } 
      } else {
        
        element.animate(params['animate'], params['value'], {
            onChange:function(value){
                //to-do: render only once per loop
                canvas.renderAll(); 
              },
            easing:params['easing'],
            duration:params['duration'],
            onComplete:function(){
            counter[0]++;
            animateArrayOnComplete(arrayOfElements,arrayOfParams,counter[0])}
            });
      }
      
    }
  
  
  function animatePoint(polygon,i, coord, endPoints,params) {
      fabric.util.animate({
        startValue: polygon.points[i][coord],
        endValue: endPoints[i][coord],
        duration: params['duration'],
        onChange: function(value) {
          polygon.points[i][coord] = value;
          
          //if (i === polygon.points.length - 1 && coord === 'y') {
            canvas.renderAll();
          //}
        },
        onComplete: function() {
          //polygon.setCoords();
          //if (i === startPoints.length - 1 && coord === 'y') {
            animateArrayOnComplete(arrayOfElements,arrayOfParams,counter[0]);
          //}
        }
      });
    }
  
  
  
      
  };

 
        
