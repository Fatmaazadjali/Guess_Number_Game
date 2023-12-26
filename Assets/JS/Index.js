

let x = Math.floor(Math.random() * 100 +1);

let guess = 1;

document.getElementById("submitguess").onclick = function() {
    let y = document.getElementById("guessplace").value;

    if (y == x){
        alert("Congratulations!!! You guessed the right number" + guess + "Guess");
    }
    else if (y > x) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}
