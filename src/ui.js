import { createAndAppend } from "./utils.js";

const buttons = {
  projects: document.querySelectorAll("#nav__projects"),
  // upper Row: 1 - 4, middle row: 6 - 10, lower row: 12 - 16
  deck: document.querySelectorAll("#deck"),
};

const entryDialog = document.querySelector("#entryDialog");


function openNewProjectBox() {
  entryDialog.showModal();
}

function createNewProjectForm () {
    
}



export { buttons, openNewProjectBox, createNewProjectForm };
