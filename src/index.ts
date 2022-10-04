import inquirer from "inquirer";

inquirer.prompt([
  {
  type: "list",
  name: "operation",
  message: "select operation",
  choices: ["+", "-", "*", "/"],
},
{
  type: "input",
  name: "op1",
  message: "type first operand",
},
{
  type: "input",
  name: "op2",
  message: "type second operand",
}
]
).then((answers) => {
  let result: number;
  if (answers["operation"] === "+") {
    result = answers["op1"] + answers["op2"]
    if (result) {
      console.log(`Answer: ${result}`)
    } else {
      throw new Error("please enter numbers only")
    }
  }

  else if (answers["operation"] === "-") {
    result = answers["op1"] - answers["op2"]
    if (result) {
      console.log(`Answer: ${result}`)
    } else {
      throw new Error("please enter numbers only")
    }
  }

  else if (answers["operation"] === "*") {
    result = answers["op1"] * answers["op2"]
    if (result) {
      console.log(`Answer: ${result}`)
    } else {
      throw new Error("please enter numbers only")
    }
  }

  else if (answers["operation"] === "/") {
    result = answers["op1"] / answers["op2"]
    if (result) {
      console.log(`Answer: ${result}`)
    } else {
      throw new Error("please enter numbers only")
    }
  }
}).catch(v => console.log(v))
