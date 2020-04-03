// Declared an array where the Book Objects are to be stored
if (!localStorage.getItem('Library')) {
    populateStorage();
} else {
    addBookToLibrary();
}

function populateStorage() {
    let currentLibrary = [];
    localStorage.setItem('Library', JSON.stringify(currentLibrary));
    addBookToLibrary();
}

function addBookToLibrary() {
    let Library = localStorage.getItem('Library');
    let myLibrary = JSON.parse(Library);
    class Book {
        //Constructor for the Book Class
        constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            //taking input from a radio button where value is "yes" or "no"
            if (read === "yes") this.read = true;
            else this.read = false;
        }
        //method to toggle the readstatus of the book
        readStatus() {
            if (this.read === false) {
                this.read = true;
            } else {
                this.read = false;
            }
        }
        //function to get the readstatus of the Book
        getStatus() {
            return this.read;
        }
    }
    //display function 
    function render() {
        const table = document.querySelector('table');
        //deleting the previously declared table rows or else they complile on top of each other
        //and new rows are added contantly
        const pre = document.querySelectorAll('.tableRow')
        for (let i = 0; i < pre.length; i++) {
            pre[i].remove();
        }
        //Looping through all the Books in myLibrary array
        for (let i = 0; i < myLibrary.length; i++) {
            //creating a new row element
            let new_row = document.createElement('tr');
            for (let prop in myLibrary[i]) {
                //creating a new column element
                const new_col = document.createElement('td');
                new_col.innerText = myLibrary[i][prop];
                new_row.appendChild(new_col);
            }
            //declaring a button for removing the element from array
            const button = document.createElement('button');
            button.innerText = "Remove";
            //setting the id equal to array index of the element
            const newLocal = "`${i}`";
            button.setAttribute("id", newLocal);
            button.classList.add('remove');
            new_row.appendChild(button);
            button.addEventListener('click', (e) => {
                let temp = e.toElement.id;
                let i = parseInt(temp);
                myLibrary.splice(i, 1);
                localStorage.setItem('Library', JSON.stringify(myLibrary));
                render();
            });

            //button for toggling the read status of the book
            const readStatus = document.createElement('button');
            readStatus.innerText = "Read";
            //setting the id to be the array index for the button
            const newLocal_1 = String(i);
            readStatus.setAttribute("id", newLocal_1);
            new_row.appendChild(readStatus);
            readStatus.addEventListener('click', (e) => {
                let i = parseInt(e.toElement.id);
                myLibrary[i].readStatus();
                localStorage.setItem('Library', JSON.stringify(myLibrary));
                render();
            });

            new_row.classList.add('tableRow');
            table.appendChild(new_row);
        }
    }
    //function for adding books to library from the form 
    document.forms.newBook.addEventListener('submit', (e) => handleform());

    function handleform(e) {
        let form = document.forms.newBook;
        let newBook = new Book(form.elements.name.value,
            form.elements.author.value,
            form.elements.pages.value,
            form.elements.status.value);
        myLibrary.push(newBook);
        console.log(newBook);
        localStorage.setItem('Library', JSON.stringify(myLibrary));
        //prevents the form from refreshing which causes the loass of data stored
        e.preventDefault();
        render();
    }
    render();
}