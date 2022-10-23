let example = 45;
document.getElementById("value").value = "";

 function changeValue_square() {
     let value = document.getElementById("value").value;
     if(value==="") {
        document.getElementById("output").innerText = "";
     }
     else {
        document.getElementById("output").innerText = value*value;
     }
     document.getElementById("value").value = "";
 }

 function changeValue_rectangle() {
     let value_1 = document.getElementById("value_len").value;
     let value_2 = document.getElementById("value_width").value;
     if(value_1==="" && value_2==="") {
        document.getElementById("output").innerText = "";
     }
     else {
        document.getElementById("output").innerText = value_1*value_2;
     }
     document.getElementById("value_len").value = "";
     document.getElementById("value_width").value = "";
 }

 function changeValue_circle() {
    let value = document.getElementById("value").value;
    if(value==="") {
       document.getElementById("output").innerText = "";
    }
    else {
       document.getElementById("output").innerText = value*(3.14**2);
    }
    document.getElementById("value").value = "";
 }
 function changeValue_triangle() {
    let a = parseFloat(document.getElementById("value_1").value);
    let b = parseFloat(document.getElementById("value_2").value);
    let c = parseFloat(document.getElementById("value_3").value);
    if(a ==="" && b ==="" && c ==="") {
       document.getElementById("output").innerText = "";
    }
    else if (a>b+c || b>a+c || c>a+b) 
    {
        alert("Одна из сторон больше суммы двух других!");
    }
    else {
        let p = ((a+b+c)/2).toFixed(3);
        let S = (p*(p-a)*(p-b)*(p-c))**0.5;
        document.getElementById("output").innerText = S.toFixed(2);
    }
    document.getElementById("value_1").value = "";
    document.getElementById("value_2").value = "";
    document.getElementById("value_3").value = "";
}