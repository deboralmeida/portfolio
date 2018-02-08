// ENABLE HORIZONTAL SCROLL 
// AND HIGHLIGHT CURRENT PROJECT
var projNum = document.getElementsByClassName('projecto').length -1;
var galleryW = document.getElementById('gallery').style.width = "calc( 100% *"+projNum+")";

var projW = document.querySelectorAll('.projecto');
    
    //change projects size and display
    for(var i = 0; i < projW.length; i++){
        projW[i].style.width = "100vw"; 
    };

var scroll = 0;
var scrollW = document.getElementById('projecto').clientWidth;
var maxScroll = document.getElementById('gallery').clientWidth;

var count = 0;
var ball = document.getElementsByClassName("ball");
var maxCount = ball.length -1;

ball[count].classList.add('highlight');

document.getElementById('wrapper').addEventListener('wheel', function(e) {
    
    ball[count].classList.remove('highlight');
    
    //scroll up = scroll right
    if (e.deltaY < 0) {
        
        scroll = scroll + scrollW;
        
        this.scroll({
            left: scroll, 
            behavior: 'smooth'
        });
        
        //scroll can't get over max
        if (count >= maxCount) {
            
            count = maxCount;
            ball[count].classList.add('highlight');
            
        } else {
            
            count = count + 1;
            ball[count].classList.add('highlight');
            
        }
        
    };
    
    //scroll down = scroll left
    if (e.deltaY > 0) { 
        
        scroll = scroll - scrollW;
        
        this.scroll({
            left: scroll, 
            behavior: 'smooth'
        });
        
        //scroll can't get under 0
        if (count <= 0) {
            
            count = 0;
            ball[count].classList.add('highlight');
            
        } else {
            
            count = count - 1;
            ball[count].classList.add('highlight');
            
        }

    }

    //scroll can't go under 0
    if (scroll <= 0) {
        scroll = 0;
    }
    
    //scroll can't get over max
    if (scroll >= maxScroll) {
        scroll = maxScroll;
    }
       
 });


//UPDATE VALUES WHEN WINDOW IS RESIZED
window.addEventListener("resize", function(){
    
    scrollW = document.getElementById('projecto').clientWidth;
    maxScroll = document.getElementById('gallery').clientWidth;
    
});


// PROJECT TAGS
//click > ler tag DONE
//esconder o resto

Array.from(document.getElementsByClassName('link')).forEach(function (element){
    
    element.onclick = function(){
        
        //read the tag that was clicked
        var tags = this.textContent;
        
        //console.log(tags);

        var toShow = document.querySelectorAll('.'+tags);
        var toHide = document.querySelectorAll('.projecto, .ball');
        
        //hide all projects and balls
        for(var i = 0; i < toHide.length; i++){
            toHide[i].style.display = "none"; 
        };
        
        //how many projects are going to be visible with selected tag
        var visibleTag = 0;
        
        //show all projects with selected tag
        for(visibleTag; visibleTag < toShow.length; visibleTag++){
            toShow[visibleTag].style.display = "inline-block";
        };
        
        //update the number of projects
        projNum = visibleTag/2;
        
        //show all
        if(tags == "all"){
            
            for(var i = 0; i < toHide.length; i++){
                toHide[i].style.display = "inline-block"; 
            };
            
            //all projects are visible
            visibleTag = document.getElementsByClassName('projecto').length -1;
            //update the number of projects
            projNum = visibleTag;
            
        }
        
        //update the gallery's width
        document.getElementById('gallery').style.width = "calc( 100% *"+projNum+")";     
        //scroll is set back to 0
        scroll = 0;
        //update maxScroll
        maxScroll = document.getElementById('gallery').clientWidth;             
        //scroll to begining of page
        document.getElementById('wrapper').scroll({
            left: scroll
        });
        
    };
    
});


// GRID DISPLAY
var grid = document.getElementById('grid');

grid.addEventListener('click', function(){
    
    //change gallery width
    document.getElementById('gallery').style.width = "100%";
    var windW = document.getElementById('gallery').offsetWidth;
    var windH = document.getElementById('gallery').offsetHeight;
    //numero de projectos / área
    var area = Math.sqrt(windH*windW);
    var size = area/projNum;

    var projNum2 = document.getElementsByClassName('projecto').length/3;
    
    var smth = document.querySelectorAll('.projecto');
    
    //change projects size and display
    for(var i = 0; i < smth.length; i++){
        smth[i].style.width = "calc(100%/"+projNum2+")"; 
        smth[i].style.height = "calc(100%/3)"; 
        
        smth[i].style.display = "block"; 
    };
    
    //hide balls
    for(var i = 0; i < ball.length; i++){
        ball[i].style.display = "none";
        document.getElementById('tagList').style.display = "none";
    };
    
})