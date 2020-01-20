const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        //add meal to orders
        this.orders.push(meal);
    }
}

const chickenComboMeal = {
    sandwichType: "Chicken Sandwich",
    fries: "Small",
    drinkSize: "Large"
}
const pizzaComboMeal = {
    sandwichType: "Pizza Slice",
    fries: "Medium",
    drinkSize: "Large"
}
const tofuComboMeal = {
    sandwichType: "Tofu Salad",
    fries: "Large",
    drinkSize: "Small"
}

restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(pizzaComboMeal);
restaurant.placeOrder(tofuComboMeal);
console.table(restaurant.orders)
