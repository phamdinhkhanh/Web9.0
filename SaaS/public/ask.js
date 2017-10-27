function onTextChange() {
  //lay gia tri cau text area
  //tinh do dai con lai
  //update vao p
  // const input = document.getElementById('ask-textarea').value;
  // // console.log(input);
  // const remainingChars = 200 - input.length;
  // console.log(remainingChars);
  // document.getElementById("remaining-chars").innerHtml = remainingChars;



  //lay value ra
  const input = document.getElementById('ask-textarea').value;
  //tinh do dai con lai
  const remainingChars = 200 - input.length;
  //log ra so ky tu con lai
  console.log(remainingChars);
  //bind vao html
  document.getElementById("remaining-chars").innerHtml = remainingChars;
}



const textarea = document.getElementById("ask-textarea");
textarea.addEventListener("change",onTextChange);
textarea.addEventListener("keyup",onTextChange);
textarea.addEventListener("paste",onTextChange);
textarea.addEventListener("cut",onTextChange);
