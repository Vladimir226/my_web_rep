


document.getElementById("area").onblur = function() {
   analyzer();
}



function analyzer() {
   let data = document.getElementById("area").value;



   if (document.getElementById("check_value_words").checked)
   {
      if(data!="") {
         let words = data.split(/[\n,\s]/);
         console.log(words);
         words = words.filter(function(f){return f!=""});
         console.log(words);
         document.getElementById("value_words").innerText = words.length;
      }
   }
   else document.getElementById("value_words").innerText = ""

   if (document.getElementById("check_value_symbols").checked)
   {
      let symbols = data.length;
      document.getElementById("value_symbols").innerText = symbols;
   }
   else document.getElementById("value_symbols").innerText = "";

   if (document.getElementById("check_value_symbols_without").checked)
   {
      let symbols_without_spaces  = data.length - count_spaces(data);
      document.getElementById("value_symbols_without").innerText = symbols_without_spaces; 
   }
   else document.getElementById("value_symbols_without").innerText = ""; 

   if (document.getElementById("check_value_alphabet").checked)
   {
      console.log(count_alphabet(data));
   }
   else  document.getElementById("alphabet").innerHTML = "";
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
      if(isNaN(counter_alphabet[data[i]])) counter_alphabet[data[i]] = 0
      counter_alphabet[data[i]] = counter_alphabet[data[i]]+1;
   }


   for (let key in counter_alphabet)
   {
      let div = document.createElement('div');
      if (key==='\n') div.innerText=`"\\n" - ${counter_alphabet[key]}`;
      else div.innerText=`"${key}" - ${counter_alphabet[key]}`;
      document.getElementById("alphabet").appendChild(div);
   }

   return counter_alphabet;
}



