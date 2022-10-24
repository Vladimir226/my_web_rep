


document.getElementById("area").onblur = function() {
   let data = document.getElementById("area").value;
   let words = data.split(' ').length;
   let symbols = data.length;
   let symbols_without_spaces  = data.length - count_spaces(data);
   console.log(count_spaces(data));
   document.getElementById("value_words").innerText = words;
   document.getElementById("value_symbols").innerText = symbols; 
   document.getElementById("value_symbols_without").innerText = symbols_without_spaces; 

}

function count_spaces(data) {
   let counter = 0;
   for (let i=0; i<data.length;i++) {
      if (data[i]==" ") counter=counter+1;
   }
   return counter
}



