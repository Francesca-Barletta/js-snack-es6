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

function vipCard(table, nome, place) {
    const vip = {
        nomeTavolo: table,
        nomeOspite: nome,
        posto: place
    }
    return vip
}
let tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez',
    'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
let vipList = []
for (let i = 0; i < tavoloVip.length; i++) {
    const table = 'Tavolo VIP';
    const name = tavoloVip[i];
    const place = i
    console.log(table, name, place);
    const persona = vipCard(table, name, place)
    vipList.push(persona)
    console.log(persona)
}
console.log(vipList);








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


function capitalize(string) {
    let newName = string.toUpperCase();
    return newName;
}

studentList.forEach((element, i) => {
    const upperName = capitalize(element.name);
    studentList[i].name = upperName;
})
//console.log(studentList);

let overSeventy = [];
for (let i = 0; i < studentList.length; i++) {
    const singleStudent = studentList[i]
    //console.log(singleStudent);
    if (singleStudent.grades > 70) {
        overSeventy.push(singleStudent);
    }
} console.log(overSeventy);
const seventyAndId = overSeventy.filter((element, i, array) =>{
    const singleStudent = overSeventy[i];
    if(singleStudent.id > 120){
        return true
    }
});
console.log(seventyAndId);