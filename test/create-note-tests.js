function testDefaultNoteTitle() {
  var note = new Note();

  expect.toEqual(note._title, "New Note");
}

testDefaultNoteTitle();
