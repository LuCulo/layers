var linear=function (t, b, c, d) {return c*t/d + b;};
        var canvas = new fabric.StaticCanvas('canvas');
        //var canvas = new fabric.Canvas('canvas');

        
        
        
        
        var panBackground=function(imgInstance){
          imgInstance.animate('left', '1200', {
          onChange: canvas.renderAll.bind(canvas),
          easing:linear,
          duration:(1200-imgInstance.left)*6,
          onComplete: function(){
            imgInstance.set({ left: -1100, top: 0 });
            panBackground(imgInstance);
            }});
        }
        
        
        var setupBackground=function(){

        var background = document.getElementById('space');
        var background = new fabric.Image(background, {
          top : 0,
          left : 0
        });
        canvas.add(background);


        var imgElement = document.getElementById('space');
        var movingSpace = new fabric.Image(imgElement, {
          top : 0,
          left : 0,
          opacity:0.65
        });
        

        
        canvas.add(movingSpace);
        //panBackground(movingSpace);
        
        
        var imgElement2 = document.getElementById('space');
        var movingSpace2 = new fabric.Image(imgElement2, {
          top : 0,
          left : -1200,
          opacity:0.65

        });
                
        //canvas.add(movingSpace2);
        //panBackground(movingSpace2);
        }
        
        var totoro = document.getElementById('totoro');
        var totoro = new fabric.Image(totoro, {
          top : -50,
          left : 250,

        });
        
        setupBackground();
        
        canvas.add(totoro);
        
        
        
        
        
        var rotatefootsie=function(imgInstance,pos,direction,timer,maxIter){
          
          
          timer2=timer+Math.random()*timer,
          
          
          //console.log(timer2);
          
          imgInstance.animate(direction[pos%2][0],direction[pos%2][1], {
            
            
            onChange: canvas.renderAll.bind(canvas),
            easing:fabric.util.ease.easeInCubic,
            duration:timer2,
            onComplete: function(){
              //imgInstance.set({ left: -1100, top: 0 });
                
              counter++;
              
          
              if (counter <= maxIter) {
                
                changeDirections=(counter %4==1);
                 
                 if (changeDirections) {
                //console.log('----');
                }
                
                rotatefootsie(imgInstance,pos,getDirections(changeDirections),timer,maxIter);
              }
            }
            });
          
        }
        
        var chosen = 0;
        var getDirections = function(changeDirection) {
          //var availabledirections= [['left',253],['top',-53],['left',247],['top',-47]];
          var availabledirections= [['top',-53],['left',247],['top',-47],['left',253]];

          //var availabledirections= [['left',100],['top',100],['left',0],['top',0]];
          //var availabledirections= [['top',0],['left',0],['top',100],['left',100]];

          
          if (changeDirection) {
            chosen++;
          }
          
          chosen = chosen % 4;
          //console.log(availabledirections[chosen],availabledirections[(chosen+1)%4]);
          return [availabledirections[chosen],availabledirections[(chosen+1)%4]];
          //var rand=Math.floor(Math.random()*3);
        }
        
              
        var img = document.getElementById('propuls');
           propuls = new fabric.Image(img, {
            top : -50,
            left : 250,
            
          });
        
        var animatepropuls=function(imgInstance,timer){
      
          imgInstance.animate('top', -30, {
            onChange: canvas.renderAll.bind(canvas),
            duration: timer,
            easing: fabric.util.ease.easeOutBounce,
            
            onComplete:function(){
              //console.log('dkalja');
              imgInstance.set({top:-50}); //hacer esto para que escale
              animatepropuls(imgInstance,timer)
              },
        });
        }
        //animatepropuls(propuls,2000);
        canvas.add(propuls);
        
        
        var footsie=Array();
        var counter=0;
        
        for (var i=1;i<=4;i++) {
          var img = document.getElementById('patita'+i);
           footsie[i] = new fabric.Image(img, {
            top : -50,
            left : 250,
            
          });
           
          if (counter <= 1000) {
            //console.log(getDirections(false)[0]);
            
            
            
            rotatefootsie(footsie[i],i,getDirections(false),25,40000);
            //rotatefootsie(footsie[i],i,getDirections(false),1000,400);
          }
          
          canvas.add(footsie[i]);
          
          //console.log(footsie[i].get(direction[0][0]));
          
        }
        
        
        
        var totorobody = document.getElementById('totorobody');
        var totorobody = new fabric.Image(totorobody, {
          top : -50,
          left : 250,

        });
        
       
        
        canvas.add(totorobody);