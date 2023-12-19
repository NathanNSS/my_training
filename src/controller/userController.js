import {userData} from '../model/user.js'

export function getUser(){
    if (!(userData.id && userData.name)) {
        throw new Error("Usuario inexistente!");
    }

    const {id, useName} = userData
    return {id, useName}
}

export function createUser(user_data){
    try {
        userData.id = crypto.randomUUID(),
        userData.useName = user_data.name
    } catch (error) {
        console.log(error)
    }
}

export function updateUser(data){
    userData.useName = data.useName
}