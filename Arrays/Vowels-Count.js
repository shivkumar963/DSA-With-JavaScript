// =========================================
// Vowel Count Program in JavaScript
// =========================================

// Original string
// ओरिजिनल स्ट्रिंग बनाई
let str = "JavaScript";


// Variable for storing total vowel count
// कुल vowel गिनने के लिए वेरिएबल बनाया
let count = 0;


// Loop will run on every character of string
// लूप स्ट्रिंग के हर कैरेक्टर पर चलेगा

// i = 0 means loop starts from first index
// i = 0 का मतलब लूप पहले इंडेक्स से शुरू होगा

// str.length gives total length of string
// str.length स्ट्रिंग की कुल लंबाई बताता है

// i++ increases value of i by 1 after every round
// i++ हर राउंड के बाद i की वैल्यू 1 बढ़ाता है
for (let i = 0; i < str.length; i++) {

    // Check if current character is vowel
    // जाँच रहे हैं कि वर्तमान कैरेक्टर vowel है या नहीं
    if (
        str[i] === 'a' ||
        str[i] === 'e' ||
        str[i] === 'i' ||
        str[i] === 'o' ||
        str[i] === 'u'
    ) {

        // Increase vowel count
        // vowel मिलने पर count बढ़ा रहे हैं
        count++;
    }
}


// Print total vowels
// कुल vowels प्रिंट करेगा
console.log("Vowels = " + count);


//====================Final Code=====================//

let str="JavaScript";
let count=0;

for(let i=0; i<str.length;i++){

    if(
        str[i]==='a' ||
        str[i]==='e' ||
        str[i]==='i' ||
        str[i]==='o' ||
        str[i]==='u'
    ){
        count++;
    }
}

console.log("Vowels = " + count);