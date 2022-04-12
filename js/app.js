`use strict`;
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
    totalCookiesSold: 0,
    generateRandomCookiesPerHour: function () {
        //generate values to populate randomCookiesPerHour
        // array should have slots for 6am through 7pm (and maybe totals)
        let total = 0;
        for (let i = 0; i < hours.length; i++){
            const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
            const cookiesSold = Math.ceil(this.avgCookiePerCustomer * randomCustomersPerHour);
            this.randomCookiesPerHour[i] = cookiesSold;
            total += cookiesSold;
        }
        this.totalCookiesSold = total;
    },

    render: function() {
        // get on screeen
        const containerElem = document.getElementById(`cookie-stand-locations`);

        // article
        const articleElem = document.createElement(`article`);
        containerElem.appendChild(articleElem);

        // heading
        const headingElem = document.createElement(`h2`);
        articleElem.appendChild(headingElem);
        headingElem.textContent = this.title; 

        // ul
        const ulElem = document.createElement(`ul`);
        articleElem.appendChild(ulElem);

        // list items
        for(let i=0; i < this.randomCookiesPerHour.length; i++) {
            const liElem = document.createElement(`li`);
            ulElem.appendChild(liElem);
            const timeSlot = hours[i];
            const cookiesSoldThisHour = this.randomCookiesPerHour[i]
            liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
        }

        // total sales
        const liElem = document.createElement(`li`);
        ulElem.appendChild(liElem);
        liElem.textContent = `Total: ` + this.totalCookiesSold;

        }

    };

seattle.generateRandomCookiesPerHour();
seattle.render()

const lima = {
    title: "Lima",
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiePerCustomer: 4.6,
    randomCookiesPerHour: [],
    totalCookiesSold: 0,
    generateRandomCookiesPerHour: function () {
        //generate values to populate randomCookiesPerHour
        // array should have slots for 6am through 7pm (and maybe totals)
        let total = 0;
        for (let i = 0; i < hours.length; i++){
            const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
            constCookiesSold = Math.ceil(this.avgCookiePerCustomer * randomCustomersPerHour);
            this.randomCookiesPerHour[i] = constCookiesSold;
            total += constCookiesSold;
        }
        this.totalCookiesSold = total;
    },
    render: function() {
        // get on screeen
        const containerElem = document.getElementById(`cookie-stand-locations`);

        // article
        const articleElem = document.createElement(`article`);
        containerElem.appendChild(articleElem);

        // heading
        const headingElem = document.createElement(`h2`);
        articleElem.appendChild(headingElem);
        headingElem.textContent = this.title; 

        // ul
        const ulElem = document.createElement(`ul`);
        articleElem.appendChild(ulElem);

        // list items
        for(let i=0; i < this.randomCookiesPerHour.length; i++) {
            const liElem = document.createElement(`li`);
            ulElem.appendChild(liElem);
            const timeSlot = hours[i];
            const cookiesSoldThisHour = this.randomCookiesPerHour[i]
            liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
        }
    }    
};

lima.generateRandomCookiesPerHour();
lima.render()

const tokyo = {
    title: "Tokyo",
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiePerCustomer: 1.2,
    randomCookiesPerHour: [],
    totalCookiesSold: 0,
    generateRandomCookiesPerHour: function () {
        //generate values to populate randomCookiesPerHour
        // array should have slots for 6am through 7pm (and maybe totals)
        let total = 0;
        for (let i = 0; i < hours.length; i++){
            const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
            const cookiesSold = Math.ceil(this.avgCookiePerCustomer * randomCustomersPerHour);
            this.randomCookiesPerHour[i] = cookiesSold;
            total += cookiesSold;
        }
        this.totalCookiesSold = total;
    },

    render: function() {
        // get on screeen
        const containerElem = document.getElementById(`cookie-stand-locations`);

        // article
        const articleElem = document.createElement(`article`);
        containerElem.appendChild(articleElem);

        // heading
        const headingElem = document.createElement(`h2`);
        articleElem.appendChild(headingElem);
        headingElem.textContent = this.title; 

        // ul
        const ulElem = document.createElement(`ul`);
        articleElem.appendChild(ulElem);

        // list items
        for(let i=0; i < this.randomCookiesPerHour.length; i++) {
            const liElem = document.createElement(`li`);
            ulElem.appendChild(liElem);
            const timeSlot = hours[i];
            const cookiesSoldThisHour = this.randomCookiesPerHour[i]
            liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
        }

        // total sales
        const liElem = document.createElement(`li`);
        ulElem.appendChild(liElem);
        liElem.textContent = `Total: ` + this.totalCookiesSold;

        }

    };

