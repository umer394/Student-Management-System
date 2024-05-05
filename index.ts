#! /usr/bin/env node

import inquirer from "inquirer";

let Balance:number = 0
let randomId:number = Math.floor(10000 + Math.random() *90000)
let nameQuestion = await inquirer.prompt([{
    name:"Name",
    type:"input",
    message:"Enter Student Name: "
},{
    name:"Course",
    type:"list",
    message:"Select the course to enrolled?",
    choices:['Typescript','Javascript','Python','C++','DevOps']
}
])
// if(nameQuestion.Course === "Typescript"){
//     console.log("Tuition Fees: 6000/-\n");
//     console.log("Balance:",Balance)
// }else if(nameQuestion.Course === "Typescript"){
//     console.log("Tuition Fees: /-\n");
//     console.log("Balance:",Balance)
// }
console.log("\nTuition Fees: 6000/-\n");
console.log("Balance:",Balance)
let  paymentMethod = await inquirer.prompt([
    {
        name:'Payment',
        type:'list',
        message:'Select payment Method',
        choices:['Easypaisa','Bank Transfer','Nayapay','Sadapay','Jazzcash']
    }
])
let condition = true
while(condition){
    let  transferMethod = await inquirer.prompt([
        {
            name:'Transfer',
            type:'number',
            message:'Transfer Money: '
        }
    ]);
    if (transferMethod.Transfer === 6000){
        console.log('\nYou select payment method Easypaisa\n')
        console.log(`Congratulations, you have successfully enroled in ${nameQuestion.Course}`);
        let statusExit = await inquirer.prompt([{
            name:'Status',
            type:'list',
            message:'What would you like to do next?',
            choices:['View Status','Exit']
        }])
        
        if(statusExit.Status === 'View Status'){
            console.log('\n\t******Status******\n')
            console.log(`Student name: ${nameQuestion.Name}`)
            console.log(`Student ID: ${randomId}`)
            console.log(`Course: ${nameQuestion.Course}`)
            console.log(`Tuition Fees Paid: ${transferMethod.Transfer}`)
            console.log(`Balance: ${Balance += transferMethod.Transfer}`)
            
        }
        condition = false
    }else{
        console.log("Please Transfer 6000 only")
    }
}


