let myLibrary = [];

function Book(title,author,pages,read) {
  // the constructor...
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}

function addBookToLibrary() {
  // do stuff here
}

const newbook=document.querySelector(".newbook");

newbook.addEventListener("click",()=>{
    const title=window.prompt("Enter title: ");
    const author=window.prompt("Enter author: ");
    const pages=window.prompt("Enter number of pages: ");
    const read=window.prompt("Enter read (yes/no): ");
});