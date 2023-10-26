function calculateBmi(){

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    let result = document.querySelector("#result");
    if (isNaN(weight) || isNaN(height) || weight <= 0|| height <= 50) {
        result.textContent = "Please enter valid weight and height.";
        
} else{
    /* const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters); */
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) 
        result.textContent =`Under Weight : ${bmi}`;

    else if (bmi >= 18.6 && bmi < 24.9) 
      result.textContent=  `Normal : ${bmi}`;

    else result.textContent=
        `Over Weight : ${bmi}`;
return result;

                }

                function clearAll(){
                    
                }
                   
            }                  