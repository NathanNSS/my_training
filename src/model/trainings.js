
export var trainings = [
    {
        id: "617e17e7-0e67-4d75-a843-77e3a84750a9",
        name: "Treino de Peito",
        exercises: [
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12f4c",
                name: "Cross Over Polia Baixa",
                sets: 4,
                rep: 10,
                car_vel: "?",//null
                rest: "60s",//null
            },
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12f4d",
                name: "Supino Declinado",
                sets: 4,
                rep: 10,
                car_vel: "?",//null
                rest: "60s",//null
            },
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12f4e",
                name: "Desenv Arnod + Encolhimento Halter",
                sets: 4,
                rep: 10,
                car_vel: "?",//null
                rest: "60s",//null
            },
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12f4f",
                name: "triceps testa",
                sets: 3,
                rep: 12,
                car_vel: "?",//null
                rest: "60s",//null
            },
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12f4g",
                name: "triceps testa uni halter",
                sets: 3,
                rep: 12,
                car_vel: "?",//null
                rest: "60s",//null
            },
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12f4h",
                name: "triceps",
                sets: 3,
                rep: 10,
                car_vel: "?",//null
                rest: "60s",//null
            },
        ]
    },
    {
        id: "617e17e7-0e67-4d75-a843-77e3a84751a9",
        name: "Treino de Perna",
        exercises: [
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12gh2",
                name: "SQUAT",
                sets: 4,
                rep: 10,
                car_vel: "?",//null
                rest: "60s",//null
            },
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12gh3",
                name: "agachamento com barra livre",
                sets: 4,
                rep: 10,
                car_vel: "?",//null
                rest: "60s",//null
            },
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12gh4",
                name: "Cadeira flexora (pico)",
                sets: 4,
                rep: 10,
                car_vel: "?",//null
                rest: "60s",//null
            },
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12gh5",
                name: "STIFF",
                sets: 4,
                rep: 10,
                car_vel: "?",//null
                rest: "60s",//null
            },
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12gh6",
                name: "levantamento terra sumô",
                sets: 4,
                rep: 10,
                car_vel: "?",//null
                rest: "60s",//null
            },
            {
                id: "c0ccb638-9b3c-44de-adc1-2e6750c12gh7",
                name: "panturrilha maquina",
                sets: 4,
                rep: 10,
                car_vel: "?",//null
                rest: "60s",//null
            },

        ]
    },
]


export function getTrainings(){
    return trainings
}

export function setTrainings(newTrainings){
    trainings = newTrainings
}
