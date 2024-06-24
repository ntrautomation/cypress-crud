class Readers {
    readFromJSON(data){
        const obj = JSON.stringify(data);
        return JSON.parse(obj)
    }
}

export const Reader = new Readers();