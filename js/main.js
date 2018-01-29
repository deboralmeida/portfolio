// HORIZONTAL SCROLL 
var scroll = 0;
var bar = 10;

document.getElementById('wrapper').addEventListener('wheel', function(e) {
        
    //scroll up = scroll right
    if (e.deltaY < 0) {
        scroll = scroll + 400;
        this.scroll({
            left: scroll, 
            behavior: 'smooth' 
        });
        //console.log('scrolling up');
            
        //scrollbar grow + test
        //don't let bar go over 100%
        if (bar == 100){
            bar = 100;
            document.getElementById('grow').style.width = bar+"%";
            console.log(bar);
        } 
        else {
            bar = bar + 10;
            document.getElementById('grow').style.width = bar+"%";
            console.log(bar);
        }
                
    }
    //scroll down = scroll left
    if (e.deltaY > 0) {  
        scroll = scroll - 400;
        this.scroll({
            left: scroll, 
            behavior: 'smooth' 
        });
        //console.log('scrolling down');  
            
        //scrollbar grow - test
        //don't let bar go under 10
        if (bar == 10) {
            bar = 10;
            document.getElementById('grow').style.width = bar+"%";
            console.log(bar);
        } else if (bar <= 100){
            bar = bar - 10;
            document.getElementById('grow').style.width = bar+"%";
            console.log(bar);
        } 
            
    }
        
    //scroll can't go under 0
    if (scroll < 0){
        scroll = 0;
    }
        
 });


// ILLUSTRATION BUTTON
document.getElementById('illustration_btn').onclick = function () {
    
    document.getElementById('graphicDesign_btn').classList.remove('selected');
    document.getElementById('web_btn').classList.remove('selected');
    document.getElementById('info_btn').classList.remove('selected');
    
    document.getElementById('graphicDesign_btn').classList.add('notSelected');
    document.getElementById('web_btn').classList.add('notSelected');
    document.getElementById('info_btn').classList.add('notSelected');

    

    if (document.getElementById('graphicDesign_gallery').style.display == 'block') {   
        document.getElementById('graphicDesign_gallery').style.display = 'none';      
    } 
    else if (document.getElementById('web_gallery').style.display == 'block') {       
        document.getElementById('web_gallery').style.display = 'none';     
    } 
    else if (document.getElementById('moreInfo').style.display == 'block') {
        document.getElementById('moreInfo').style.display = 'none';
    }

    document.getElementById('illustration_gallery').style.display = 'block';
    document.body.style.backgroundColor = '#d3d3d3';
    document.getElementsByTagName('html')[0].style.backgroundColor = '#d3d3d3';

    this.classList.remove('notSelected');
    this.classList.add('selected');

}

// GRAPHIC DESIGN BUTTON
document.getElementById('graphicDesign_btn').onclick = function() {
    
    document.getElementById('illustration_btn').classList.remove('selected');
    document.getElementById('web_btn').classList.remove('selected');
    document.getElementById('info_btn').classList.remove('selected');
    
    document.getElementById('illustration_btn').classList.add('notSelected');
    document.getElementById('web_btn').classList.add('notSelected');
    document.getElementById('info_btn').classList.add('notSelected');
    
    if ( document.getElementById('illustration_gallery').style.display == 'block' ){
         document.getElementById('illustration_gallery').style.display = 'none';       
    } 
    else if ( document.getElementById('web_gallery').style.display == 'block' ){       
         document.getElementById('web_gallery').style.display = 'none';     
    } 
    else if ( document.getElementById('moreInfo').style.display == 'block' ){    
         document.getElementById('moreInfo').style.display = 'none';      
    } 
    
    document.getElementById('graphicDesign_gallery').style.display = 'block';
    document.body.style.backgroundColor = '#c0c0c0';
    document.getElementsByTagName('html')[0].style.backgroundColor = '#c0c0c0';
    
    this.classList.remove('notSelected');
    this.classList.add('selected');
    
}

// WEB BUTTON
document.getElementById('web_btn').onclick = function() {
    
    document.getElementById('graphicDesign_btn').classList.remove('selected');
    document.getElementById('illustration_btn').classList.remove('selected');
    document.getElementById('info_btn').classList.remove('selected');
    
    document.getElementById('graphicDesign_btn').classList.add('notSelected');
    document.getElementById('illustration_btn').classList.add('notSelected');
    document.getElementById('info_btn').classList.add('notSelected');
    
    if (  document.getElementById('illustration_gallery').style.display == 'block' ){
         document.getElementById('illustration_gallery').style.display = 'none';       
    } 
    else if (  document.getElementById('graphicDesign_gallery').style.display == 'block' ){
         document.getElementById('graphicDesign_gallery').style.display = 'none';     
    } 
    else if (  document.getElementById('moreInfo').style.display == 'block' ){    
         document.getElementById('moreInfo').style.display = 'none';      
    } 
    
    document.getElementById('web_gallery').style.display = 'block';
    document.body.style.backgroundColor = '#a9a9a9';
    document.getElementsByTagName('html')[0].style.backgroundColor = '#a9a9a9';
    
    this.classList.remove('notSelected');
    this.classList.add('selected');
    
}

// MORE INFO BUTTON
document.getElementById('info_btn').onclick = function() {
    
    document.getElementById('graphicDesign_btn').classList.remove('selected');
    document.getElementById('web_btn').classList.remove('selected');
    document.getElementById('illustration_btn').classList.remove('selected');
    
    document.getElementById('graphicDesign_btn').classList.add('notSelected');
    document.getElementById('web_btn').classList.add('notSelected');
    document.getElementById('illustration_btn').classList.add('notSelected');
    
    if (  document.getElementById('illustration_gallery').style.display == 'block' ){
         document.getElementById('illustration_gallery').style.display = 'none';       
    } 
    else if (  document.getElementById('graphicDesign_gallery').style.display == 'block' ){
         document.getElementById('graphicDesign_gallery').style.display = 'none';     
    } 
    else if (  document.getElementById('web_gallery').style.display == 'block' ){       
         document.getElementById('web_gallery').style.display = 'none';         
    } 
    
    document.getElementById('moreInfo').style.display = 'block';
    document.body.style.backgroundColor = '#808080';
    document.getElementsByTagName('html')[0].style.backgroundColor = '#808080 ';
    
    this.classList.remove('notSelected');
    this.classList.add('selected');
    
}