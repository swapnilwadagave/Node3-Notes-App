const fs = require("fs");
const chalk = require("chalk");
const getNotes = function () {
  return "Your Notes are Amazing!!!";
};
const addNote = (titleInput, bodyInput) => {
  let fileNotes = loadNotes();
  //let duplicateNotes = fileNotes.filter((note) => note.title === titleInput);
  let duplicateNote = fileNotes.find((note) => note.title === titleInput);
  //   console.log(fileNotes);
  //debugger;
  if (!duplicateNote) {
    let newNote = {
      title: titleInput,
      body: bodyInput,
    };
    fileNotes.push(newNote);
    saveNote(fileNotes);
    console.log(chalk.green.inverse("Note saved succssfully !!!"));
  } else {
    console.log(chalk.red.inverse("Note already taken !"));
  }
};
const saveNote = (notes) => {
  let jsonNotes = JSON.stringify(notes);
  fs.writeFileSync("notes.json", jsonNotes);
};

const removeNote = (titleInput) => {
  console.log("Removing Note with Title : ", titleInput);
  let fileNotes = loadNotes();
  let excludedNotes = fileNotes.filter((note) => note.title !== titleInput);
  if (fileNotes.length > excludedNotes.length) {
    saveNote(excludedNotes);
    console.log(chalk.green.inverse("Note removed successfully !"));
  } else {
    console.log(chalk.red.inverse("Note title is not Matched !"));
  }
};
const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesJson = notesBuffer.toString();
    return JSON.parse(notesJson);
  } catch (error) {
    return [];
  }
};
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach((note) => {
    console.log(chalk.yellow(note.title));
  });
};
const readNote = (titleInput) => {
  const notes = loadNotes();
  let readNote = notes.find((note) => note.title === titleInput);
  //   console.log(fileNotes);
  if (readNote) {
    console.log(chalk.inverse("Your Note Details"));
    console.log(chalk.green("Title: " + readNote.title));
    console.log(chalk.yellow("Body:" + readNote.body));
  } else {
    console.log(chalk.red("No Note Matched !!!"));
  }
  // notes.forEach((note) => {
  //   console.log(chalk.yellow(note.title));
  // });
};

module.exports = {
  getNotes,
  addNote,
  saveNote,
  removeNote,
  listNotes,
  readNote,
};
