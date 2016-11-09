makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
}

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
}

function getNoteFromUrl(location) {
  return notes._list[location.hash.split("#")[1]]._text;
}

function showNote(note) {
  document
  .getElementById("new-note")
  .innerHTML = note;
}
