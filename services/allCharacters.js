

export default async function getAllCaracters(){
    let result = ''
    try{
        
        return fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR')
        .then( async (response) => {
            const responseObject = await response.json()
            console.log(responseObject.data);
            return responseObject.data
        })
        .then( data => createListElement(data))
        

    }catch{
        throw new Error('API error');
    }

}

function createListElement (listOfCharacters){
    let result = ''
    listOfCharacters.forEach(element => {
        result += `<li><a><img class="character-icon" src=${element.displayIcon}></a></li>`
    });
    
    return result
}