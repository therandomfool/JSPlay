var letters =[];
var word = 'racecar';
var rword = '';

// PUSH letters of the word into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// POP off stack in reverse order
for(var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log( word + " is a palindrome");
} else {
    console.log( word + ' is not a palindrome ')
}
