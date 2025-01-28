//  const num1 = [1,2, 4,5 ,6 ,7 ,9, 90]
//  const newArr = [...num1]
//  console.log(newArr);

//  /*
//    * Пошук найнижчої або найвищої температури (числа)
//    */
//  const temps = [18, 14, 12, 21, 17, 29, 24];

//  const lowestTemp = Math.min(...temps)
//  const hightTemp = Math.max(...temps)
//  console.log(lowestTemp);
//  console.log(hightTemp);


const cart = {
    items: [],
    getItems() {
        console.log(this.items);
    },
    add(productName) {
        for (const item of this.items) {
            if (item.name === productName.name) {
                item.quantity += 1
                return
            }
        }
        const currentItems = {
            ...productName,
            quantity: 1
        }
        this.items.push(currentItems)
    },
    remove(productName) {
        const product = this.items[i]
        console.log(product);
        if (productName === product.name) {
            this.items.splice(i, 1)
        }
    },
    clear() {
        this.items = []
     },
    countTotalPrice() {
        let total = 0;
        for (const item of this.items) {
            total += item.price * item.quantity
            // console.log(total);
        }

        
        return total
     },
    increaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.quantity += 1
            }
        }
     },
    decreaseQuantity(productName) { },
};

cart.getItems()
cart.add({ name: '🍎', price: 50 }
    )
cart.add({ name: '🍇', price: 70 })
cart.add({ name: '🍋', price: 60 })
cart.add({ name: '🍋', price: 60 })
cart.increaseQuantity('🍎')
console.log(cart.countTotalPrice());
/*
* Працюємо з колекцією товарів в кошику:
* - getItems()
* - add(product)
* - remove(productName)
* - clear()
* - countTotalPrice()
* - increaseQuantity(productName)
* - decreaseQuantity(productName)
*
* { name: '🍎', price: 50 }
* { name: '🍇', price: 70 }
* { name: '🍋', price: 60 }
* { name: '🍓', price: 110 }
*/