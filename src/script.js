var c = 0;
var notes = new noteList();

function creator(){
      document.body.innerHTML += '<textarea id="textbox" cols="60" rows="7"></textarea><br><br>';
      document.body.innerHTML += '<button class="button" id="note-add">Add Note</button>';
      document.body.innerHTML += '<h2>Links: </h2>';
      document.body.innerHTML += '<div id="new-link"></div>';
      document.body.innerHTML += '<hr>';
      document.body.innerHTML += '<h2>Note: </h2>';
      document.body.innerHTML += '<div id="new-note"></div>';
}
creator();

function addToList(note){
  note.addText(document.getElementById("textbox").value);
  notes.addToList(note);
  var newdiv = document.createElement('div');
      newdiv.innerHTML = "<li><a href=" + "#" + c + " id="+c+">"+ note._title + "</a></li>";
      document.getElementById("new-link").appendChild(newdiv);
      c++;
    }

document.getElementById("note-add").addEventListener("click", function(e){ ///e
  var note = new Note();
  addToList(note);
  e.preventDefault();
});
