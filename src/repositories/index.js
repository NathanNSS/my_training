import { trainings, setTrainings, getTrainings } from "../model/trainings.js";

export async function repo_saveCreateTraining(newTraining){
    try {
        trainings.push(newTraining)
        
    } catch (error) {
        console.log(error)
    }finally{
        console.log(trainings)
        saveTrainingsLocalStorage()
    }
}

export function saveTrainingsLocalStorage(){
    localStorage.setItem("@trainings", JSON.stringify(getTrainings()))
}

export function getTrainingsLocalStorage(){
    const localS = localStorage.getItem("@trainings")

    if(!localS) null;//throw new Error("Você não possui treinos salvos no sistema")

    return JSON.parse(localS)
}

export async function repo_getTrainings(){
    try {
        //get train db
        let trainingStorage = getTrainingsLocalStorage()
        
        return trainingStorage
    } catch (error) {
        console.log(error)
    }
}

export async function repo_deleteTraining(newT, idT) {
    try {
        //delete in db
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve()
            }, 2000);

        })

        setTrainings(newT)
    } catch (error) {
        console.log(error)
    }finally{
        saveTrainingsLocalStorage()
    }
}




