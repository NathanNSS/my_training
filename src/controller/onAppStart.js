
import { renderTableExercise } from '../view/renderExerciseTable.js';
import { getAllTrainings } from './trainingsController.js';
import { getUser } from './userController.js';

export async function onAppStart(){

    const training = await getAllTrainings()
    console.log(training)
    renderTableExercise(training)
    
}