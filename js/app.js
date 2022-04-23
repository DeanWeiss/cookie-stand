'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let tableElem = null;

function CookieStand(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customershour = [];
  this.cookieSales = [];
  this.dailyLocationTotals = 0; 
  this.generateCookieSales();
}

CookieStand.prototype.generateCookieSales = function () {
  let locationTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    const simulatedCustomersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
    const simulatedSales = Math.ceil(simulatedCustomersPerHour * this.avgCookiesPerCustomer);
    this.cookieSales.push(simulatedSales);
    locationTotal += simulatedSales;
  }
  this.dailyLocationTotals = locationTotal;
}

CookieStand.prototype.render = function () {
  const rowElem = document.createElement('tr');
  tableElem.appendChild(rowElem);

  const locationElem = document.createElement('td');
  rowElem.appendChild(locationElem);
  locationElem.textContent = this.location;
  

  for (let i = 0; i < this.cookieSales.length; i++) {
    const salesElem = document.createElement('td');
    rowElem.appendChild(salesElem);
    salesElem.textContent = this.cookieSales[i];
  }

  const totalElem = document.createElement('td');
  rowElem.appendChild(totalElem);
  totalElem.textContent = this.dailyLocationTotals;
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createTable() {
  const containerElem = document.getElementById('sales-data');
  tableElem = document.createElement('table');
  containerElem.appendChild(tableElem);
}

function createHeaderRow() {
  const headerRowElem = document.createElement('tr');
  tableElem.appendChild(headerRowElem);
  const headerCellElem = document.createElement('th');
  headerRowElem.appendChild(headerCellElem);
  headerCellElem.textContent = ''
  for (let i = 0; i < hours.length; i++) {
    const headerCellElem = document.createElement('th');
    headerRowElem.appendChild(headerCellElem);
    headerCellElem.textContent = hours[i];
  }

}

function createFooterRow() {
  const footerRowElem = document.createElement('tfoot');
  tableElem.appendChild(footerRowElem);
  const footerCellElem = document.createElement('th');
  footerRowElem.appendChild(footerCellElem);
  footerCellElem.textContent = 'Total'
  var hourlyTotals = getHourlyTotalsAcrossShops();
  for (let i = 0; i < hours.length; i++) {
    const footerCellElem = document.createElement('th');
    footerRowElem.appendChild(footerCellElem);
    footerCellElem.textContent = hourlyTotals[i];
  }
}

// function getTotalHoursByShop () {
//   let shopTotalsArray = [];
//   for (let i = 0; i < cookieStands.length; i++){
//   let shopTotal = 0
//   for ( let j = 0; j < hours.length; j++ ){
//     shopTotal += cookieStands[i].cookieSales[j];
//   }
//   shopTotalsArray.push(shopTotal);
//   }
//   return shopTotalsArray
// }

function getHourlyTotalsAcrossShops() {
    let hourlyTotalsArray = [];
    for (let i = 0; i < hours.length; i++){
      let hoursTotal = 0
      for (let j = 0; j < cookieStands.length; j++){
      hoursTotal += cookieStands[j].cookieSales[i];
      }
      hourlyTotalsArray.push(hoursTotal);
    }
    return hourlyTotalsArray
  }

const cookieStands = [
  new CookieStand('Seattle', 23, 65, 6.3),
  new CookieStand('Tokyo', 3, 24, 1.2),
  new CookieStand('Dubai', 11, 38, 3.7),
  new CookieStand('Paris', 20, 38, 2.3),
  new CookieStand('Lima', 2, 16, 4.6)
];

//  function handleSubmit(event) {
//    event.preventDefault();
//  alert("Form submitted");
//  }

//  const formElem = document.getElementById('my-form');
//  formElem.addEventListener('submit', handleSubmit);

createTable();
createHeaderRow();
createFooterRow();

for (let i = 0; i < cookieStands.length; i++) {
  cookieStands[i].render();
}