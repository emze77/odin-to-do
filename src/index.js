import "./styles.css";
import "./classes.js";


const buttons = {
    projects: document.querySelectorAll("#nav__projects"),
    // upper Row: 1 - 4, middle row: 6 - 10, lower row: 12 - 16
    deck: document.querySelectorAll("#deck"),
}

buttons.projects.forEach((item) => {
    item.addEventListener('click', () => {
        openEntryDialog(project);

    })
})j