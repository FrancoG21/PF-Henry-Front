import moment from 'moment'


const hoy = moment().format('DD/MM/YYYY');

console.log(hoy)




const a = ['lost', 'transit']

const name = 'coco'


const res =  {
    name: name, 
    state: 'skere' /* ['lost', 'transit'] */
}

const skere = (data) =>{

    for(let prop in res){
    return `${res[prop]} `
}
}

console.log(skere(res))

