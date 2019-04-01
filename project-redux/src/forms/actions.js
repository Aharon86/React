export function newData(name, surname){
    return {
        type: 'GET_DATA',
        name,
        surname
    }
}