function featureAddNote() {
  var text = "This is my new note to add.";
  console.log("hi!")
  document.getElementById('textbox').value = text;
  console.log("hi1!")
  document.getElementById("note-add").click();

  if (document.getElementById("0").innerHTML !== text){
    throw new Error("Expected to find " + text);
  }
  else {
    console.log("test passed!");
  }
}
