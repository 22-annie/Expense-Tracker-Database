let expenses = [];



function addExpense(){

    let title = document.getElementById("title").value;

    let amount = document.getElementById("amount").value;


    if(title==="" || amount==="")
    {
        alert("Please fill all fields");
        return;
    }


    let expense={

        title:title,
        amount:Number(amount)

    };


    expenses.push(expense);


    displayExpenses();


    document.getElementById("title").value="";
    document.getElementById("amount").value="";

}




function displayExpenses(){

    let list=document.getElementById("expenseList");

    list.innerHTML="";


    let total=0;


    expenses.forEach(function(expense){


        total += expense.amount;


        let li=document.createElement("li");


        li.innerHTML=
        expense.title + " - ৳ " + expense.amount;


        list.appendChild(li);


    });



    document.getElementById("total").innerHTML=
    "৳ " + total;


}