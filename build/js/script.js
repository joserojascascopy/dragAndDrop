document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('.task');
    const columns = document.querySelectorAll('.column');

    // Hacer las tareas arrastrables con dragstart
    // En este evento, guardamos el id del task que queremos arrastrar en e.dataTransfer
    tasks.forEach(task => {
        task.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.id);  // Aquí pasamos el id correcto
        });
    });

    // Permitir que las columnas acepten los elementos arrastrados con el evento dragover
    // El e.preventDefault() es necesario para que el evento 'drop' sea activado en la columna
    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necesario para permitir que el drop sea realizado en esta columna
        });

        // El evento drop es donde realmente se mueve la tarea
        // Recuperamos el id de la tarea que se esta arrastrando y la insertamos en la columna correspondiente
        column.addEventListener('drop', (e) => { // Cuando se sueltan los datos arrastrados, se produce un evento de caída "drop"
            e.preventDefault();
            const taskId = e.dataTransfer.getData('text');
            const task = document.getElementById(taskId);

            if (!task) return; // Si no encontramos el task, salimos de la funcion

            // Solo movemos la tarea a la columna si no esta ya alli
            if (task.parentNode !== column) {
                column.appendChild(task); // Añadimos el task a la nueva columna
            }

            // Cambiar el borde del task dependiendo de la columna en la que se dejo caer
            switch (column.id) {
                case 'column1':
                    task.style.border = '2px solid #f2f2f2';
                    break;
                case 'column2':
                    task.style.border = '2px solid #ffd700';
                    break;
                case 'column3':
                    task.style.border = '2px solid #187349';
                    break;
            }
        });
    });
})