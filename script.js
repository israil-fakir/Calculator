let Result = document.getElementById('result');

function insertValue(value)
{
    Result.value += value;
}

function cleanResult()
{
    Result.value = "";
}

function deleteResult()
{
    Result.value = Result.value.slice(0,-1);
}

function equalfun()
{
    try
    {
        Result.value = eval(Result.value);

    }
    catch(error)
    {
        Result.value="Error"
    }
}

function decimalToBinary() {
    try {
        let value = Result.value.trim();
        if (/^[01]+$/.test(value)) 
            {
                let decimalValue = parseInt(value, 2);
                Result.value = decimalValue;
            } 
        else 
        {            
            let decimalValue = parseInt(value, 10);
            
            if (isNaN(decimalValue))
            {
                Result.value = "Error";
            } 
            else 
            {
                Result.value = decimalValue.toString(2);
            }
        }
    }
     catch (error)
    {
        Result.value = "Error";
    }
}
