// HORIZONTAL SCROLL + INDICATIVE SCROLLBAR
//var bar = document.getElementById('bar').clientWidth;
//var grow = document.getElementById('grow').clientWidth;
//var grow_W = document.getElementById('grow').clientWidth;
//console.log(bar);
//console.log(grow);
//console.log(grow_W);
var max = document.getElementById('gallery').clientWidth;
var grow = document.getElementById('project').clientWidth;
var scroll = 0;

document.getElementById('wrapper').addEventListener('wheel', function(e) {
        
    //scroll up = scroll right
    if (e.deltaY < 0) {
        
        scroll = scroll + grow;
        this.scroll({
            left: scroll, 
            behavior: 'smooth'
        });
        
        document.getElementById('grow').scroll({
            left: scroll,
            behavior: 'smooth'
        })
        //console.log('scrolling up');
            
        //scrollbar grow + test
        //don't let bar go over 100%
        /*if (grow >= bar){
            
            grow = bar;
            document.getElementById('grow').style.width = grow+"px";
            console.log(grow);
            console.log(grow_W);
            
        } else {
            
            grow = grow + grow_W;
            document.getElementById('grow').style.width = grow+"px";
            console.log(grow);
            console.log(grow_W);
            
        }*/
                
        if(scroll >= graphic_p - 50){
            document.getElementById('graphiclink').style.color = "pink";
        }
        
        if(scroll <= graphic_p - 50){
            document.getElementById('graphiclink').style.color = "#ffffff";

        }
    };
    
    //scroll down = scroll left
    if (e.deltaY > 0) { 
        
        scroll = scroll - grow;
        this.scroll({
            left: scroll, 
            behavior: 'smooth' 
        });
        //console.log('scrolling down');  
            
        //scrollbar grow - test
        //don't let bar disappear and go into negative numbers
        /*if (grow <= grow_W) {
            
            grow = grow_W;
            document.getElementById('grow').style.width = grow+"px";
            console.log(grow);
            console.log(grow_W);
            
        } else if (grow <= bar){
            
            grow = grow - grow_W;
            document.getElementById('grow').style.width = grow+"px";
            console.log(grow);
            console.log(grow_W);
            
        } */
            
        if(scroll >= graphic_p - 50){
            document.getElementById('graphiclink').style.color = "pink";
        }
        
        if(scroll <= graphic_p - 50){
            document.getElementById('graphiclink').style.color = "#ffffff";

        }
        
    }
        
    //scroll can't go under 0
    if (scroll <= 0){
        scroll = 0;
    }
    
    if (scroll >= max){
        scroll = max;
    }
        
 });


// NAV SCROLLS SECTION INTO VIEW
var web_p = document.getElementById('PROJECT_ID').offsetLeft;
var graphic_p = document.getElementById('PROJECT_ID5').offsetLeft;

//update section's position when the window is resized
window.addEventListener("resize", function(){
    web_p = document.getElementById('PROJECT_ID').offsetLeft;
    graphic_p = document.getElementById('PROJECT_ID5').offsetLeft;
});

document.getElementById('graphiclink').addEventListener("click", function(){
    //document.getElementById('wrapper').scrollLeft = graphic_p - 50;
    document.getElementById('wrapper').scroll({
            left: graphic_p - 50, 
            behavior: 'smooth' 
        });
});

document.getElementById('weblink').addEventListener("click", function(){
    document.getElementById('wrapper').scroll({
            left: web_p, 
            behavior: 'smooth' 
        });
});