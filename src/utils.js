import { openNewProjectBox } from "./ui.js";
import Picker from "vanilla-picker";

function handleButtonClick(type) {
  if (type === "project") {
    // filter if field is used
    // ....
    openNewProjectBox("project");
  }
}

/* createAndAppends following the BEM-Methology. 
The ID and first class are noramlized. */

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
    element.classList.add(`${blockName}__${elementName}`);
  }
  addClassesToElement(element, additionalToIdClasses);
  element.innerHTML = text;
  document.querySelector(`#${childOfId}`).appendChild(element);
}

function createAndAppendInput(
  labelText,
  inputType,
  blockName,
  elementName,
  additionalLabelClasses,
  additionalInputClasses,
  additionalInputAttributes,
  autofocus,
  childOfId, 
) {
  console.log("createAndAppendInput started!");

  // create common div
  const block = document.createElement("div");
  block.setAttribute("id", `${blockName}__${elementName}-block`);
  block.classList.add(`${blockName}__${elementName}-block`);
  document.querySelector(`#${childOfId}`).appendChild(block);

  // create Label
  const label = document.createElement("label");
  if (elementName !== "") {
    label.setAttribute("for", `${blockName}__${elementName}`);
    label.setAttribute("id", `${blockName}__${elementName}-label`);
    label.classList.add(`${blockName}__${elementName}-label`);
  }
  addClassesToElement(label, additionalLabelClasses);
  label.innerText = labelText;
  document
    .querySelector(`#${blockName}__${elementName}-block`)
    .appendChild(label);

  // create Input
  const input = document.createElement("input");
  input.setAttribute("type", inputType);
  if (elementName !== "") {
    input.setAttribute("id", `${blockName}__${elementName}`);
    input.classList.add(`${blockName}__${elementName}`);
  }
  addClassesToElement(input, additionalInputClasses);
  if (autofocus) input.focus();

  if (additionalInputAttributes !== "") {
    console.log("additionalAttributes Type: " + typeof additionalInputAttributes)
    addAdditionalAttributes(input, additionalInputAttributes);
  }
  document
    .querySelector(`#${blockName}__${elementName}-block`)
    .appendChild(input);
}

function addClassesToElement(element, classes) {
  if (classes === "" || classes === undefined) {
    return;
  } else if (classes.constructor === Array) {
    for (let i = 0; i < classes.length; i++) {
      element.classList.add(classes[i]);
    }
  } else {
    element.classList.add(classes);
  }
}

function addAdditionalAttributes (element, attributes) {
  if (attributes.constructor !== Object) {
    console.log("Additional Attributes must be Object");
    return;
  }

  for (let [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value)
  }
}

export { handleButtonClick, createAndAppend, createAndAppendInput };
