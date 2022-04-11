`use strict`;

const seattle = {
location: `Seattle`,
customer: 0,
avgsale: 6.3,
getCust: function (){
    console.log(this.location);
    this.customer = randomcustomer(23, 65) + ` Customers`;
    console.log(this.customer)
    }
}

seattle.getCust();

console.log(seattle);

function randomcustomer (min, max){
    return math.floor(math.random() * (max - min + 1) + min);
}