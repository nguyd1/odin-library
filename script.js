let myLibrary = [];

const newbook=document.querySelector(".newbook");
const container=document.querySelector(".container");

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=()=>title+" by "+author+", "+pages+" pages, "+read;
}

function addBookToLibrary(title,author,pages,read) {
    myLibrary.push(new Book(title,author,pages,read));
}

function display(){
    for(let i=0;i<myLibrary.length;i++){
        const div=document.createElement("div");
        div.classList.add("book");
        div.id=i;
        div.textContent=myLibrary[i].info();
        container.appendChild(div);

        const buttons=document.createElement("div");
        div.appendChild(buttons);

        const changeRead=document.createElement("button");
        changeRead.textContent="CHANGE READ";
        buttons.appendChild(changeRead);

        changeRead.addEventListener("click",function(e){
            const newRead=window.prompt("Update read status: ");
            const bookId=e.target.parentNode.parentNode.id;
            
            const title=myLibrary[bookId].title;
            const author=myLibrary[bookId].author;
            const pages=myLibrary[bookId].pages;
            const read=newRead;
            
            container.innerHTML="";
            myLibrary.splice(bookId,1,new Book(title,author,pages,read));
            display();
        });
        

        const removeBook=document.createElement("button");
        removeBook.textContent="REMOVE BOOK";
        buttons.appendChild(removeBook);
        
        removeBook.addEventListener("click",function(e){
            const bookId=e.target.parentNode.parentNode.id;
            container.innerHTML="";
            myLibrary.splice(bookId,1);
            display();
        });
    }
}

newbook.addEventListener("click",()=>{
    const title=window.prompt("Enter title: ");
    const author=window.prompt("Enter author: ");
    const pages=window.prompt("Enter number of pages: ");
    const read=window.prompt("Enter read status: ");
    addBookToLibrary(title,author,pages,read);
    container.innerHTML="";
    display();
});

