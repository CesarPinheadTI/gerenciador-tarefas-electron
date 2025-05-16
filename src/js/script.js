function addTask () {
    var input = document.getElementById("input-tarefa");
    var inputValue = input.value;
    input.value = null;
    var list = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerText = inputValue;
    li.innerHTML = `${inputValue} <button class="buttondelete" onclick="this.parentElement.remove()"><img src="../../assets/delete.webp" alt="Add" width="18" height="18"> </button>`;
    li.onclick = function() {
        li.className = "doneTask";
    }
    list.appendChild(li);
}