// var count = 1;
// var num1 = document.getElementById("num1");
// var project = setInterval(() => {
  
//     num1.innerHTML = count;
//     count ++;
//     if(count==201){
//         clearInterval(project);
//     }


// }, 10);
var num1= document.getElementById("num1");
var count = 0;
var project= setInterval(project, 10);

function project(){
    num1.innerHTML= count;
    count ++;
    if(count== 201){
        clearInterval(project);
    }
};
// For client
var num2= document.getElementById("num2");
var count2 = 0;
var project2= setInterval(project2, 10);

function project2(){
    num2.innerHTML= count2;
    count2 ++;
    if(count2 == 101){
        clearInterval(project2)
    }
};

// For achive
var num3= document.getElementById("num3");
var count3 = 0;
var project3= setInterval(project3, 10);

function project3(){
    num3.innerHTML= count3;
    count3 ++;
    if(count3 == 51){
        clearInterval(project3)
    }
};


