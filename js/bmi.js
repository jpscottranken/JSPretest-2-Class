const $ = selector => document.querySelector(selector)

/*

      bmi < 18.5 you are underweight
      bmi >= 18.5 but less than 25, you are of optimal weight
      bmi >= 25.0 but less than 30, you are overweight
      bmi >= 30.0 you are obese

 */

document.addEventListener("DOMContentLoaded", () => {
  //  Declare and initialize program constants
  const MINHEIGHT  =  12    //  Minimum height allowed
  const MAXHEIGHT  =  96    //  Maximum height allowed
  const MINWEIGHT  =   1    //  Minimum weight allowed
  const MAXWEIGHT  = 777    //  Maximum weight allowed
  const MINOPTIMAL =  18.5  //  Minimum opt weight BMI
  const MINOVER    =  25.0  //  Minimum overweight BMI
  const MINOBESE   =  30.0  //  Minimum obese weight BMI
  const OORHEIGHT  = "Height Out Of Range!"
  const OORWEIGHT  = "Weight Out Of Range!"
  
  //  Declare and initialize program variables
  let isValid      = true   //  Valid height/weight flag
  let theStatus    = ""     //  BMI status
  let theResult    = ""
  let height       = 0      //  Inputted height
  let weight       = 0      //  Inputted weight
  let bmi          = 0.0    //  Calculated BMI
  let status       = ""     //  BMI status

  const calculateTheBMI = () => {
    //  Set height variable based on textbox 1
    height = parseInt($("#height").value)

    //  Set weight variable based on textbox 2
    weight = parseInt($("#weight").value)

    //  Validate that height: a) Is numeric. b) Is within range.
    if (isNaN(height)       ||
       (height < MINHEIGHT) ||
       (height > MAXHEIGHT))
    { //  Validation failed
      $("#status").value = OORHEIGHT
      return
    }
    else
    {
      $("#status").value = ""
    }

    //  Validate that weight: a) Is numeric. b) Is within range.
    if (isNaN(weight)       ||
       (weight < MINWEIGHT) ||
       (weight > MAXWEIGHT))
    { //  Validation failed
      $("#status").value = OORWEIGHT
      return
    }
    else
    {
      $("#status").value = ""
    }

    result = weight / (Math.pow(height, 2)) * 703
    bmi = parseFloat(result.toFixed(2))
    $("#result").value = bmi
    //status = result
    setTheBMIStatus()
  }

  const setTheBMIStatus = () => {
    if (bmi < MINOPTIMAL)
    {
      //  BMI < 18.5
      status = "Underweight"
    }
    else if ((bmi >= MINOPTIMAL) && (bmi < MINOVER))
    {
      //  BMI >= 18.5 and < 25
      status = "Optimal Weight"
    }

    else if ((bmi >= MINOVER) && (bmi < MINOBESE))
    {
      //  BMI >= 25 and < 30
      status = "Overweight"
    }

    else {
      //  BMI >= 30
      status = "Obese"
    }

    //  Display the status
    $("#status").value = status
  }

  const clearAll = () => {
    height = 0
    weight = 0
    bmi    = 0.0
    status = "" 
    $("#height").value = ""
    $("#weight").value = ""
    $("#result").value = ""
    $("#status").value = ""
    $("#height").focus()
  }

  $("#clearForm").addEventListener("click", evt => {
    clearAll()
  })

  $("#calculate").addEventListener("click", evt => {
    calculateTheBMI()
  })
})