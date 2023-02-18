 var num = document.getElementsByTagName("button").length;

 for (var i = 0 ; i < num ; i++){

 
 document.getElementsByTagName("button")[i].addEventListener( "click",function(){
     var innerHtmll = this.innerHTML ; 
     makeSound(innerHtmll);
     buttonAnimation(innerHtmll);
     
      
 }) ;
 
 
   
 document.addEventListener("keydown" , function(event){
         makeSound(event.key);
         buttonAnimation(event.key);
 });

 
   function makeSound(key){
    switch (key){
       
        case 'w':
        var tom_1 = new Audio( "tom-1.mp3");
        tom_1.play();
        break;
        case 'a':
        var tom_2 = new Audio( "tom-2.mp3");
        tom_2.play();
        break;
        case 's':
        var tom_3 = new Audio( "tom-3.mp3");
        tom_3.play();
        break;
        case 'd':
        var tom_4 = new Audio( "tom-4.mp3");
        tom_4.play();
        break;
        case 'j':
        var tom_5 = new Audio( "snare.mp3");
        tom_5.play();
        break;
        case 'k':
        var tom_6 = new Audio( "crash.mp3");
        tom_6.play();
        break;
        
        
        case 'l':
        var tom_7 = new Audio( "kick-bass.mp3");
        tom_7.play();
        break;
        
 }
  }
}

function buttonAnimation( currenKey){
    document.querySelector("."+currenKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currenKey).classList.remove("pressed");
    },100);
    
}
 