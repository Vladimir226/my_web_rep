


document.getElementById("area").onblur = function() {
   let data = document.getElementById("area").value;
   console.log(count_alphabet(data));

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

function count_alphabet(data) {

   document.getElementById("alphabet").innerHTML = ""

   let counter_alphabet = new Object();

   for (let i =0; i<data.length;i++) {
      if(isNaN(counter_alphabet[data[i]])) counter_alphabet[data[i]] = 1
      counter_alphabet[data[i]] = counter_alphabet[data[i]]+1;
   }


   for (let key in counter_alphabet)
   {
      let div = document.createElement('div');
      div.innerText=`"${key}" - ${counter_alphabet[key]}`;
      document.getElementById("alphabet").appendChild(div);
   }

   return counter_alphabet;
}



