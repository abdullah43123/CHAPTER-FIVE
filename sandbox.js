// CHAPTER 5

var x = 5;
var y = 6;
var z = x + y;
var a = x - y;
var b = x * y;
var c= x / y;

document.write("The sum of 5 and 6 is " + z + "<br>");
document.write("The sum of 5 and 6 is " + a + "<br>");
document.write("The sum of 5 and 6 is " + b + "<br>");
document.write("The sum of 5 and 6 is " + c + "<br>");

var firstId;
document.write("Value after variable declaration is: " + firstId + "<br>");

var secondId = 5;
document.write("Initial Value: " + secondId + "<br>");

var thirdId = 6;
document.write("Value after increment is: " + thirdId + "<br>");

var fourthId = 7 + thirdId;
document.write("Value after addition is: " + fourthId + "<br>");

var fifthId = fourthId - 1;
document.write("Value after decrement is: " + fifthId + "<br>");

var sixthId = fifthId % 3;
document.write("The remainder is: " + sixthId + "<br>");

var ticketPrice = 600;
var calculatePrice = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + calculatePrice + "PKR" + "<br>");

document.write("Table of 4" + "<br>");

document.write("4 x 1 " + "= " + 4 + "<br>");
document.write("4 x 2 " + "= " + 8 + "<br>");
document.write("4 x 3 " + "= " + 12 + "<br>");
document.write("4 x 4 " + "= " + 16 + "<br>");
document.write("4 x 5 " + "= " + 20 + "<br>");
document.write("4 x 6 " + "= " + 24 + "<br>");
document.write("4 x 7 " + "= " + 28 + "<br>");
document.write("4 x 8 " + "= " + 32 + "<br>");
document.write("4 x 9 " + "= " + 36 + "<br>");
document.write("4 x 10 "+ "= " + 40 + "<br>");


// CELCIUS TEMPERATURE

// FARENHEIT TO CELSIUS START
var faranheit = prompt("Write any number");
document.write(faranheit + "°F");
var converter = (faranheit - 32) * 5/9;
document.write(converter + "°C" + "<br>");
// FARENHEIT TO CELSIUS END

// CELSIUS TO FARENHEIT START
var celsius = prompt("Write any number");
document.write(celsius + "°C");
var converter_1 = (celsius * 9/5) + 32;
document.write(converter_1 + "°F" + "<br>");
// CELSIUS TO FARENHEIT END

// CELCIUS TEMPERATURE

// SHOPPTING CART

document.write("SHOPPTING CART" + "<br>")
var first_item = 650;
var quantity_item1 = 3;
var second_item = 100;
var quantity_item2 = 7;
var ship_Charges = 100;

document.write("Price of 1 item is " + first_item + "<br>");
document.write("Quantity of item 1 is " + quantity_item1 + "<br>");
document.write("Price of 2 item is " + second_item + "<br>");
document.write("Quantity of item 2 is " + quantity_item2 + "<br>");
document.write("Shipping Charges " + ship_Charges + "<br>");
var calculate_total = first_item * quantity_item1 + second_item * quantity_item2 + ship_Charges;
document.write("Total cost of your order is " + calculate_total + "<br>");

// SHOPPTING CART

// MARK SHEET

document.write("MARK SHEET" + "<br>")
var totalMarks = 980;
var markObtained = 804;
var percentage = markObtained / totalMarks * 100;

document.write("Total Marks " + totalMarks + "<br>");
document.write("Obtained Marks " + markObtained + "<br>");
document.write("Percentage " + percentage + "<br>");

// MARK SHEET

// CURRENCY IN PKR 

document.write("CURRENCY IN PKR" + "<br>");
var dollar_convert = 10 * 104.80; 
var saudi_convert = 25 * 28; 
var conversions = dollar_convert + saudi_convert;

document.write("TOTAL CURRENCY IN PKR: " + conversions + "<br>");

// CURRENCY IN PKR 

// 10 QUESTION START

document.write("QUESTION 10" + "<br>")
let newOne = 25;
let calculations = (newOne + 5) * 10 / 2;
document.write(calculations + "<br>")

// 10 QUESTION END

// AGE CALCULATOR START

document.write("AGE CALCULATOR" + "<br>");

document.write("AGE CALCULATOR")
let current_Age = 2024;
let birth_Date = 2004;
let now_Age = current_Age - birth_Date;
document.write("Current Year: " + current_Age + "<br>");
document.write("Birth Year: " + birth_Date + "<br>");
document.write("Your Age is: " + now_Age + "<br>");

// AGE CALCULATOR END 

//THE GEOMETRIZER START

document.write("The Geometrizer");

let radius = 20;
let pae = 3.142;

document.write("Radius of a circle is: " + radius + "<br>");
document.write("The circumference is:" + radius * 2 * pae + "<br>");
document.write("The area is: " +  pae * radius ** 2 + "<br>"); 

//THE GEOMETRIZER END

// LIFETIME SUPPLY CALCULATOR START

let fav_Snack = "Chocolate Chip";
let age = 15;
let max_Age = 65;
let avg_Snacks = 3;
let total = max_Age - age * 3;
document.write("You will need " + total + fav_Snack + " to last you until the ripe old age of " + max_Age + "<br>");

// LIFETIME SUPPLY CALCULATOR END
