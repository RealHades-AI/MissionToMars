// Voeg boeken toe aan de leeslijst
const bookInput = document.getElementById("book-input");
const addBookButton = document.getElementById("add-book");
const bookList = document.getElementById("book-list");

addBookButton.addEventListener("click", () => {
    if (bookInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = bookInput.value.trim();
        bookList.appendChild(li);
        bookInput.value = "";
    }
});
