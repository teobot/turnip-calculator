var turnip_calculator = new Vue({
    el: '#main_container',
    data: {
        title: "Turnip Calculator",
        amountSpent: 0,
        prev_price_per_turnip: 0,
        aiming_to_sell_price: 0
    },
    created() {

    },
    methods: {
        numberWithCommas: function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    computed: {
        turnips_owned: function() {
            var number_of_turnips_owned = Math.round(this.amountSpent / this.prev_price_per_turnip)
            if (isFinite(number_of_turnips_owned)) {
                return number_of_turnips_owned;
            } else {
                return 0;
            }

        },
        profit: function() {
            var profit = Math.round(this.turnips_owned * this.aiming_to_sell_price)
            if (isFinite(profit)) {
                return profit;
            } else {
                return 0;
            }
        },
        net_profit: function() {
            var net_profit = Math.round(this.profit - this.amountSpent)
            if (isFinite(net_profit)) {
                return net_profit;
            } else {
                return 0;
            }
        }
    }
})