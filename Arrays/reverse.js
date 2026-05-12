// =========================================
// Reverse String Program in JavaScript
// =========================================

// Original string
// ओरिजिनल स्ट्रिंग बनाई
let str = "12345";

// Empty string for storing reversed value
// उलटी स्ट्रिंग स्टोर करने के लिए खाली स्ट्रिंग बनाई
let rev = "";

// Loop starts from last index
// लूप आखिरी इंडेक्स से शुरू होगा

// str.length - 1 gives last index
// str.length - 1 आखिरी इंडेक्स देता है

// i >= 0 means loop will run till index 0
// i >= 0 का मतलब लूप 0 इंडेक्स तक चलेगा

// i-- decreases value of i by 1 after every round
// i-- हर राउंड के बाद i की वैल्यू 1 घटाता है
for (let i = str.length - 1; i >= 0; i--) {

    // Add current character into rev
    // वर्तमान कैरेक्टर को rev में जोड़ रहे हैं
    rev = rev + str[i];
}

// Print reversed string
// उलटी स्ट्रिंग प्रिंट करेगा
console.log(rev);


//====================Final Code=====================//

let str="12345";
let rev="";
for(let i=str.length-1; i>=0; i--){
    rev=rev+str[i];
}
console.log(rev)