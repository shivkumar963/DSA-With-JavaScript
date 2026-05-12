// =========================================
// Remove Spaces Program in JavaScript
// =========================================

// Original string
// ओरिजिनल स्ट्रिंग बनाई
let str = "SHIV K UMAR IS BAD";


// Empty string for storing final result
// अंतिम परिणाम स्टोर करने के लिए खाली स्ट्रिंग बनाई
let result = "";


// Loop will run on every character of string
// लूप स्ट्रिंग के हर कैरेक्टर पर चलेगा

// i = 0 means loop starts from first index
// i = 0 का मतलब लूप पहले इंडेक्स से शुरू होगा

// str.length gives total length of string
// str.length स्ट्रिंग की कुल लंबाई बताता है

// i++ increases value of i by 1 after every round
// i++ हर राउंड के बाद i की वैल्यू 1 बढ़ाता है
for (let i = 0; i < str.length; i++) {

    // Check current character is not space
    // जाँच रहे हैं कि वर्तमान कैरेक्टर space नहीं है

    // " " means single space character
    // " " एक space character को दर्शाता है
    if (str[i] != " ") {

        // Add non-space character into result
        // non-space कैरेक्टर को result में जोड़ रहे हैं
        result += str[i];
    }
}


// Print final string without spaces
// बिना space वाली अंतिम स्ट्रिंग प्रिंट करेगा
console.log(result);


//====================Final Code=====================//

let str="SHIV K UMAR IS BAD";
let result="";

for(let i=0;i<str.length;i++){

    if(str[i]!=" "){
        result +=str[i];
    }
}

console.log(result);