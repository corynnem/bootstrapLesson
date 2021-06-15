let groceryItems = [
    {
        price: 3.99,
        itemName: "Cornflakes",
        quantityAvailable: 30,
        isSoldOut: false 
    },
    {
       price: 10.99,
       itemName: "Toilet Paper",
       quantityAvailable: 25,
       isSoldOut: false 
   },
   {
       price: 2.15,
       itemName: "Cheese It's",
       quantityAvailable: 0,
       isSoldOut: true 
   },
   {
       price: 2.59,
       itemName: "Lunchables",
       quantityAvailable: 5,
       isSoldOut: false 
   },
   {
       price: 3.85,
       itemName: "Granola",
       quantityAvailable: 30,
       isSoldOut: false 
   },
   {
       price: 2.15,
       itemName: "Apple Sauce",
       quantityAvailable: 23,
       isSoldOut: false 
   },
   {
       price: 1.05,
       itemName: "Chicken Noodle Soup",
       quantityAvailable: 10,
       isSoldOut: false 
   },
   {
       price: 1.89,
       itemName: "Pickles",
       quantityAvailable: 0,
       isSoldOut: true 
   },
   {
       price: .25,
       itemName: "Ramen",
       quantityAvailable: 30,
       isSoldOut: false 
   },
   {
       price: 2.49,
       itemName: "Peanut Butter",
       quantityAvailable: 25,
       isSoldOut: false 
   },
   {
       price: 2.40,
       itemName: "Milk",
       quantityAvailable: 30,
       isSoldOut: false 
   },
   {
       price: 3.05,
       itemName: "Ice Cream",
       quantityAvailable: 10,
       isSoldOut: false 
   },
   {
        price: 1.15,
        itemName: "Cake Mix",
        quantityAvailable: 7,
        isSoldOut: false 
    },
    {
        price: 1.15,
        itemName: "Trail Mix",
        quantityAvailable: 23,
        isSoldOut: false 
    }
   
]




function displayItems(){ 
    for(i = 0; i < groceryItems.length; i++){
        let title = document.getElementsByClassName('card-title')[0]
        let subtitle = document.getElementsByClassName('card-subtitle')[0]
        let pText = document.getElementsByClassName('card-text')[0]
        
       
        if(title.innerText.length > 0){
            
            let cardWrapper = document.getElementById("our-cards");
            let newCard = document.getElementsByClassName("card")[0];
            var clone = newCard.cloneNode(true);

            title.innerText = groceryItems[i].itemName
            subtitle.innerText = `$${groceryItems[i].price}`
            pText.innerText = `${groceryItems[i].quantityAvailable} left`

            cardWrapper.appendChild(clone);

        } else {
            title.innerText = groceryItems[i].itemName
            subtitle.innerText = `$${groceryItems[i].price}`
            pText.innerText = `${groceryItems[i].quantityAvailable} left`
        }

    }
}

displayItems()

//21 lines