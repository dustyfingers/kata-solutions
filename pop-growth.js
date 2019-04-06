// function should
// return n, number of years neede to get to a population
// greater than OR EQUAL TO p.

// population starts at p0 = 1000 & increases at 2% per year
// 50 new people move into the town each year

function nbYear(p0, percent, aug, p) {
    let startPop = p0;
    let customPercent = (p0/100) * percent;
    let popChangePerYear = aug;
    let endPop = p;
    let inhabitants = startPop + (startPop * customPercent) + popChangePerYear;
    console.log(inhabitants);
}


nbYear(1500, 5, 100, 5000);
