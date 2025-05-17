var meuInput = document.getElementById("input-tarefa");
meuInput.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        addTask();
    }
})

function addTask () {
    var input = document.getElementById("input-tarefa");
    var inputValue = input.value;
    if (!inputValue.trim()) {
        alert ("Entre com uma tarefa");
        return
    }
    input.value = null;
    var list = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerText = inputValue;
    li.innerHTML = `${inputValue} <button class="buttondelete" onclick="this.parentElement.remove()"><img src="../../assets/delete.webp" alt="Add" width="18" height="18"></button>`;
    li.onclick = function() {
        li.className = "doneTask";
    }
    list.appendChild(li);
    showModal();
}

function showModal() {
    var modal = document.getElementById("modal-success");
    modal.classList.add("open-modal");
    var audio = document.getElementById("audio-toasty");
    audio.play();
    setTimeout(function() {
        modal.classList.remove('open-modal');
    }, 400);
}