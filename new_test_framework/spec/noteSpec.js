function testNoteContents() {
  var note = new Note();
  expect.isTrue(note._title === "New Note");
};

function testNoteAddText() {
  var note = new Note();
  note.addText("SUUUUUUPP")
  expect.isTrue(note._text === "SUUUUUUPP");
};

function testSubString() {
  var note = new Note();
  note.addText("123451234512345123451") //21 characters
  expect.isTrue(note._title === "12345123451234512345"); //20 characters
}

function testAddToList() {
  var note1 = new Note();
  var note2 = new Note();
  note1.addToList("First note")
  note2.addToList("Second note")
  expect.isTrue(c === 2)

};

testNoteContents();
testNoteAddText();
testSubString();
testAddToList(); 
