// Ask the user for the original price of an item and the discount percentage. Calculate the discount amount and the final price. If the discount percentage is greater than 50, alert the user that this is a great deal.

let OgPriceInput = prompt("Type the original price here")
let DiscountPercentageInput = prompt("Type the discount percentage here")
let OgPrice = parseInt(OgPriceInput)
let DiscountPercentage = parseInt(DiscountPercentageInput)
let DiscountAmount = (OgPrice/100)*DiscountPercentage
let FinalPrice = (OgPrice - DiscountAmount)
alert(FinalPrice)
alert(DiscountAmount)
if (DiscountPercentage>=50) {
    alert("This is a great deal!")
}