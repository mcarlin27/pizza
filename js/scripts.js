// business logic
var cheese = 0;
var toppings = 0;
var extraToppings = 0;

function Pizza(crust, sauce, cheese, size, toppings, extraToppings) {
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.size = size
  this.toppings = toppings;
  this.extraToppings = extraToppings;
}

Pizza.prototype.priceCalc = function(crust, sauce, cheese, size, toppings, extraToppings) {
  var pizzaPrice = (this.crust * 5) + (this.sauce) + (this.cheese) + (this.size) + (this.toppings) + (this.extraToppings);
  return pizzaPrice;
}

function Address(addressType, street, city, state, specialInstructions) {
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

  var crust;
  var sauce;
  var size;

  $("#add-address").click(function() {
    $("#address").show();
  });


  $("#add-pizza").click(function() {
    $("#more-pizza").append('<p><strong>Select a crust type</strong></p>' +
                            '<div class="radio">' +
                              '<label>' +
                                '<input type="radio" name="crust" value="1" checked>' +
                                'Thin Crust' +
                              '</label>' +
                            '</div>' +
                            '<div class="radio">' +
                              '<label>' +
                                '<input type="radio" name="crust" value="3">' +
                                'Deep Dish' +
                              '</label>' +
                            '</div>' +
                            '<div class="radio">' +
                              '<label>' +
                                '<input type="radio" name="crust" value="2">' +
                                'Grandma Style' +
                              '</label>' +
                            '</div>' +
                            '<div class="radio">' +
                              '<label>' +
                                '<input type="radio" name="crust" value="4">' +
                                'Gluten Free' +
                              '</label>' +
                            '</div>' +
                            '<br><br>' +
                            '<label for="sauce">Select your sauce</label>' +
                            '<select id="sauce">' +
                              '<option value="0">Tomato</option>' +
                              '<option value="1">Olive Oil</option>' +
                              '<option value="2">White Sauce</option>' +
                            '</select>' +
                            '<br><br>' +
                            '<p><strong>Choose some cheese:</strong></p>' +
                            '<label class="checkbox-inline">' +
                              '<input type="checkbox" id="mozzarella" value="1">' +
                              'Mozzarella' +
                            '</label>' +
                            '<label class="checkbox-inline">' +
                              '<input type="checkbox" id="feta" value="3">' +
                              'Feta' +
                            '</label>' +
                            '<label class="checkbox-inline">' +
                              '<input type="checkbox" id="ricotta" value="2">' +
                              'Ricotta' +
                            '</label>' +
                            '<label class="checkbox-inline">' +
                              '<input type="checkbox" id="vegan" value="4">' +
                              'Vegan--Daiya' +
                            '</label>' +
                            '<br><br>' +
                            '<label for="size">Single out a size</label>' +
                            '<select id="size">' +
                              '<option value="8">Small</option>' +
                              '<option value="10">Medium</option>' +
                              '<option value="12">Large</option>' +
                            '</select>' +
                            '<br><br>' +
                            '<div class="form-group">' +
                              '<p><strong>Traditional Toppings</strong></p>' +
                              '<input type="checkbox" name="trad-toppings" value="1">Pepperoni<br>' +
                              '<input type="checkbox" name="trad-toppings" value="1">Sausage<br>' +
                              '<input type="checkbox" name="trad-toppings" value="1">Bell pepper<br>' +
                              '<input type="checkbox" name="trad-toppings" value="1">Onion<br>' +
                              '<input type="checkbox" name="trad-toppings" value="1">Olives<br>' +
                              '<input type="checkbox" name="trad-toppings" value="1">Garlic<br>' +
                              '<input type="checkbox" name="trad-toppings" value="1">Anchovies<br>' +
                              '<input type="checkbox" name="trad-toppings" value="1">Artichoke<br>' +
                              '<input type="checkbox" name="trad-toppings" value="1">Mushrooms<br>' +
                            '</div>' +
                            '<br>' +
                            '<div class="form-group">' +
                              '<p><strong>Tubular Toppings</strong></p>' +
                              '<input type="checkbox" name="odd-toppings" value="2">Pineapple<br>' +
                              '<input type="checkbox" name="odd-toppings" value="2">Potato<br>' +
                              '<input type="checkbox" name="odd-toppings" value="2">Fried egg<br>' +
                              '<input type="checkbox" name="odd-toppings" value="2">Jackfruit<br>' +
                              '<input type="checkbox" name="odd-toppings" value="2">Vegan sausage<br>' +
                              '<input type="checkbox" name="odd-toppings" value="3">Unicorn meat<br>' +
                            '</div>');

    });

  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    crust = parseInt($("input:radio[name=crust]:checked").val());
    sauce = parseInt($("#sauce").val());
    $("input:checkbox[name=cheese]:checked").each(function() {
      var cheeseChoice = parseInt($(this).val());
      cheese += cheeseChoice;
      return cheese;
    });
    size = parseInt($("#size").val());
    $("input:checkbox[name=trad-toppings]:checked").each(function() {
      var toppingsChoice = parseInt($(this).val());
      toppings += toppingsChoice;
      return toppings;
    });
    $("input:checkbox[name=odd-toppings]:checked").each(function() {
      var oddToppingsChoice = parseInt($(this).val());
      extraToppings += oddToppingsChoice;
      return extraToppings;
    });

    // console.log(cheese);
    // console.log(size);
    // console.log(toppings);
    // console.log(extraToppings);

    var pizzaOrder = new Pizza(crust, sauce, cheese, size, toppings, extraToppings);

    var pizzaOrderPrice = pizzaOrder.priceCalc(crust, sauce, cheese, size, toppings, extraToppings);
    console.log(pizzaOrderPrice);

    //
    // var addressType = $(this).find("select#addressType").val();
    // var inputtedStreet = $(this).find("input.street").val();
    // var inputtedCity = $(this).find("input.city").val();
    // var inputtedState = $(this).find("input.state").val();
    // var inputtedSpecialInstructions = $(this).find("input.special-instructions").val();
    //
    // var newAddress = new Address(addressType, inputtedStreet, inputtedCity, inputtedState, inputtedSpecialInstructions)

  });
});
