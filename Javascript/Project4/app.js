const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const apiURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

let fromCurr = document.querySelector("from select")
let toCurr = document.querySelector("to select")

let msg = document.querySelector(".msg");
// console.log(dropdowns);

// for( country in countries) {
//     console.log(country, countries[country]);
// }

for(let select of dropdowns) {
    for(currCode in currencyList) {
        // console.dir(select);
        let newOption = document.createElement("option");
        newOption.innerText = currCode.toUpperCase();
        newOption.value = currCode;

        if(select.name === "from" && currCode === "USD") {
            fromCurr = "USD";
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR") {
            toCurr = "INR";
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (event) => {
        let currencyCode = event.target.value;
        console.log(currencyCode);
        // let currency = currencyList[currencyCode];
        // console.log(currencyCode);
        let newSrc = `https://flagsapi.com/${currencyCode}/flat/64.png`
        console.log(newSrc);
        
        if(select.name === "from") {
            let imgTag = document.querySelector("#first");
            fromCurr = currencyCode;
            imgTag.src = newSrc;
        }
        else if(select.name === "to") {
            let imgTag = document.querySelector("#second");
            toCurr = currencyCode;
            imgTag.src = newSrc;
        }

    })
}

btn.addEventListener("click", async (event) => {
    event.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;


    if(amountValue === "" || amountValue < 1 ) {
        amountValue = 1;
        amount.value = "1";
    }
    // console.log(amountValue);
    // console.log(fromCurr);
    // console.log(toCurr);
    const URL1 = `${apiURL}/${fromCurr.toLowerCase()}.json`;
    let response = await fetch(URL1);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    let myResult = data[fromCurr.toLowerCase()];
    let rate = myResult[toCurr.toLowerCase()];
    console.log(rate);
    // let rate = data.fromCurr

    let finalAmount = rate * amountValue;
    console.log(finalAmount);

    msg.innerText = `${amountValue} ${fromCurr} = ${finalAmount} ${toCurr}`
})




