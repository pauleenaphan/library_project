let library = [{'title':"Harry Potter", 'author':"J.K. Rowling", 'date': "1990"}];
let addbtn = document.getElementById("add");
let form = document.getElementById("form");
let form2 = document.getElementById("form2");
let sub_btn = document.getElementById("submit");

let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let date = document.getElementById("date").value;

let body = document.getElementsByClassName("body_two");

//creates the book
function addbook(_title, _author, _date){
    console.log("book function");
    library.push({title: _title, author: _author, date: _date});
}

//displays the book to the screen
function addToLibrary(){
    for(var i = 0; i < library.length; i++){
        //print out the values in the array || use dot notation to get specific attribute of arr
        console.log(i);
        console.log(library[i]);

        let book = document.createElement('div');
        book.className = "book";
        //this property is 0 because we are choosing body_two which is the first element in that class
        document.getElementsByClassName("body_two")[0].appendChild(book);

        let b_title = document.createElement('div');
        b_title.className = "b_title";
        b_title.textContent = (library[i].title);
        book.appendChild(b_title);

        let b_author = document.createElement('div');
        b_author.className = "b_author";
        b_author.textContent = (library[i].author);
        book.appendChild(b_author);

        let b_date = document.createElement('div');
        b_date.className = "b_date";
        b_date.textContent = (library[i].date);
        book.appendChild(b_date);
    }
}

// when nthe user clicks on add book a popup form will show
addbtn.addEventListener("click", ()=>{
    form.style.visibility = "visible";
});

//after pressing the submit button users can put in their book info and add it to their librar
sub_btn.addEventListener("click", (e)=>{
    //prevents the form from sending stuff to the server
    e.preventDefault(); 
    addbook(this.title.value, this.author.value, this.date.value);
    form.style.visibility = "hidden";
    addToLibrary();

    //after we print the books we reset the form so the input text will be blank
    form2.reset();
});

