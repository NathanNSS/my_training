
import { undefined_value_client } from '../utils/index.js';
import { trackingBtnDeletionTables, trackingBtnEditTables, trackingBtnPrintTables } from './trainingsView.js';


const createTemplateTrainings = (training) => {
    return (`
    <div class="training__container" data-trainigid="${undefined_value_client(training.id)}">
        <span class="training__name">
            ${undefined_value_client(training.name)}
        </span>
        <div class="table__container" data-trainigid="${training.id}">
            <table class="training__table">
                <thead class="table__head">
                    <tr>
                        <th class="not">Nome</th>
                        <th>Serie</th>
                        <th>Repetição</th>
                        <th>CAR/VEL</th>
                        <th>Descanso</th>
                    </tr>
                </thead>
                <tbody class="table__body">
                    ${createTemplateExercises(training.exercises)}
                </tbody>
            </table>
            <div class="table__actions__container">
                <button type="button" name="edit_table">Editar</button>
                <button type="button" name="delete_table">Excluir</button>
                <button type="button" name="print_table">Imprimir</button>
            </div>
        </div>
    </div>
`)
}

const createTemplateExercises = (obj) => {
    return obj.map(element => `
        <tr>
            <td class="not">${undefined_value_client(element.name)}</td>
            <td>${undefined_value_client(element.sets)}</td>
            <td>${undefined_value_client(element.rep)}</td>
            <td>${undefined_value_client(element.car_vel)}</td>
            <td>${undefined_value_client(element.rest)}</td>
            
        </tr>
        `
    ).join("")
}

export function renderTableExercise(trainings) {
    try {
        const $tranings = document.querySelector(".trainings")

        console.log(trainings)

        const template = trainings.map(element => createTemplateTrainings(element)).join("")

        $tranings.innerHTML = template

        trackingBtnPrintTables();
        trackingBtnDeletionTables();
        trackingBtnEditTables();

    } catch (error) {
        console.log(error)
    }
}

