const endTime = "01 Aug 2024 10:00 AM";
const Days = document.querySelector("#Days")
const Hours = document.querySelector("#Hours")
const Minutes = document.querySelector("#Minutes")
const Seconds = document.querySelector("#Seconds")

document.getElementById("end-time").innerHTML = endTime

function clock(){
    const end = new Date(endTime);
    const now = new Date();

    const diff = (end - now) / 1000;

    if (diff<0){
        heading();
        return ;
    }
        
        

    // count Days
    const days = Math.floor(diff /86400);
    Days.value = days;

    //count Hours
    // const hours = Math.floor(diff/3600 - (days*24))
    const hours = Math.floor((diff/3600)%24)
    Hours.value = hours;

    //count Minute
    const min = Math.floor((diff/60)%60)
    Minutes.value = min;

    //count second
    const sec = Math.floor(diff%60)
    Seconds.value = sec;

}

//initial call
clock();

setInterval(
    () => {
        clock()
        1000
    }
)

function heading(){
    document.getElementById("heading").innerHTML = "Welcome Here !";
    document.getElementById("end-time").innerHTML = ""
}




// 1 day = 24 hours == 24 * 3600 sec == 86400 sec
// 1 hour = 60 min == 3600 sec
// 1 min = 60 sec
