document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('.task');
    const columns = document.querySelectorAll('.column');

    // Hacer las tareas arrastrables
    tasks.forEach(task => {
        task.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.id);
        });
    });

    // Permitir que las columnas acepten los elementos arrastrados
    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necesario para permitir el drop
        });

        column.addEventListener('drop', (e) => {
            e.preventDefault();
            const taskId = e.dataTransfer.getData('text');
            const task = document.getElementById(taskId);

            // Verificar que no sea el mismo contenedor
            if (task.parentNode !== column) {
                column.appendChild(task);
            }
        });
    });
})
