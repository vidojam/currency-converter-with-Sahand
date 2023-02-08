const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate(){
    // console.log("Called");

    fetch (`https://v6.exchangerate-api.com/v6/a3ccae46ebabdc66a3503d89/latest/${currencyFirstEl.value}`
    )
        //.then((res)=>res.json())
        //.then((data)=>console.log(data)); used to test if data is being received. If OK, continue below
        .then((res)=>res.json())
        .then((data)=>{
            const rate = data.conversion_rates [currencySecondEl.value];
           // console.log(rate);
           exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;

           worthSecondEl.value = (worthFirstEl.value * rate).toFixed(3);
    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);

