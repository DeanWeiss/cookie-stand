`use strict`;
const hours = [`6am`, `7am`, `8am`, `9am`, `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`]
let tableElem = null;

function City(name, minCustomers, maxCustomers, avgCookiePerCustomer) {
    this.name = name;
    this.minCustomers = minCustomers
    this.maxCustomers = maxCustomers
    this.avgCookiePerCustomer = avgCookiePerCustomer
    this.cookiesSales = [];
    this.generateSalesPerHour(); 
}

City.prototype.generateSalesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        const simulatedCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
        const simulatedSales = Math.ceil(simulatedCustomersPerHour * this.avgCookiePerCustomer);
        this.cookiesSales.push(simulatedSales);
    }
}

City.prototype.render = function () {
    const rowElem = document.createElement(`tr`);
    rowElem.appendChild(rowElem);

    const nameElem = document.createElement(`td`);
    rowElem.appendChild(nameElem);
    nameElem.textContent = this.name;

    for(let i=0; i < this.cookiesSales.length; i++) {
        const SalesElem = document.createElement(`td`);
        rowElem.appendChild(SalesElem);
        SalesElem.textContent = this.cookieSales[i];
    }

    const totalElem = document.createElement(`td`);
    rowElem.appendChild(totalElem);
    totalElem.textContent = `Total`
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

function createTable() {
    const containerElem = document.getElementById(`sales-data`);
    tableElem = document.createElement(`table`);
    containerElem.appendChild(tableElem);
}

function createHeaderRow() {
    const headerRowElem = document.createElement(`tr`);
    tableElem.appendChild(headerRowElem);
    for (let i = 0; i < hours.length; i++) {
        const headerCellElem = document.createElement(`th`)
        headerRowElem.appendChild(headerCellElem);
        headerCellElem.textcontent = hours[i];
    }
}

function createFooterRow() {
    const footerRowElem = document.createElement('tr');
    tableElem.appendChild(footerRowElem);
    for (let i = 0; i < hours.length; i++) {
      const footerCellElem = document.createElement('th');
      footerRowElem.appendChild(footerCellElem);
      footerCellElem.textContent = getHourlyTotalsAcrossShops();
    } 
}

function getHourlyTotalsAcrossShops() {
    return 123; //needs real values
}

createTable();
createHeaderRow();
createFooterRow();

const cities = [
    new City(`Seattle`, 23, 65, 6.3),
    new City(`Tokyo`, 3, 24, 1.2),
    new City(`Dubai`, 11, 38, 3.7),
    new City(`Paris`, 20, 38, 2.3),
    new City(`Lima`, 2, 16, 4.6),
];

for (let i = 0; i < cities.length; i++) {
    cities[i].render(); 
    }