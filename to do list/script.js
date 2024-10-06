document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        addTask(task);
        input.value = ''; // เคลียร์ช่องกรอกหลังจากเพิ่มสิ่งที่ต้องทำแล้ว
    }
});

function addTask(task) {
    const todoList = document.getElementById('todo-list');

    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}