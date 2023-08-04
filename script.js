const img01 = document.getElementById('img01');
const img02 = document.getElementById('img02');
const btn = document.getElementById('btn');
const container = document.getElementById('container');

const texto = document.getElementById('textDiv');

const hora1 = document.getElementById('hora1');
const hora2 = document.getElementById('hora2');
const hora3 = document.getElementById('hora3');
const hora4 = document.getElementById('hora4');
const hora5 = document.getElementById('hora5');
const hora6 = document.getElementById('hora6');
const hora7 = document.getElementById('hora7');
const hora8 = document.getElementById('hora8');
const hora9 = document.getElementById('hora9');
const hora10 = document.getElementById('hora10');
const hora11 = document.getElementById('hora11');
const hora12 = document.getElementById('hora12');
const hora13 = document.getElementById('hora13');
const hora14 = document.getElementById('hora14');
const hora15 = document.getElementById('hora15');
const hora16 = document.getElementById('hora16');



const mult01 = document.getElementById('mult01');
const mult02 = document.getElementById('mult02');
const mult03 = document.getElementById('mult03');
const mult04 = document.getElementById('mult04');
const mult05 = document.getElementById('mult05');
const mult06 = document.getElementById('mult06');
const mult07 = document.getElementById('mult07');
const mult08 = document.getElementById('mult08');
const mult09 = document.getElementById('mult09');
const mult10 = document.getElementById('mult10');
const mult11 = document.getElementById('mult11');
const mult12 = document.getElementById('mult12');
const mult13 = document.getElementById('mult13');
const mult14 = document.getElementById('mult14');
const mult15 = document.getElementById('mult15');
const mult16 = document.getElementById('mult16');


const price = document.getElementById('price');
const price2 = document.getElementById('price2');
const price3 = document.getElementById('price3');
const price4 = document.getElementById('price4');
const price5 = document.getElementById('price5');
const price6 = document.getElementById('price6');
const price7 = document.getElementById('price7');
const price8 = document.getElementById('price8');
const price9 = document.getElementById('price9');
const price10 = document.getElementById('price10');
const price11 = document.getElementById('price11');
const price12 = document.getElementById('price12');
const price13 = document.getElementById('price13');
const price14 = document.getElementById('price14');
const price15 = document.getElementById('price15');
const price16 = document.getElementById('price16');

const prices = [
    price,
    price2,
    price3,
    price4,
    price5,
    price6,
    price7,
    price8,
    price9,
    price10,
    price11,
    price12,
    price13,
    price14,
    price15,
    price16,
]


const mults = [
    mult01,
    mult02,
    mult03,
    mult04,
    mult05,
    mult06,
    mult07,
    mult08,
    mult09,
    mult10,
    mult11,
    mult12,
    mult13,
    mult14,
    mult15,
    mult16,
];

const horas = [
    hora1,
    hora2,
    hora3,
    hora4,
    hora5,
    hora6,
    hora7,
    hora8,
    hora9,
    hora10,
    hora11,
    hora12,
    hora13,
    hora14,
    hora15,
    hora16,
];



let horasAleatorias = horas
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

function getRandomTime(min, max){
    let hora = (Math.random() * (max - min + 1) + min);
    let result = (Math.floor(hora));
    return result;
}

function getRandomPrice(min, max){
    let prices = (Math.random() * (max - min - 1) + min);
    let result = (Math.floor(prices));
    return result;
}
function getRandomMult(min, max){
    let mults = (Math.random() * (max - min -1) + min);
    let result = (Math.floor(mults));
    return result;
}


function updateTime() {
    let time = dayjs();
    let newHora = time.add(getRandomTime(0, 30), 'm');
    return (newHora.format("HH:mm"));
}



btn.addEventListener('click', (e) => {
    img01.style.display = 'none';
    img02.style.display = 'block';
    if( img01.style.display === 'none'){
        setTimeout(() =>{
            texto.style.display = 'flex';
            img01.style.display = 'block';
            img02.style.display = 'none';
            container.style.display = 'grid';
            btn.disabled = true;
        }, 3000);

    }


    btn.disabled = true;
    e.preventDefault();
    horasAleatorias.forEach((hora) => hora.innerHTML = updateTime() + ` RS${getRandomPrice(1, 5)}.00 ${getRandomMult(1, 6)}X`);
});

