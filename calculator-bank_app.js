let balance = 0;

        function addIncome(){

            let amount =
            Number(document.getElementById("amount").value);

            if(amount <= 0){

                alert("Enter a valid amount");
                return;

            }

            balance = balance + amount;

            document.getElementById("balance").innerHTML =
            balance;

            document.getElementById("history").innerHTML +=

            "<p class='incomeText'>+ $" +
            amount +
            " Income</p>";

            document.getElementById("amount").value = "";

        }

        function addExpense(){

            let amount =
            Number(document.getElementById("amount").value);

            if(amount <= 0){

                alert("Enter a valid amount");
                return;

            }

            balance = balance - amount;

            document.getElementById("balance").innerHTML =
            balance;

            document.getElementById("history").innerHTML +=

            "<p class='expenseText'>- $" +
            amount +
            " Expense</p>";

            document.getElementById("amount").value = "";

        }

        function resetAll(){

            balance = 0;

            document.getElementById("balance").innerHTML = 0;

            document.getElementById("history").innerHTML = "";

        }