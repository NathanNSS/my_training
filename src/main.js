import { onAppStart } from './controller/onAppStart.js'

import { createTraining, trainingPrint } from './controller/trainingsController.js'


var trainings = {
    id: "617e17e7-0e67-4d75-a843-77e3a84750a9",
    name: "Treino de Costa",
    exercises: [
        {
            id: "c0ccb638-9b3c-44de-adc1-2e6750c12f4c",
            name: "Remada Neutra",
            sets: 4,
            rep: 12,
            car_vel: undefined,//null
            rest: "60s",//null
        },
        {
            id: "c0ccb638-9b3c-44de-adc1-2e6750c12f5d",
            name: "Puxada alta triangulo",
            sets: 4,
            rep: 10,
            car_vel: undefined,//null
            rest: "60s",//null
        }
    ]
}

document.addEventListener("DOMContentLoaded", onAppStart)

const $btnCreateTraining = document.querySelector("[name='training_create']")

const $btnPrintTrainings = document.querySelector("[name='training_print']")

$btnCreateTraining.addEventListener("click", createTraining)

$btnPrintTrainings.addEventListener("click", () => trainingPrint())


//console.log(updateTraining('617e17e7-0e67-4d75-a843-77e3a84750a9', trainings));