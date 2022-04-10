let totalTime = 20; // Second 
let totalSecond = totalTime * 60;
let counter = document.querySelector(".counter");

let startCounter = setInterval(() => {

    if(totalTime <= 0){
        clearInterval(startCounter);
        counter.innerHTML = "The time has expired.";
    } else {
        totalTime -- ;


        const day = Math.floor (totalTime / 3600 / 24);
        const hour = Math.floor (totalTime / 3600) % 24;
        const minute = Math.floor (totalTime / 60) % 60;
        const second = Math.floor (totalTime % 60);

        counter.innerHTML = ` Time remaining : ${change(day)} Day / ${change(hour)} Hour / ${change(minute)} Minute / ${change(second)} Second `;
    }
},1000);

function change (a) {
    return a < 10 ? `0 ${a}` : a
}

// 1 day --> 24 hour --> 24*60 minute --> 24*60*60 second.
// 1 day --> 60 minute --> 60*60 second.