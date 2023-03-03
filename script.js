

var ISRO_spacecrafts_Api = 'https://isro.vercel.app/api/spacecrafts';

function SpaceCrafts_information(){
    return new Promise((resolve, reject) => {
        fetch(ISRO_spacecrafts_Api)
        .then(response => response.json())
        .then(SpaceCrafts_data => resolve(SpaceCrafts_data))
        .catch(error => reject(error))
    })
}
SpaceCrafts_information()
.then(SpaceCrafts_data =>{
    console.log(SpaceCrafts_data.spacecrafts);
    for(let i of SpaceCrafts_data.spacecrafts){
        console.log(`name : ${i.name}`);
    }
    
})
.catch(error =>{
    console.log(error);
})