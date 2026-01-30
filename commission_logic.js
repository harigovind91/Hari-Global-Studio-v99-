// HAI Global HUB- Money Distribution Logic
function processSale(totalPrice, vendorID) {
    const commissionRate = 0.05; // 5% कमीशन
    const hariCommission = totalPrice * commissionRate;
    const vendorProfit = totalPrice - hariCommission;

    // 1. पैसा पेमेंट गेटवे से रिसीव करें
    // 2. कमीशन 'HAI MASTER BANK' में भेजें
    // 3. बचा हुआ पैसा वेंडर के वॉलेट में भेजें
    
    console.log(`सफलता! $${haiCommission} आपके स्वर्ग खाते में जमा हुए।`);
    return { systemGain: hariCommission, vendorGain: vendorProfit };
}
