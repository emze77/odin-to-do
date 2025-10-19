import "./styles.css";
import "./classes.js";
import { handleButtonClick } from "./utils.js";
import { buttons } from "./ui.js";


buttons.projects.forEach((item) => {
  item.addEventListener("click", () => {
    handleButtonClick("project");
  });
});
