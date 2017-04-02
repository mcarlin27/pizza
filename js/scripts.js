// business logic

function Pizza(crust, cheese, toppings) {
  this.pizzaCrust = crust;
  this.pizzaCheese = cheese;
  this.pizzaToppings = toppings;
}

function Address(addressType, street, city, state) {
  this.addressType = addressType;
  this.street = street;
  this.city = city;
  this.state = state;
  this.instructions = specialInstructions;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state + " " + this.specialInstructions;
};

// front-end logic
