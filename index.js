
            //de esta forma llamamos al id deadline y lo delacaramos con const porque siempre va a ser la misma referencia, por eso no necesitamos poner ni let ni var
const task_description = document.querySelector('#task'); 
const task_deadline = document.querySelector('#deadline');
const task_status = document.querySelector('#status');
const btn = document.querySelector('#btn');

const tasks_section = document.querySelector('#tasks')
const tasks = []; 

            //para llamar al evento uso addEvent y dentro de los parentesis pongolos argumentos
btn.addEventListener('click', function () { 
    
            //creamos una nueva etiqueta article para html
        const task = document.createElement('article');
    
            //De esta manera le agrego una clase al article
        task.setAttribute('class', 'task');

            //A esa etiqueta article le voy a agregar html; comillas invertidas permiten escribir texto html y js sin estar poniendo el + y todo eso....
        task.innerHTML = `
        <h4>${task_description.value}</h4>
        <p>${task_deadline.value}</p>
        <p>${task_status.value}</p>`;

            //Una vez que agrego el hml, agarro la seccion y le agrego como hijo ese articulo
        tasks_section.appendChild(task);

            //Esto es para resetear el form y los datos se borren del input una vez dado el click accion.
        task_description.value = "";
        task_deadline.value = "";
        task_status.value = "";
    
});     