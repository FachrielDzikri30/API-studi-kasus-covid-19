fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
        // for data summary by all countries
        const globalData = data.Global;
        const totalCasesAllCountries = globalData.TotalConfirmed;
        const totalDeathsAllCountries = globalData.TotalDeaths;
        const totalRecoveredAllCountries = globalData.TotalRecovered;
        const casesAllCountries = document.getElementById("casesAllCountries");
        const deathsAllCountries = document.getElementById("deathsAllCountries");
        const recoveredAllCountries = document.getElementById("recoveredAllCountries");

        casesAllCountries.innerHTML = `Total Cases from All Countries : ${totalCasesAllCountries}`;
        deathsAllCountries.innerHTML = `Total Deaths from All Countries : ${totalDeathsAllCountries}`;
        recoveredAllCountries.innerHTML = `Total Recovered from All Countries : ${totalRecoveredAllCountries}`;
        recoveredAllCountries.style.borderBottom = "5px solid black";
        recoveredAllCountries.style.paddingBottom = "10px";
    })

    const clickHere= () => {
        const inputIndex = document.getElementById("inputCountry").value;
        console.log(inputIndex);
        fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(data => {
            console.log(data.Countries[inputIndex].Country);
            console.log(data.Countries[inputIndex].TotalConfirmed);
            console.log(data.Countries[inputIndex].TotalDeaths);
            console.log(data.Countries[inputIndex].TotalRecovered);

            document.getElementById("countryName").innerHTML = data.Countries[inputIndex].Country;
            document.getElementById("casesCountry").innerHTML = "Total Cases : " +data.Countries[inputIndex].TotalConfirmed;
            document.getElementById("deathsCountry").innerHTML = "Total Deaths : " +data.Countries[inputIndex].TotalDeaths;
            document.getElementById("recoveredCountry").innerHTML = "Total Recovered : " +data.Countries[inputIndex].TotalRecovered;
        })
    }
