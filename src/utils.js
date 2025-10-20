import { openNewProjectBox } from "./ui.js";
import Picker from "vanilla-picker";

function handleButtonClick(type) {
  if (type === "project") {
    // filter if field is used
    // ....
    openNewProjectBox("project");
  }
}

/* createAndAppend* following the BEM-Methology. The ID and first class are normalized. */

function createAndAppend(
  type,
  blockName,
  elementName,
  additionalToIdClasses,
  text,
  childOfId
) {
  console.log("createAndAppend started!");
  let element = document.createElement(`${type}`);
  if (elementName !== "") {
    element.setAttribute("id", `${blockName}__${elementName}`);
  }
  element.classList.add(`${blockName}__${elementName}`);
  addClassesToElement(element, additionalToIdClasses);
  element.innerHTML = text;
  document.querySelector(`#${childOfId}`).appendChild(element);
}

function createAndAppendInput(
  labelText,
  inputType,
  blockName,
  elementName,
  additionalToIdLabelClasses,
  additionalToIdInputClasses,
  autofocus,
  childOfId
) {
  console.log("createAndAppendInput started!");

  let label = document.createElement("label");
  if (elementName !== "") {
    label.setAttribute("for", `${blockName}__${elementName}`);
    label.setAttribute("id", `${blockName}__${elementName}-label`);
    label.classList.add(`${blockName}__${elementName}-label`);
  }
  addClassesToElement(label, additionalToIdLabelClasses);
  label.innerText = labelText;
  document.querySelector(`#${childOfId}`).appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", inputType);
  if (elementName !== "") {
    input.setAttribute("id", `${blockName}__${elementName}`);
    input.classList.add(`${blockName}__${elementName}`);
  }
  addClassesToElement(input, additionalToIdInputClasses);
  if (autofocus) input.focus();
  document.querySelector(`#${childOfId}`).appendChild(input);
}

function addClassesToElement(element, classes) {
  if (classes === ""|| classes === undefined) {
    return;
  } else if (classes.constructor === Array) {
    for (let i = 0; i < classes.length; i++) {
      element.classList.add(classes[i]);
    }
  } else {
    element.classList.add(classes);
  }
}

export { handleButtonClick, createAndAppend, createAndAppendInput };
