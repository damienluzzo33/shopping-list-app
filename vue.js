var shoppingList = new Vue({
    el: '#shopping-list',
    data: {
        state: 'default',
        header: 'shopping list app',
        newItem: '',
        items: JSON.parse(localStorage.getItem("shoppingList")) || []
    },
    computed: {
        characterCount() {
            return this.newItem.label.length;
        },
        reversedItems() {
            return this.items.slice(0).reverse();
        }
    },
    methods: {
        saveItem: function() {
            this.items.push(this.newItem);
            this.newItem = {
                label: '',
                purchased: false
            };
            localStorage.setItem("shoppingList", JSON.stringify(this.items))
        },
        changeState: function(newState) {
            this.state = newState;
            this.newItem = {
                label: '',
                purchased: false
            };
        },
        togglePurchased: function(item) {
            item.purchased = !item.purchased
            localStorage.setItem("shoppingList", JSON.stringify(this.items))
        }
    }
})

