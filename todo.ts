import inquirer from "inquirer";

let todolist: string[] = ["RUMAIL", "HASSAN"];
let condition =true;

async function todoQuestions(todolist: string[]) {
  
while (condition) {
  let AskQuestion1: any = await inquirer.prompt({
    type: "list",
    name: "select",
    choices: ["ADD", "UPDATE", "VIEW", "DELETE"],
    message: "Please select one task to perform!",
  });

  if (AskQuestion1.select == "ADD") {
    let ADDTODO = await inquirer.prompt({
      type: "input",
      name: "firstTODO",
      message: "Please add your todo items",
    });
    todolist.push(ADDTODO.firstTODO);
    console.log(todolist);
  }
  if (AskQuestion1.select == "UPDATE") {
    let UPDATETODO = await inquirer.prompt({
      type: "list",
      message: "Please select which item you update",
      name: "secondTODO",
      choices: todolist.map((item) => item),
    });

    let ADDTODO = await inquirer.prompt({
      type: "input",
      message: "add your todo items",
      name: "thirdTODO",
    });

    let newtodo = todolist.filter((val) => val !== UPDATETODO.secondTODO);
    todolist = [...newtodo, ADDTODO.thirdTODO];
    console.log(todolist);
  }
  if (AskQuestion1.select == "VIEW") {
    console.log(todolist);
  }
  if (AskQuestion1.select == "DELETE") {
    let DELETETODO = await inquirer.prompt({
      type: "list",
      message: "Please select which item you Delete",
      name: "fourthTODO",
      choices: todolist.map((item) => item),
    });
    let newtodo = todolist.filter((val) => val !== DELETETODO.fourthTODO);
    todolist = [...newtodo];
    console.log(todolist);
    
  }
  let match = await inquirer.prompt({
    type:"confirm",
    name:"check",
    message:"would you want to run more?",
    default:"true"
    
  })
  condition = match.check
} 
}

todoQuestions(todolist);
