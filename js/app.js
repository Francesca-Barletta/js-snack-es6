console.log('js-snack-es6')
/*
*SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto
per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) 
e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 
'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole
che le mandiamo una lista di ospiti in un formato specifico, 
per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo,
nome dell’ospite,
posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.
esempio:
{
  nomeTavolo: 'Tavolo VIP',
  nomeOspite: 'Brad Pitt',
  posto: 1
}*/
//snack1
let tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez',
    'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//function vipCard(table, nome, place) {
//    const vip = {
//        nomeTavolo: table,
//        nomeOspite: nome,
//        posto: place
//    }
//    return vip
//}

//let vipList = []
//for (let i = 0; i < tavoloVip.length; i++) {
//    const table = 'Tavolo VIP';
//    const name = tavoloVip[i];
//    const place = i + 1
//    console.log(table, name, place);
//    const persona = vipCard(table, name, place)
//    vipList.push(persona)
//    console.log(persona)
//}
//console.log(vipList);

const vipList = tavoloVip.map((element, i, array) =>{
    const persona = {
        nomeTavolo : 'Tavolo VIP',
        nomeOspite: tavoloVip[i],
        posto: i + 1
    }
    return persona;
})
console.log(vipList);

//const vipList = tavoloVip.map((nomeOspite, i) =>
//vipCard(nomeOspite, i+1)
//return vipList)

/*
Crea un array di oggetti che rappresentano delle persone. 
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.*/











/**SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, 
Nome e somma totale dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, 
dobbiamo stampare le targhe col nome degli studenti:
 creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista 
di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista 
di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l’elenco degli studenti:
Id   Name                    Grades
213  Marco della Rovere      78
110  Paola Cortellessa       96
250  Andrea Mantegna 	      48
145  Gaia Borromini          74
196  Luigi Grimaldello 	  68
102  Piero della Francesca   50
120  Francesca da Polenta    84*/

function createSign(Number, person, vote) {
    const student = {
        id: Number,
        name: person,
        grades: vote
    }
    return student
}
let studentList = []

const marco = createSign(213, 'Marco della Rovere', 78);
const paola = createSign(110, 'Paola Cortellessa', 96);
const andrea = createSign(250, 'Andrea Mantegna', 48);
const gaia = createSign(145, 'Gaia Borromini', 74);
const luigi = createSign(196, 'Luigi Grimaldello', 68);
const piero = createSign(102, 'Piero Della Francesca', 50);
const francesca = createSign(120, 'Francesca Da Polenta', 84);
studentList.push(marco, paola, andrea, gaia, luigi, piero, francesca);
console.log(studentList);
//console.log(marco.name);




//const formattedStudents = []
const formattedStudents = studentList.map ((student) =>{
    const newStudent = {
        id:student.id,
        name:student.name.toUpperCase(),
        grades:student.grades
    }
    return newStudent
})
console.log(formattedStudents)
//for(let i = 0; i < studentList.length; i++){
//    const name = studentList[i].name;
//    const id = studentList[i].id;
//    const grades = studentList[i].grades;
//    const student = {
//        id:id,
//        name:name,
//        grades:grades
//    }
//    formattedStudents.push(student)
//}


//function capitalize(string) {
//    let newName = string.toUpperCase();
//    return newName;
//}
//
//formattedStudents.forEach((element, i) => {
//    const upperName = capitalize(element.name);
//    formattedStudents[i].name = upperName;
//})
//console.log(formattedStudents);

let overSeventy = [];
for (let i = 0; i < formattedStudents.length; i++) {
    const student = formattedStudents[i]
    //console.log(singleStudent);
    if (student.grades > 70) {
        overSeventy.push(student);
    }
} console.log(overSeventy);
const seventyAndId = overSeventy.filter((element, i, array) =>{
    const student = overSeventy[i];
    if(student.id > 120){
        return true
    }
});
console.log(seventyAndId);
//VERSIONE CORTA
//const overSeventy = formattedStudents.filter((student) => student.grades > 70)
//const seventyAndId = overSeventy.filter((student) => student.id > 120)

/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal*/
const bicilette = [
    {
        nome:'bianchi',
        pesoKg: 7
    },
    {
        nome:'cannondale',
        pesoKg: 6
    },
    {
        nome:'fondriest',
        pesoKg: 9
    },
    {
        nome:'de rosa',
        pesoKg: 8
    },
    {
        nome:'atala',
        pesoKg: 10
    },
    {
        nome:'moser',
        pesoKg: 5
    }
]
console.log(bicilette);

//creo un array contenente solo i valori di pesoKg
const pesoBiciclette = bicilette.map((element, i , array) => {
    const peso = element.pesoKg
    return peso
})
console.log(pesoBiciclette);
// mi ritorna come primo numero dell'array il numero più piccolo
pesoBiciclette.sort(comparaBici);
console.log(pesoBiciclette);
const biciPiuLeggera = pesoBiciclette[0]
console.log(biciPiuLeggera)//5kg


bicilette.forEach((element, i , array) =>{
    const bici = bicilette[i];
    const {nome, pesoKg} = bici;
    //console.log(bici);
    //console.log(biciPiuLeggera);
    //console.log(bici.pesoKg)
    if(bici.pesoKg === biciPiuLeggera){
        console.log(`la bicletta da corsa marca ${nome} pesa kg ${pesoKg} ed è la più leggera`)
    }
})

//funzione che compara i pesi
function comparaBici (a, b){
    return a - b;
}




/*
SNACK 4
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/
