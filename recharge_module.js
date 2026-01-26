// Coins System for Dating & Gaming
const CoinSystem = {
    exchangeRate: 100, // 1 USD = 100 Coins
    
    addCoins: function(userID, amountPaid) {
        let coinsToAdd = amountPaid * this.exchangeRate;
        // यूजर के वॉलेट को अपडेट करना
        UserDatabase.updateBalance(userID, coinsToAdd);
        console.log(`HAI: ${coinsToAdd} Coins credited to User ${userID}`);
    }
};

