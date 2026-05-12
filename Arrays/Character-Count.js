// =========================================
// Character Frequency Program in JavaScript
// =========================================

// Original string
// ओरिजिनल स्ट्रिंग बनाई
let str = "ABBBCDEFG";


// Empty object for storing character count
// कैरेक्टर की गिनती स्टोर करने के लिए खाली ऑब्जेक्ट बनाया
let obj = {};


// Loop will run on every character of string
// लूप स्ट्रिंग के हर कैरेक्टर पर चलेगा

// i = 0 means loop starts from first index
// i = 0 का मतलब लूप पहले इंडेक्स से शुरू होगा

// str.length gives total length of string
// str.length स्ट्रिंग की कुल लंबाई बताता है

// i++ increases value of i by 1 after every round
// i++ हर राउंड के बाद i की वैल्यू 1 बढ़ाता है
for (let i = 0; i < str.length; i++) {

    // Store current character into variable
    // वर्तमान कैरेक्टर को variable में स्टोर कर रहे हैं
    let ch = str[i];

    // If character already exists then increase count
    // अगर कैरेक्टर पहले से मौजूद है तो count बढ़ाओ

    // If character does not exist then start from 0
    // अगर कैरेक्टर मौजूद नहीं है तो 0 से शुरू करो
    obj[ch] = (obj[ch] || 0) + 1;
}


// Print final object
// अंतिम ऑब्जेक्ट प्रिंट करेगा
console.log(obj);


//====================Final Code=====================//

let str="ABBBCDEFG";
let obj={};

for(let i=0;i<str.length;i++){

    let ch=str[i];

    obj[ch]=(obj[ch] || 0) +1;
}

console.log(obj);