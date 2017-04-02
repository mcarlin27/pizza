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
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#address").append('<div class="delivery-address">' +
                            '<label for="addressType">Address Type</label>' +
                            '<select class="form-control" id="addressType">' +
                              '<option>House</option>' +
                              '<option>Apartment</option>' +
                              '<option>Office</option>' +
                            '</select>' +
                            '<br>' +
                            '<div class="form-group">' +
                              '<label for="street">Street</label>' +
                              '<input type="text" class="form-control street">' +
                            '</div>' +
                            '<div class="form-group">' +
                              '<label for="city">City</label>' +
                              '<input type="text" class="form-control city">' +
                            '</div>' +
                            '<div class="form-group">' +
                              '<label for="state">State</label>' +
                              '<input type="text" class="form-control state">' +
                            '</div>' +
                            '<div class="form-group">' +
                              '<label for="input">Special Instructions?</label>' +
                              '<textarea id="input" class="form-control" rows="4" cols="10" placeholder="Enter text here"></textarea>' +
                            '</div>' +
                          '</div>');
    });

  $("form#new-pizza").submit(function(event) {
    event.preventDefault();


  });
