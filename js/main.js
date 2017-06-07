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
    document.body.style.backgroundColor = '#d3d3d3';
    document.getElementsByTagName('html')[0].style.backgroundColor = '#d3d3d3';
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
    document.body.style.backgroundColor = '#c0c0c0';
    document.getElementsByTagName('html')[0].style.backgroundColor = '#c0c0c0';
    
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
    document.body.style.backgroundColor = '#a9a9a9';
    document.getElementsByTagName('html')[0].style.backgroundColor = '#a9a9a9';
    
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
    document.body.style.backgroundColor = '#808080';
    document.getElementsByTagName('html')[0].style.backgroundColor = '#808080 ';
    
}

