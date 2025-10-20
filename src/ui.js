import { createAndAppend, createAndAppendInput } from "./utils.js";

const buttons = {
  projects: document.querySelectorAll("#nav__projects"),
  // upper Row: 1 - 4, middle row: 6 - 10, lower row: 12 - 16
  deck: document.querySelectorAll("#deck"),
};

const entryDialog = document.querySelector("#entry-dialog");
const entryDialogContent = document.querySelector("#entry-dialog__content");

function openNewProjectBox() {
  clearDialog();
  createNewProjectForm();
  entryDialog.showModal();
}

function createNewProjectForm() {
  createAndAppend(
    "h2",
    "entry-dialog",
    "title",
    "",
    "New Project",
    "entry-dialog__content"
  );
  createAndAppendInput(
    "Project Name:",
    "text",
    "entry-dialog",
    "project-name",
    "",
    "",
    "",
    true,
    "entry-dialog__content"
  );
  createAndAppendInput(
    "Project Color: ",
    "color",
    "entry-dialog",
    "color-selector",
    "",
    "",
    { value: "oklab(50% 0.1 0.1 / 0.5)", colorspace: "display-p3" },
    false,
    "entry-dialog__content",
  );
}

function clearDialog() {
  while (entryDialogContent.hasChildNodes()) {
    entryDialogContent.removeChild(entryDialogContent.firstChild);
  }
}
export { buttons, openNewProjectBox, createNewProjectForm };
