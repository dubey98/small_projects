function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function(){
    //     if(read === "read"){
    //         return title + " by " + author + "," + pages + 
    //                 " pages," + "read.";
    //     }
    //     else{
    //         return title + " by " + author + "," + pages + 
    //                 " pages," + "not read yet.";
    //     }
    // }
}
let myLibrary  = [];
function addBookToLibrary(){
    let hobbit = new Book("the Hobbit","Dont know",456,"not read yet");
    myLibrary.push(hobbit);
    let harry = new Book("Harry potter","JK Rowling",789,"read");
    myLibrary.push(harry);
};
addBookToLibrary();

let render = function() {
    let table = document.querySelector('table');
    for(let i=0;i<myLibrary.length;i++){
        let new_row = document.createElement('tr');
        let j=0;
        for(let prop in myLibrary[i]){
            let new_col = document.createElement('td');
            new_col.innerHTML = myLibrary[i][prop];
            new_row.appendChild(new_col);
        }
        table.appendChild(new_row);
    }
}
render();

document.addEventListener('form.submit()',(e)=>{
    console.log(e);
})