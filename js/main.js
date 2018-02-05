// HORIZONTAL SCROLL
var max = document.getElementById('gallery').clientWidth;
var scroll = 0;
var x = document.getElementById('projecto').clientWidth;

document.getElementById('wrapper').addEventListener('wheel', function(e) {
    
    //scroll up = scroll right
    if (e.deltaY < 0) {
        
        scroll = scroll + x;
        
        this.scroll({
            left: scroll, 
            behavior: 'smooth'
        });
        
        
        if(scroll > 0){
            document.getElementById('ball').classList.remove('highlight');
            document.getElementById('ball2').classList.add('highlight');
        }
        
    };
    
    //scroll down = scroll left
    if (e.deltaY > 0) { 
        
        scroll = scroll - x;
        
        this.scroll({
            left: scroll, 
            behavior: 'smooth'
        });
        
        if(scroll <= 0){
            document.getElementById('ball').classList.add('highlight');
            document.getElementById('ball2').classList.remove('highlight');
        }
        
    }
        
    //scroll can't go under 0
    if (scroll <= 0){
        scroll = 0;
    }
    //scroll can't get over max
    if (scroll >= max){
        scroll = max;
    }
        
 });