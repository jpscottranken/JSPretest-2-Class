const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => {
  //  Declare and initialize program constants
  const MINGUESS    =   1                 //  Minimum allowable guess
  const MAXGUESS    = 100                 //  Maximum allowable guess
  const NGM         = "No Guess Made!"
  const WTH         = " Was Too High!"
  const WTL         = " Was Too Low!"
  const WC          = " Was Correct!"
  const GOOR        = " Out Of Range (< 1 or > 100)"

  //  Declare and initialize program variables
  let randNum = 0                         //  Generated random number
  let guess   = 0                         //  User guess
  let totGuesses = 0                      //  Total # of guesses made
  let isValid    = true                   //  Boolean flag
  let theStatus  = ""

  $("#makeGuess").addEventListener("click", evt => {
    makeYourGuess()
  })

  function makeYourGuess()
  {
   if (randNum === 0) 
   {
      //  Generate a random number between 1 - 100
      randNum = Math.floor(Math.random() * 100) + 1
   }

   guess = $("#guess").value

   if (guess === "")
   {
    $("#guessStatus").value = NGM
    return
   }

   figureGuessStatus()
  }

  function figureGuessStatus()
  {
    //  Validate the guess was within range (>= 1 and <= 100)
    if ((guess < MINGUESS) || (guess > MAXGUESS))
    {
      $("#guessStatus").value = GOOR
      return
    }

    //  Guess was valid
    $("#guessStatus").value = ""
    ++totGuesses

    let yourGuess = "Guess of " + guess
    //  Was guess too low
    if (guess < randNum)
    {
      $("#guessStatus").value = yourGuess + WTL
    }

    //  Was guess too high
    else if (guess > randNum)
    {
      $("#guessStatus").value = yourGuess + WTH
    }

    //  Correct guess
    else 
    {
      $("#guessStatus").value = yourGuess + WC
    }

    //  Display total guesses
    $("#totalGuesses").value = totGuesses
  }

  function clearTheForm()
  {
    $("#guess").value       = ""
    $("#guessStatus").value = ""
    $("#guess").focus()
  }

  $("#clearForm").addEventListener("click", evt => {
    clearTheForm()
  })

  $("#newGame").addEventListener("click", evt => {
    //  Generate a random number between 1 - 100
    randNum = Math.floor(Math.random() * 100) + 1

    //alert("The generated random number was: " + randNum)

    clearTheForm()
    $("#totalGuesses").value = ""
    totGuesses = 0
  })
})  
