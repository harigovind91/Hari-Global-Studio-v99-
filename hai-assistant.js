// HAI  - The Guardian of Heaven
const HAI_Assistant = {
    name: "HAI ",
    creator: "Harigovind Singh Chauhan",
    themeColor: "#f1c40f",

    // आवाज से कमांड लेना
    listen: function() {
        console.log("HAI: मैं सुन रहा हूँ, हुक्म कीजिये...");
        // यहाँ वॉइस रिकग्निशन कोड चालू होगा
    },

    // यूजर की मदद करना
    respond: function(query) {
        if(query.includes("पैसा") || query.includes("कमाई")) {
            return "हरिगोविंद जी के स्वर्ग में आपका स्वागत है! आपकी आज की कमाई $250 है।";
        }
        if(query.includes("रिचार्ज")) {
            return "आप अपने गोल्ड वॉलेट को अभी रिचार्ज कर सकते हैं।";
        }
        return "मैं आपकी कैसे मदद कर सकता हूँ?";
    }
};

// UI में फ्लोटिंग बटन जोड़ना
function injectHAI() {
    const btn = document.createElement("div");
    btn.innerHTML = `<div style="position:fixed; bottom:30px; right:30px; width:70px; height:70px; 
                     background:linear-gradient(45deg, #f1c40f, #f39c12); border-radius:50%; 
                     display:flex; align-items:center; justify-content:center; cursor:pointer; 
                     box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index:9999; border:3px solid #fff;">
                     <span style="font-size:30px;">🤖</span></div>`;
    document.body.appendChild(btn);
}
injectHAI();
