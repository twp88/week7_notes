function Note (text) {
 this._title = "New Note";
 this._text = text;
}

Note.prototype.addText = function (text){
 this._text = text;
 this._title = this._text.substr(0,20);
};
