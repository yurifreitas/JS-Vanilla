

export default async function getAllCaracters(){
    let result = ''
    try{
        
        return fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR')
        .then( async (response) => {
            const responseObject = await response.json()
            return responseObject.data
        })
        .then( data => createListElement(data))
        .then( listElement => listElement)

    }catch{
        throw new Error('Deu TCHUTCHU na API, ASSOPRA A FITA PRA VER SE VAI!');
    }

}

function createListElement (listOfCharacters){
    let result = ''
    listOfCharacters.forEach(element => {
        result += `<li><a><img class="character-icon" src=${element.displayIcon}></a></li>`
    });
    
    return result
}