function noteList() {
  this._list = [];
}

noteList.prototype.addToList = function (note){
  this._list.push(note);
};
