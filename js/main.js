// ILLUSTRATION BUTTON
document.getElementById('illustration_btn').onclick = function() {
    
    if (  document.getElementById('graphicDesign_gallery').style.display == 'block' ){
         document.getElementById('graphicDesign_gallery').style.display = 'none';       
    } 
    
    else if (  document.getElementById('web_gallery').style.display == 'block' ){       
         document.getElementById('web_gallery').style.display = 'none';     
    } 
    
    else if (  document.getElementById('moreInfo').style.display == 'block' ){    
         document.getElementById('moreInfo').style.display = 'none';      
    } 
    
    document.getElementById('illustration_gallery').style.display = 'block';
    
}

// GRAPHIC DESIGN BUTTON
document.getElementById('graphicDesign_btn').onclick = function() {
    
    if (  document.getElementById('illustration_gallery').style.display == 'block' ){
         document.getElementById('illustration_gallery').style.display = 'none';       
    } 
    
    else if (  document.getElementById('web_gallery').style.display == 'block' ){       
         document.getElementById('web_gallery').style.display = 'none';     
    } 
    
    else if (  document.getElementById('moreInfo').style.display == 'block' ){    
         document.getElementById('moreInfo').style.display = 'none';      
    } 
    
    document.getElementById('graphicDesign_gallery').style.display = 'block';
    
}

// WEB BUTTON
document.getElementById('web_btn').onclick = function() {
    
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
    
}

// MORE INFO BUTTON
document.getElementById('info_btn').onclick = function() {
    
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
    
}

