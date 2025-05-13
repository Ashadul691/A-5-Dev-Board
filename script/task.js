const buttons = document.querySelectorAll('.task-btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (id) {
        const cardTitleId = `card-title-${i + 1}`;
        task(buttons[i],id,cardTitleId);
    });
}

document.getElementById('clear-history-btn').addEventListener('click',function(){
    document.getElementById('task-complete-container').innerHTML = "";
})
