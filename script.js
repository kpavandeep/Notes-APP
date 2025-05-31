document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
    let noteText = document.getElementById("noteInput").value;
    if (noteText.trim() === "") {
        alert("Please enter a note!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("noteInput").value = "";
    loadNotes();
}

function loadNotes() {
    let notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note, index) => {
        let noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `
            <p>${note}</p>
            <button class="delete-btn" onclick="deleteNote(${index})">X</button>
        `;
        notesContainer.appendChild(noteElement);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
    let noteText = document.getElementById("noteInput").value;
    if (noteText.trim() === "") {
        alert("Please enter a note!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("noteInput").value = "";
    loadNotes();
}

function loadNotes() {
    let notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note, index) => {
        let noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `
            <p>${note}</p>
            <button class="delete-btn" onclick="deleteNote(${index})">X</button>
        `;
        notesContainer.appendChild(noteElement);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}