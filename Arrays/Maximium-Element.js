// =========================================
// Maximum Number Program in JavaScript
// =========================================

// Array containing multiple numbers
// ऐरे बनाया जिसमें कई नंबर स्टोर हैं
let arr = [10, 5, 80, 20];


// Store first array element as initial maximum value
// शुरुआती अधिकतम मान के लिए पहला एलिमेंट लिया
let max = arr[0];


// Loop will run from second element of array
// लूप ऐरे के दूसरे एलिमेंट से शुरू होगा

// i = 1 means loop starts from second index
// i = 1 का मतलब लूप दूसरे इंडेक्स से शुरू होगा

// arr.length gives total length of array
// arr.length ऐरे की कुल लंबाई बताता है

// i++ increases value of i by 1 after every round
// i++ हर राउंड के बाद i की वैल्यू 1 बढ़ाता है
for (let i = 1; i < arr.length; i++) {

    // Check current element is greater than max
    // जाँच रहे हैं कि वर्तमान एलिमेंट max से बड़ा है या नहीं
    if (arr[i] > max) {

        // Update maximum value
        // अधिकतम मान को अपडेट कर रहे हैं
        max = arr[i];
    }
}


// Print maximum value
// सबसे बड़ा नंबर प्रिंट करेगा
console.log("Max =", max);


//====================Final Code=====================//

let arr = [10, 5, 80, 20];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Max =", max);