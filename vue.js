var shoppingList = new Vue({
    el: '#shopping-list',
    data: {
        state: 'default',
        header: 'shopping list app',
        newItem: '',
        items: [
            {
                label: '2 banana bunches',
                purchased: false,
            },
            {
                label: '4 yogurt 4-packs',
                purchased: true
            },
            {
                label: '2 almond milks',
                purchased: false
            },
        ],
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
        }
    }
})

