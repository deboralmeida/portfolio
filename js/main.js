// ENABLE HORIZONTAL SCROLL 
// AND HIGHLIGHT CURRENT PROJECT
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