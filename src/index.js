import DOM from './modules/DOM';
import task from './modules/task';
import project from './modules/project';
import controller from './modules/controller';

DOM.createHeader();
DOM.openTaskForm();

const project1 = project("test");
console.log(project1)

console.log(controller.allProjects)
