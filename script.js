const deadline = new Date();
deadline.setHours(deadline.getHours() + 2);

function updateTimer(){

    const now = new Date();

    const diff = deadline - now;

    if(diff <= 0){
        document.getElementById("timer").innerText = "SLA Breached";
        return;
    }

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById("timer").innerText =
        `${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer,1000);

updateTimer();