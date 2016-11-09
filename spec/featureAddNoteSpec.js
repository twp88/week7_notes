function featureAddNote() {
  var text = "This is my new note to add.";
  document.getElementById('textbox').value = text;
  document.getElementById("note-add").click();

  if (document.getElementById("0").innerHTML !== "This is my new note "){
    throw new Error("Expected to find: This is my new note ");
  }
  else {
    console.log("test passed!");
  }
}

function featureClickLink() {
  var text = "Text2";
  document.getElementById('textbox').value = text;
  document.getElementById("note-add").click();
  document.getElementById('1').click();
  if (document.getElementById('1').innerHTML === "Text2") {
    console.log("Test passes!")
  }
  else{
    console.log("Test fails")
  }


}
