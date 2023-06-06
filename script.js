let library = [{'title':"Harry Potter", 'author':"J.K. Rowling", 'date': "1990"}];

//creates the book
function book(_title, _author, _date){
    library.push({title: _title, author: _author, date: _date});
}

//displays the book to the screen
function addToLibrary(){
    for(var i in library){
        console.log(i.title, i.author, i.date);
    }
}