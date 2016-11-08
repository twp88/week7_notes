function featureAddNote() {
  var text = "This is my new note to add.";
  document.getElementById('textbox').value = text;
  document.getElementById("note-add").click();
  if (document.getElementById("1").innerHTML !== text){
    throw new Error("Expected to find " + text);
  }
  else {
    console.log("test passed!");
  }
}

featureAddNote();
