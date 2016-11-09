function featureAddNote() {
  var text = "This is my new note to add.";
  document.getElementById('textbox').value = text;
  document.getElementById("note-add").click();

  if (document.getElementById("0").innerHTML !== text){
    throw new Error("Expected to find " + text);
  }
  else {
    console.log("test passed!");
  }
}

function featureClickLink() {
  var text = "Text2";
  console.log(c)
  document.getElementById('textbox').value = text;
  console.log(c)
  document.getElementById("note-add").click();
  console.log(c)
  document.getElementById('1').click();
  console.log(document.getElementById('1'))
  if (document.getElementById('1').innerHTML === "Text2") {
    console.log("Test passes!")
  }
  else{
    console.log("Test fails")
  }


}
