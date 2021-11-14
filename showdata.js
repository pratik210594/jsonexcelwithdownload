var textbox = document.createElement("textarea");
textbox.style.width="500px";
textbox.style.height="500px";
document.body.appendChild(textbox);
//console.log(Object.keys(data).length);

textbox.innerHTML= JSON.stringify(data, undefined,10);



//alert('in showdatax');