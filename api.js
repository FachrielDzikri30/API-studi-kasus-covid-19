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

        casesAllCountries.innerHTML = `Total Cases from All Countries : ${totalCasesAllCountries.toLocaleString()}`;
        deathsAllCountries.innerHTML = `Total Deaths from All Countries : ${totalDeathsAllCountries.toLocaleString()}`;
        recoveredAllCountries.innerHTML = `Total Recovered from All Countries : ${totalRecoveredAllCountries.toLocaleString()}`;

        // for data summary by country
        const inputCountry = document.getElementById("inputCountry");
        const countryName = document.getElementById("countryName");
        const casesCountry = document.getElementById("casesCountry");
        const deathsCountry = document.getElementById("deathsCountry");
        const recoveredCountry = document.getElementById("recoveredCountry");
        const searchButton = document.getElementById("searchButton");
        

        let countryArray = [];

        data.Countries.forEach(country => {
            countryArray.push(country.Country)
        })
        
        searchButton.addEventListener('click',() => {
            const inputCountry = document.getElementById("inputCountry").value;
            if (inputCountry === '') {
                alert('Search Box Can Not be Empty!');
            }
            else {
                const result = data.Countries.filter(country => {
                    return country.Country.toLowerCase().includes(inputCountry.toLowerCase());
                });
                if (result.length === 0) {
                    countryName.innerHTML = "Country is Not Registered";
                    casesCountry.innerHTML = "Total Confirmed : null";
                    deathsCountry.innerHTML = "Total Deaths : null";
                    recoveredCountry.innerHTML = "Total Recovered : null";
                }
                else {
                    result.forEach(country => {
                        countryName.innerHTML = `${country.Country}`;
                        casesCountry.innerHTML = `Total Confirmed : ${country.TotalConfirmed.toLocaleString()}`;
                        deathsCountry.innerHTML = `Total Deaths : ${country.TotalDeaths.toLocaleString()}`;
                        recoveredCountry.innerHTML = `Total Recovered : ${country.TotalRecovered.toLocaleString()}`;                        
                    })
                }
            }
        })
    })
