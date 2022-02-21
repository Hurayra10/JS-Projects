var inputText = document.getElementById("inputText");
var copybtn = document.getElementById("copybtn");

copybtn.addEventListener('click',function(){
    navigator.clipboard.writeText(inputText.value);
     alert("Text Copied");
})

// <!-- Cut section starts here -->

var CutText = document.getElementById("CutText");
var Cutbtn = document.getElementById("Cutbtn");

Cutbtn.addEventListener('click',function(){
    navigator.clipboard.writeText(CutText.value);

    CutText.value ="";

})

// <!-- Cut section ends here -->



// -- Paste section starts here -->

var PasteText = document.getElementById("PasteText");
var Pastebtn = document.getElementById("Pastebtn");

Pastebtn.addEventListener('click',function(){
    PasteText.value="";
    navigator.clipboard.readText()
    .then(function(text){
        PasteText.value = text;
    })
    // PasteText.value ="";
   
})

// -- Paste section ends here -->





