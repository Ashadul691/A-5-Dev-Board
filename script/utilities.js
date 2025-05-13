function task (button, id, cardTitle){
    id.preventDefault();
    const taskNum=parseInt(document.getElementById("task-num").innerText);
    const checkboxTaskNumnber =parseInt(document.getElementById("checkbox-task-number").innerText);
    const taskTitle=document.getElementById(cardTitle).innerText;

    const CurrentCheckboxTaskNumnber=checkboxTaskNumnber+1;
    document.getElementById("checkbox-task-number").innerText="0"+CurrentCheckboxTaskNumnber;

    const currrentTaskNum=taskNum-1;
    document.getElementById("task-num").innerText = "0" + currrentTaskNum;

    
    const container = document.getElementById("task-complete-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="p-3">
            <p class="bg-[#F4f7FF] p-3 rounded-lg">
              You have completed the task ${taskTitle} at ${getCurrentTime()}.
            </p>
          </div> ` ;

    container.appendChild(div);

    button.style.backgroundColor = "gray";

    alert("Board Updated Successfully");

    if (currrentTaskNum === 0) {
        alert("Great!! You have completed all the current tasks.");
    }

    button.classList.remove("cursor-pointer");
    button.disabled = true;
}

function getCurrentTime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let AmPm;

    if (hours >= 12) {AmPm = 'PM';} 
    else {AmPm = 'AM';}

    if (hours > 12) {hours = hours - 12;} 
    else if (hours === 0) {hours = 12;}

    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}
    return hours + ":" + minutes + ":" + seconds + " " + AmPm;
}
