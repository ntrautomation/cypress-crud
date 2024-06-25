class Main {

    /**
     * 
     * @param element 
     * @param text 
     */
    validateText(element, text: string){
        element.should(`have.text`, text)
    }
}

export {Main}