// =========================================
// Array Sum Program in JavaScript
// =========================================

// Array containing multiple numbers
// ऐरे बनाया जिसमें कई नंबर स्टोर हैं
let arr = [10, 50, 30, 40];

// Variable for storing total sum
// कुल जोड़ स्टोर करने के लिए वेरिएबल बनाया
// Starting value is 0
// शुरुआती वैल्यू 0 रखी
let sum = 0;

// Loop will run on every array element
// लूप ऐरे के हर एलिमेंट पर चलेगा

// Loop starts from index 0
// i = 0 से लूप शुरू होगा

// arr.length gives total length of array
// arr.length ऐरे की कुल लंबाई बताता है

// i++ increases value of i by 1 after every round
// i++ हर राउंड के बाद i की वैल्यू 1 बढ़ाता है
for (let i = 0; i < arr.length; i++) {

    // Add current element into sum
    // वर्तमान एलिमेंट को sum में जोड़ रहे हैं
    sum = sum + arr[i];
}

// Print final total sum
// अंतिम कुल जोड़ प्रिंट करेगा
console.log(sum);

//====================Final Code=====================//
let arr=[10,50,30,40];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
console.log(sum);