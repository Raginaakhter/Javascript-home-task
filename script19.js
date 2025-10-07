let Arms = 153;

let num1  = Math.floor(Arms / 100);        
let num2 = Math.floor((Arms % 100) / 10);     
let num3 = Arms % 10;                        

let sum = num1**3 + num2**3 + num3**3;

if(sum === Arms){
    console.log(Arms + "  Armstrong number");
} else {
    console.log(Arms + "  Not Armstrong number");
}
