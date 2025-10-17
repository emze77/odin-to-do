class ToDo {
  project = "default";

  constructor(title, description, project) {
    this.title = title;
    this.description = description;
    this.project = project;
  }

  get title() {
    return this.title;
  }

  set title(newTitle) {
    this.title = newTitle;
  }

  get description() {
    return this.description;
  }

  set description(newDescription) {
    this.description = newDescription;
  }

  get project() {
    return this.project;
  }

  set project(newProject) {
    this.project = newProject;
  }
}

class Project {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }
}

export { ToDo, Project };