tokyo.generateRandomCookiesPerHour();
tokyo.render()

const dubai = {
    title: "Dubai",
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiePerCustomer: 3.7,
    randomCookiesPerHour: [],
    totalCookiesSold: 0,
    generateRandomCookiesPerHour: function () {
        //generate values to populate randomCookiesPerHour
        // array should have slots for 6am through 7pm (and maybe totals)
        let total = 0;
        for (let i = 0; i < hours.length; i++){
            const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
            const cookiesSold = Math.ceil(this.avgCookiePerCustomer * randomCustomersPerHour);
            this.randomCookiesPerHour[i] = cookiesSold;
            total += cookiesSold;
        }
        this.totalCookiesSold = total;
    },

    render: function() {
        // get on screeen
        const containerElem = document.getElementById(`cookie-stand-locations`);

        // article
        const articleElem = document.createElement(`article`);
        containerElem.appendChild(articleElem);

        // heading
        const headingElem = document.createElement(`h2`);
        articleElem.appendChild(headingElem);
        headingElem.textContent = this.title; 

        // ul
        const ulElem = document.createElement(`ul`);
        articleElem.appendChild(ulElem);

        // list items
        for(let i=0; i < this.randomCookiesPerHour.length; i++) {
            const liElem = document.createElement(`li`);
            ulElem.appendChild(liElem);
            const timeSlot = hours[i];
            const cookiesSoldThisHour = this.randomCookiesPerHour[i]
            liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
        }

        // total sales
        const liElem = document.createElement(`li`);
        ulElem.appendChild(liElem);
        liElem.textContent = `Total: ` + this.totalCookiesSold;

        }

    };

dubai.generateRandomCookiesPerHour();
dubai.render()

const paris = {
    title: "Paris",
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiePerCustomer: 2.3,
    randomCookiesPerHour: [],
    totalCookiesSold: 0,
    generateRandomCookiesPerHour: function () {
        //generate values to populate randomCookiesPerHour
        // array should have slots for 6am through 7pm (and maybe totals)
        let total = 0;
        for (let i = 0; i < hours.length; i++){
            const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
            const cookiesSold = Math.ceil(this.avgCookiePerCustomer * randomCustomersPerHour);
            this.randomCookiesPerHour[i] = cookiesSold;
            total += cookiesSold;
        }
        this.totalCookiesSold = total;
    },

    render: function() {
        // get on screeen
        const containerElem = document.getElementById(`cookie-stand-locations`);

        // article
        const articleElem = document.createElement(`article`);
        containerElem.appendChild(articleElem);

        // heading
        const headingElem = document.createElement(`h2`);
        articleElem.appendChild(headingElem);
        headingElem.textContent = this.title; 

        // ul
        const ulElem = document.createElement(`ul`);
        articleElem.appendChild(ulElem);

        // list items
        for(let i=0; i < this.randomCookiesPerHour.length; i++) {
            const liElem = document.createElement(`li`);
            ulElem.appendChild(liElem);
            const timeSlot = hours[i];
            const cookiesSoldThisHour = this.randomCookiesPerHour[i]
            liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
        }

        // total sales
        const liElem = document.createElement(`li`);
        ulElem.appendChild(liElem);
        liElem.textContent = `Total: ` + this.totalCookiesSold;

        }

    };

paris.generateRandomCookiesPerHour();
paris.render()

function randomInRange(min,max){
    const span = max - min + 1;
    const randInSpan = Math.floor(Math.random() * span);
    return min + randInSpan;
    
}