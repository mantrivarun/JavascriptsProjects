const form =document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height= parseInt(document.getElementById('height').value);
    const weight= parseInt(document.getElementById('weight').value);
    const result= document.getElementById('result');
    const report= document.getElementById('report');

    if(height==='' || height <= 0 || isNaN(height))
    {
        result.innerHTML= "Please enter a valid height";
    }
    else if(weight==='' || weight <= 0 || isNaN(weight))
    {
        result.innerHTML= "Please enter a valid weight";
    }
    else
    {
        const bmi = (weight / (Math.pow(height/ 2)*100,2)).toFixed(2);

        //show result
        result.innerHTML=`<span>${bmi}</span>`

        if(bmi>24.9){
            report.innerHTML = "You are overweight";
        }   
        else if(bmi>=18.6 && bmi<=24.9){
            report.innerHTML = "You are normal weight";    
        }
        else
        {
            report.innerHTML="You are under weight";
        }

    }

    
})