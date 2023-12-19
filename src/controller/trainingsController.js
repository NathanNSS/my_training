import { trainings, setTrainings, getTrainings } from '../model/trainings.js';
import { repo_deleteTraining, repo_getTrainings, repo_saveCreateTraining } from '../repositories/index.js';

import { checkExistenceData } from '../utils/index.js';

import { renderTableExercise } from '../view/renderExerciseTable.js';
import { onCreationTraining, onUpdateTraining } from '../view/trainingsView.js';

export function getAllTrainings() {
    return repo_getTrainings();
}

export async function getTrainingByID(id) {
    const trainings = await repo_getTrainings()

    return trainings.find(training => training.id === id)
}

export function getExerciseByID(trainingId, exerciseId) {
    const training = getTrainingByID(trainingId)
    return training.exercises.filter(exercise => exercise.id === exerciseId);
}

export async function createTraining() {
    try {

        let exercises = []

        const trainingData = await onCreationTraining()

        trainingData.exercises.forEach(item => {
            exercises.push({
                id: crypto.randomUUID(),
                name: checkExistenceData(item.name, 'string', 'name'),
                sets: checkExistenceData(item.sets, 'string', 'sets'),
                rep: checkExistenceData(item.rep, 'string', 'rep'),
                car_vel: item.car_vel ?? '?',
                rest: item.rest ?? '?',
            })
        })

        const training = {
            id: crypto.randomUUID(),
            name: checkExistenceData(trainingData.name, 'string', 'name'),
            exercises: exercises
        }

        console.log(trainingData)

        repo_saveCreateTraining(training)
        renderTableExercise(getTrainings());

    } catch (error) {
        console.log(error)
    }
}

export async function updateTraining(trainingId) {
    try {

        let training = await getTrainingByID(trainingId)

        const updateObject = await onUpdateTraining(training)
        
        const newExercise = []
        
        updateObject.exercises.forEach(exercise => {
            console.log(exercise.rest)
            console.log(exercise.car_vel)
            newExercise.push({
                id: exercise.id,
                name: checkExistenceData(exercise.name, 'string', 'name'),
                sets: checkExistenceData(exercise.sets, 'string', 'sets'),
                rep: checkExistenceData(exercise.rep, 'string', 'rep'),
                car_vel: exercise.car_vel ?? '?',
                rest: exercise.rest ?? '?',
            })
        });


        const newTraining = {
            id: training.id,
            name: updateObject.name,
            exercises: newExercise
        }
        

        //Altera valor da variavel global
        const indexArr = trainings.findIndex(item => item.id === trainingId)
        if (indexArr < 0) throw new Error("Error ao salvar valor")
        trainings[indexArr] = newTraining

        console.log(trainings)
        renderTableExercise(trainings)
        return newTraining;
    } catch (error) {
        console.log(error)
    }
}

export function updateExercise(trainingId, exerciseId, updateObject) {
    const exercise = getExerciseByID(trainingId, exerciseId)
}

export async function deleteTraining(trainingId) {
    let training = await getTrainingByID(trainingId)

    try {
        let response = window.confirm(`Você deseja excluir a tabela de ${training.name} \n${training.exercises.map(exerc => `> ${exerc.name}`).join("\n")}`)

        if (response) {
            let newTrainings = trainings.filter(training => training.id !== trainingId)

            repo_deleteTraining(newTrainings, trainingId)
              .then(res => renderTableExercise(newTrainings))
                
        }
    } catch (error) {
        console.log(error)
    }
}

export function trainingPrint(selector = ".trainings") {
    const $trainings = document.querySelector(selector);

    let cloned = $trainings.cloneNode(true);
    document.body.appendChild(cloned);
    // cloned.removeAttribute("class")
    // cloned.removeAttribute("style")
    cloned.classList.add("printable");
    window.print();
    document.body.removeChild(cloned);
}