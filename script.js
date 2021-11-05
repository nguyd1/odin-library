let myLibrary = [];

const newbook=document.querySelector(".newbook");
const container=document.querySelector(".container");

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(title,author,pages,read) {
    myLibrary.push(new Book(title,author,pages,read));
    display();
}

function display(){
    for(let i=0;i<myLibrary.length;i++){
        setData();

        const div=document.createElement("div");
        div.classList.add("book");
        div.id=i;

        let author=myLibrary[i].author;
        let pages=myLibrary[i].pages;
        let title=myLibrary[i].title;
        let read=myLibrary[i].read;

        const titleHeader=document.createElement("h1");
        titleHeader.textContent=title;
        div.appendChild(titleHeader);

        const authorHeader=document.createElement("h2");
        authorHeader.textContent=author;
        div.appendChild(authorHeader);

        const pagesHeader=document.createElement("h3");
        pagesHeader.textContent="Pages: "+pages;
        div.appendChild(pagesHeader);

        const readHeader=document.createElement("h3");
        readHeader.textContent="Read: "+read;
        div.appendChild(readHeader);

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

// store
const setData=()=>localStorage.setItem("library",JSON.stringify(myLibrary));

// load (runs only one time at the beginning)
myLibrary=JSON.parse(localStorage.getItem("library"));
if(myLibrary) display();
else myLibrary=[];

/*
if(localStorage.library){
    myLibrary=JSON.parse(localStorage.getItem("library"));
    console.table(myLibrary);
    display();
}
*/

newbook.addEventListener("click",()=>{
    const title=window.prompt("Enter title: ");
    const author=window.prompt("Enter author: ");
    const pages=window.prompt("Enter number of pages: ");
    const read=window.prompt("Enter read status: ");
    addBookToLibrary(title,author,pages,read);
    container.innerHTML="";
    display();
});

