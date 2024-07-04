let up1=document.getElementById('up1');
onscroll = function(){
    if(scrollY >= 400){
        up1.style.display='block';

    }
    else{
           up1.style.display = "none";
    }
    }