const goalDate = document.querySelector("input");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;


goalDate.addEventListener("change", display);

function display() {
    clearInterval(timeInterval);
    const tmp = new Date(goalDate.value);
    startClock(tmp);
    timeStop = true;

}

function startClock(tmp) {
    function update() {
        let tl = timeLeft(tmp);
        if (tl.total <= 0)
            timeStop = false;

        for (let i in tl) {
            let el = clock.querySelector("." + i);
            if (el) {
                if (tl.total < 0) {
                    el.innerHTML = "MINUS VALUE";
                } else
                    el.innerHTML = (tl[i]<10)? "0"+tl[i] :tl[i];
            }
        }

    }
    update();
    if (timeStop) {
        timeInterval = setInterval(update, 1000);
    } else
        clearInterval(timeInterval);


}

function timeLeft(tmp) {
    let curDate = new Date();
    let time = Date.parse(tmp) - Date.parse(curDate);

    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor(((time / 1000) / 60) % 60);
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    let days = Math.floor(time / (1000 * 60 * 60 * 24));

    return {
        "total": time,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}