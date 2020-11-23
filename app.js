const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

//node app.js add --title="List" --body="Sweater,Toys"
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("Adding a new Note");
    // console.log("Title: ", argv.title);
    // console.log("Body: ", argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

//node app.js remove --title="M"
yargs.command({
  command: "remove",
  describe: "Removing exisiting note",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//node app.js list
yargs.command({
  command: "list",
  describe: "Listing all Notes",
  handler() {
    console.log("Listing all Notes");
    notes.listNotes();
  },
});
//node app.js read --title="List"
yargs.command({
  command: "read",
  describe: "Read Note",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();

//console.log(yargs.argv);
// const message = chalk.inverse.green.bold("Success!");
// console.log(message);
// console, console.log(getNotes());

// const fs = require("fs");
// // fs.writeFileSync("notes.txt", "My Name is Swapnil ");
// fs.appendFileSync("notes.txt", "I am staying in Pune");
