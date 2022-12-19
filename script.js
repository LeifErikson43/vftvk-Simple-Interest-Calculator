function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var intrest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    
}
        