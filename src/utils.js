import { openNewProjectBox } from "./ui.js";

function handleButtonClick(type) {
  if (type === "project") {
    // filter if field is used
    // ....
    openNewProjectBox("project");
  }
}

function createAndAppend(type, id, classes, text, childOfId) {
  console.log("createAndAppend started!");
  let element = document.createElement(`${type}`);

  element.setAttribute("id", id);
  addClassestoElement(element, classes);
  element.innerHTML = text;
  document.querySelector(`#${childOfId}`).appendChild(element);
}

function createAndAppendInput(
  labelText,
  inputType,
  id,
  labelClasses,
  inputClasses,
  autofocus,
  childOfId
) {
  console.log("createAndAppendInput started!");

  let label = document.createElement("label");
  label.setAttribute("for", id);
  label.setAttribute("id", id + "Label");
  label.innerText = labelText;
  addClassestoElement(label, labelClasses);
  document.querySelector(`#${childOfId}`).appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute("inputType", inputType)
  addClassestoElement(input, inputClasses);
  if (autofocus) input.focus();
  document.querySelector(`#${childOfId}`).appendChild(input);
}

function addClassestoElement(element, classes) {
  console.log(
    `classes.constructor === Array? ${classes.constructor === Array}`
  );
  if (classes.constructor === Array) {
    for (let i = 0; i < classes.length; i++) {
      element.classList.add(classes[i]);
    }
  } else if (classes === "") {
  } else {
    element.classList.add(classes);
  }
}

export { handleButtonClick, createAndAppend, createAndAppendInput };
