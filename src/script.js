var c = 0;
function creator(){
      document.body.innerHTML += '<button class="button" id="note-add">Add Note</button>'
      document.body.innerHTML += '<input type="text" id="textbox" name="textbox">'
      document.body.innerHTML += '<div id="new-link"></div>'
      document.body.innerHTML += '<div id="new-note"></div>'
};
creator();

function addToList(note){
  var newdiv = document.createElement('div');
      newdiv.innerHTML = note._title + " <p id="+c+"> Hello </p>";
      newdiv.innerHTML = "<a href="+"#"+c+">"+ note._title + "</a>";
      document.getElementById("new-link").appendChild(newdiv);
      c++;
    }

function addToNotes(note){
  var newdiv = document.createElement('div');
      note.addText(document.getElementById("textbox").value);
      newdiv.innerHTML = "<h1 id="+c+">" + note._text + "</h1>";
      document.getElementById("new-note").appendChild(newdiv);
    }



document.getElementById("note-add").addEventListener("click", function(e){ ///e
  var note = new Note();
  addToNotes(note);
  addToList(note);
  e.preventDefault();
  })
