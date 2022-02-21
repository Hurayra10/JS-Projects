function lightbtn(match){
    var title = document.getElementById("title");
    var pic;
    for(var i=1; i <=5; i ++){
        if(match==0){
            pic = "light.jpg";
            title.innerHTML= "Light Off"
        }else{
            pic = "light2.jpg";
            title.innerHTML= "Light ON"
        }
        var light = document.getElementById('light' + (i));
        light.src = pic;
    }





}