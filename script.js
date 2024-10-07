let date = new Date();
let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")
let day_text = document.getElementById("day_text")
let month_text = document.getElementById("month_text")
let year_text = document.getElementById("year_text")
let day_title = document.getElementById("day_title")
let month_title = document.getElementById("month_title")
let year_title = document.getElementById("year_title")

function startWork(){
    month_text.innerText = (Math.floor(date.getMonth() - Math.floor(month.value) + 1))
    day_text.innerText = (Math.floor(date.getDate() - Math.floor(day.value)))
    if (date.getFullYear()-year.value >=0){
        if (year.value <= date.getFullYear()){
            year_text.innerText = (Math.floor(date.getFullYear() - Math.floor(year.value)))
            if (month_text.innerText <= 0){
                month_text.innerText = Math.floor(month_text.innerText) + 12;
                year_text.innerText = Math.floor(year_text.innerText) - 1;
            }
            if (day_text.innerText <= 0){
                month_text.innerText = month_text.innerText - 1;
                day_text.innerText = Math.floor(day_text.innerText) + 30;
            }   
        }
        day.style.borderColor="#000000"
        month.style.borderColor="#000000"
        year.style.borderColor="#000000"
        year_title.style.color="#000000"
        month_title.style.color="#000000"
        day_title.style.color="#000000"
        year.style.color="#000000"
        month.style.color="#000000"
        day.style.color="#000000"
        if (day_text.innerText == 30){
            day_text.innerText = 0;
            month_text.innerText = month_text.innerText * 1 + 1;
        }
        if (month_text.innerText == 12){
            month_text.innerText = 0;
            year_text.innerText = year_text.innerText * 1 + 1;
        }
        if (year.value * 1 == date.getFullYear() && month.value * 1 == date.getMonth() + 1 && day.value * 1 == date.getDate()){
            month_text.innerText = "0";
            day_text.innerText = "0";
            year_text.innerText = "0";
        }
    }
    else{
        year_text.innerText = "--"
        month_text.innerText = "--"
        day_text.innerText = "--"
        day.style.borderColor="#FF0000"
        month.style.borderColor="#FF0000"
        year.style.borderColor="#FF0000"
        year_title.style.color="#FF0000"
        month_title.style.color="#FF0000"
        day_title.style.color="#FF0000"
        year.style.color="#FF0000"
        month.style.color="#FF0000"
        day.style.color="#FF0000"
    }
    
    if((year_text.innerText < 0 || month_text.innerText < 0 || day_text.innerText < 0) || year.value * 1 < 0 || month.value * 1 < 0 || day.value * 1 < 0 || month.value > 12 || day.value > 30){
        year_text.innerText = "--"
        month_text.innerText = "--"
        day_text.innerText = "--"
        day.style.borderColor="#FF0000"
        month.style.borderColor="#FF0000"
        year.style.borderColor="#FF0000"
        year_title.style.color="#FF0000"
        month_title.style.color="#FF0000"
        day_title.style.color="#FF0000"
        year.style.color="#FF0000"
        month.style.color="#FF0000"
        day.style.color="#FF0000"
    }
}