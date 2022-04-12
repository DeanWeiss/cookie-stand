`use strict`
/*
Cookie Stand Object will have ....
{
    title: "The City/Location",
    minCustomers: int,
    maxCustomers: int,
    avgCookiesPerCust: float,

    generateRandonCustomersPerHour: function/method
    randomCustomersPerHour: array of 15ish items
}
*/
const hours = [`6am`, `7am`, `8am`, `9am`, `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`]

const seattle = {
    title: "Seattle",
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiePerCustomer: 6.3,
    randomCookiesPerHour: [],
    generateRandomCookiesPerHour: function () {
        //generate values to populate randomCookiesPerHour
        // array should have slots for 6am through 7pm (and maybe totals)
        for (let i = 0; i < hours.length; i++){
            const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
            this.randomCookiesPerHour[i] = Math.ceil(this.avgCookiePerCustomer * randomCustomersPerHour);
        }
    }
};

seattle.generateRandomCookiesPerHour();

const lima = {
    title: "Lima",
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiePerCustomer: 4.6,
    randomCookiesPerHour: [],
    generateRandomCookiesPerHour: function () {
        //generate values to populate randomCookiesPerHour
        // array should have slots for 6am through 7pm (and maybe totals)
        for (let i = 0; i < hours.length; i++){
            const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
            this.randomCookiesPerHour[i] = Math.ceil(this.avgCookiePerCustomer * randomCustomersPerHour);
        }
    }
};

lima.generateRandomCookiesPerHour();

function randomInRange(min,max){
    const span = max - min + 1;
    const randInSpan = Math.floor(Math.random() * span);
    return min + randInSpan;
    
}