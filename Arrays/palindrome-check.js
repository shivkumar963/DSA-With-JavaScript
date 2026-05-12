// =========================================
// Palindrome String Program in JavaScript
// =========================================

// Original string
// ओरिजिनल स्ट्रिंग बनाई
let str = "Madam";


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
    rev += str[i];
}


// Compare original string and reversed string
// ओरिजिनल और उलटी स्ट्रिंग की तुलना कर रहे हैं

// toLowerCase() converts both strings into lowercase
// toLowerCase() दोनों स्ट्रिंग को छोटे अक्षरों में बदल देता है
if (str.toLowerCase() === rev.toLowerCase()) {

    // If both are same then it is palindrome
    // अगर दोनों समान हैं तो यह palindrome है
    console.log("Palindrome");

} else {

    // If both are different then it is not palindrome
    // अगर दोनों अलग हैं तो यह palindrome नहीं है
    console.log("Not Palindrome");
}


//====================Final Code=====================//

let str="Madam";
let rev="";
for(let i=str.length-1;i>=0;i--){
    rev +=str[i];
}

if(str.toLowerCase()===rev.toLowerCase()){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}