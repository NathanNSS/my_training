export function checkExistenceData(value,  dataType, propertyName) {

    if (!value)
        throw new Error("valor inexistente em " + propertyName);

    if (typeof value !== dataType)
        throw new Error(`tipo de valor invalido para ${propertyName}, voce esta passando ${typeof value} em vez de ${dataType}`);

    return value;
}

export function undefined_value_client(value){
    return value ?? "?"
}