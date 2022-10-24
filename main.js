


document.getElementById("area").onblur = function() {
   let words = document.getElementById("area").value.split(' ').length;
   let symbols = document.getElementById("area").value.length;
   document.getElementById("value_words").innerText = words;
   document.getElementById("value_symbols").innerText = symbols; 

}



