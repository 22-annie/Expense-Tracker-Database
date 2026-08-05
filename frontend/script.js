const form = document.getElementById("transactionForm");
const table = document.getElementById("transactionTable");

// Load all transactions
function loadTransactions() {

    fetch("http://localhost:3000/transactions")
        .then(res => res.json())
        .then(data => {

            table.innerHTML = "";

            data.forEach(transaction => {

                table.innerHTML += `
                    <tr>
                        <td>${transaction.type}</td>
                        <td>${transaction.category}</td>
                        <td>${transaction.amount}</td>
                        <td>${transaction.description}</td>
                        <td>${transaction.date}</td>
                    </tr>
                `;

            });

        });

}

// Add transaction
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const transaction = {

        amount: document.getElementById("amount").value,
        category: document.getElementById("category").value,
        type: document.getElementById("type").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value

    };

    fetch("http://localhost:3000/add", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(transaction)

    })
    .then(res => res.json())
    .then(data => {

        alert(data.message);

        form.reset();

        loadTransactions();

    });

});

// Show transactions when page loads
loadTransactions();