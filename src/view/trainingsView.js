import { checkExistenceData } from "../utils/index.js";
import { deleteTraining, trainingPrint, updateTraining } from '../controller/trainingsController.js';
import { modal } from "./modal.js";

export async function onCreationTraining() {
    modal.open()

    modal.modalContent(trainingTemplate())

    document.querySelector("[name='add_exercise']").addEventListener("click", addExerciseForm)

    document.querySelectorAll("[name='remover_exercise']").forEach(element => element.addEventListener("click", removerExerciseForm))


    const $form = document.querySelector("[name='form_creating_training']")

    return new Promise((resolve, reject) => {
        $form.addEventListener("submit", (event) => {
            try {
                event.preventDefault()
                const form = new FormData($form)

                let size = form.getAll('name_exercise').length

                const exercise = []

                for (let index = 0; index < size; index++) {
                    exercise.push({
                        name: checkExistenceData(form.getAll('name_exercise')[index], "string", "form_name_exercise"),
                        sets: checkExistenceData(form.getAll('sets')[index], "string", "form_sets_exercise"),
                        rep: checkExistenceData(form.getAll('rep')[index], "string", "form_rep_exercise"),
                        carVel: form.getAll('car_vel')[index],
                        rest: form.getAll('rest')[index]
                    })
                }

                const training = {
                    name: form.get('name_training'),
                    exercises: exercise
                }

                console.log(training)

                modal.close()
                resolve(training)

            } catch (error) {
                reject(error)
                console.log(error)
            }
        })

    })
}

export async function onUpdateTraining(trainingData){
    modal.open()

    const exerciseTemplate =  trainingData.exercises.map(exercise => trainingExerciseTemplate(exercise.id, exercise)).join("")

    modal.modalContent(trainingTemplate(exerciseTemplate, trainingData.name))

    document.querySelector("[name='add_exercise']").addEventListener("click", addExerciseForm)

    document.querySelectorAll("[name='remover_exercise']").forEach(element => element.addEventListener("click", removerExerciseForm))


    const $form = document.querySelector("[name='form_creating_training']")

    return new Promise((resolve, reject) => {
        $form.addEventListener("submit", (event) => {
            try {
                event.preventDefault()
                const form = new FormData($form)

                let size = form.getAll('name_exercise').length

                const exercise = []

                for (let index = 0; index < size; index++) {
                    exercise.push({
                        id: checkExistenceData(form.getAll('id_exercise')[index], "string", "form_id_exercise"),
                        name: checkExistenceData(form.getAll('name_exercise')[index], "string", "form_name_exercise"),
                        sets: checkExistenceData(form.getAll('sets')[index], "string", "form_sets_exercise"),
                        rep: checkExistenceData(form.getAll('rep')[index], "string", "form_rep_exercise"),
                        carVel: form.getAll('car_vel')[index],
                        rest: form.getAll('rest')[index]
                    })
                }

                const training = {
                    name: form.get('name_training'),
                    exercises: exercise
                }


                modal.close()
                resolve(training)

            } catch (error) {
                reject(error)
                console.log(error)
            }
        })

    })
}

const trainingTemplate = (exercise = trainingExerciseTemplate(), name = "") => `
    <form name="form_creating_training">
        <label for="name_training">Nome do Treino</label>
        <input value="${name}" type="text" name="name_training" id="name_training"><br>
        
        ${exercise}

        <button type="button" name="add_exercise"> + </button>
        <button type="submit">Cadastrar</button>
    </form>
`

const trainingExerciseTemplate = (groupid = crypto.randomUUID(), exerciseData) => `
    <div class="groupExercise" data-groupid="${groupid}">
        <br>
        <hr>
        <br>

        <button type="button" name="remover_exercise"> - </button>
        <input value='${exerciseData?.id ?? groupid}' type="hidden" name="id_exercise" id="id_exercise"><br>
        <label for="name_exercise">Nome do Exercício</label>
        <input value='${exerciseData?.name ?? ""}' type="text" name="name_exercise" id="name_exercise"><br>

        <label for="sets">Quantidade de Série</label>
        <input value='${exerciseData?.sets ?? ""}' type="text" name="sets" id="sets"><br>

        <label for="rep">Quantidade de Repetição</label>
        <input value='${exerciseData?.rep ?? ""}' type="text" name="rep" id="rep"><br>

        <label for="car_vel">Carga ou Velocidade</label>
        <input value='${exerciseData?.carVel ?? ""}' type="text" name="car_vel" id="car_vel"><br>

        <label for="rest">Descanso</label>
        <input value='${exerciseData?.rest ?? ""}' type="text" name="rest" id="rest"><br>
    </div>    
`

function addExerciseForm() {
    const $groupExercise = document.querySelectorAll(".groupExercise")
    let groupSize = $groupExercise.length

    $groupExercise[groupSize - 1].insertAdjacentHTML("afterend", trainingExerciseTemplate())

    trackingBtnRemoverExercise()
}

function trackingBtnRemoverExercise() {
    document.querySelectorAll("[name='remover_exercise']").forEach(element => element.addEventListener("click", removerExerciseForm))
}

function removerExerciseForm(groupExercise) {
    groupExercise.target.parentNode.remove()
}

export function trackingBtnPrintTables() {
    //Tracking btn print table to all traings tables
    const $btnPrintTraining = document.querySelectorAll("[name='print_table']")
    $btnPrintTraining.forEach(element => element.addEventListener("click", (event) => {
        const tableID = event.target.parentNode.parentNode.dataset.trainigid
        trainingPrint(`[data-trainigid="${tableID}"]`)
    }))
}

export function trackingBtnDeletionTables() {
    const $btnDeleteTraining = document.querySelectorAll("[name='delete_table']")
    $btnDeleteTraining.forEach(element => element.addEventListener("click", (event) => {
        const tableID = event.target.parentNode.parentNode.dataset.trainigid
        deleteTraining(tableID)
    }))
}

export function trackingBtnEditTables() {
    const $btnEditTraining = document.querySelectorAll("[name='edit_table']")
    $btnEditTraining.forEach(element => element.addEventListener("click", (event) => {
        const tableID = event.target.parentNode.parentNode.dataset.trainigid
        updateTraining(tableID)
    }))
}