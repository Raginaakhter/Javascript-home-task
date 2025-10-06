let char = "a";

if ("aeiouAEIOU".includes(char)) {
    console.log("Vowel");
} else if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
    console.log("Consonant");
} else {
    console.log("Not a letter");
}