import dayjs from "dayjs";
const customParseFormat = require('dayjs/plugin/customParseFormat');
const x = dayjs.extend(customParseFormat);

const regex = /(\d{2}:\d{2})[\sA-Za-zА-Яа-я]*(\d{2}:\d{2})/g;

const rowOn = "з 00:00 до 02:00, 04:00 до 07:00, 10:00 до 12:00, 16:00 до 18:00, 22:00 до 00:00 – черги будуть з електропостачанням";
const rowOff = "з 01:00 до 03:00, 07:00 до 09:00, з 12:00 до 16:00, з 18:00 до 21:00 - черги будуть вимкнені";
const rowMaybe = "з 03:00 до 04:00, 09:00 до 10:00, 21:00 до 00:00 – можливі вимкнення";

//отримаємо кількість груп годин
let countHoursGroup = 0;
while (match = regex.exec(rowOn)) {
    countHoursGroup += 1;
}

const arrayHoursBuffer = [];
for (let i = 0; i < countHoursGroup; i++) {
    match = regex.exec(rowOn);

    //часи початку діапазона
    const timeOne = match[1];
    const houreOne = dayjs(timeOne, 'hh:mm').hour();
    const minutesOne = dayjs(timeOne, 'hh:mm').minute(); 
    
    //часи кінця діапазона
    const timeTwo = match[2];
    const houreTwo = dayjs(timeTwo, 'hh:mm').hour();
    const minutesTwo = dayjs(timeTwo, 'hh:mm').minute(); 

    console.log("houreOne = ", houreOne, "minutesOne = ", minutesOne);
    console.log("houreTwo = ", houreTwo, "minutesTwo = ", minutesTwo);
    arrayHoursBuffer.push(houreOne, houreTwo);

    //якщо остання година = 00, тобто кінець групи годин
    if ((i === countHoursGroup - 1) && (houreTwo === 0)) {
        console.log("timeDifference = ", 24 - houreOne);
    } else {
        console.log("timeDifference = ", houreTwo - houreOne);
    }
}






console.log(arrayHoursBuffer);

let blackout = [
    { hour: "00", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "01", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "02", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "03", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "04", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "05", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "06", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "07", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "08", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "09", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "10", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "11", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "12", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "13", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "14", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "15", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "16", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "17", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "18", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "19", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "20", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "21", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "22", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
    { hour: "23", q_1_1__1_2: 0, q_1_3__1_4: 0, q_2_1__2_2: 0, q_2_3__2_4: 0, q_3_1__3_2: 0, q_3_3__3_4: 0, q_4_1: 0, q_4_2: 0,},
];

const blackoutTable = document.querySelector(".blackout-table");
const startUpMarkup = `<li class="list-item item-heading">
                <div class="block hours-heading">Година черга</div>
                <div class="block">1.1 1.2</div>
                <div class="block">1.3 1.4</div>
                <div class="block">2.1 2.2</div>
                <div class="block">2.3 2.4</div>
                <div class="block">3.1 3.2</div>
                <div class="block">3.3 3.4</div>
                <div class="block">4.1</div>
                <div class="block">4.2</div>
            </li>`;

let markup = "";

function createMarkup() {
    blackoutTable.innerHTML = startUpMarkup;

    blackout.map((element) => {
      //  console.log(element);

        markup = `<li class="list-item item-clock">
            <div class="block hour hours-heading">${element.hour}</div>
            <div class="block ${blockColor(element.q_1_1__1_2)}></div>
            <div class="block ${blockColor(element.q_1_3__1_4)}></div>
            <div class="block ${blockColor(element.q_2_1__2_2)}></div>
            <div class="block ${blockColor(element.q_2_3__2_4)}></div>
            <div class="block ${blockColor(element.q_3_1__3_2)}></div>
            <div class="block ${blockColor(element.q_3_3__3_4)}></div>
            <div class="block ${blockColor(element.q_4_1)}></div>
            <div class="block ${blockColor(element.q_4_2)}></div>
            </li>`;

        blackoutTable.insertAdjacentHTML("beforeend", markup);

    })
}

function blockColor(color) {
    let markupStyle = "";
    switch (color) {
    case 1: markupStyle = `" style="background-color: #83ff2a;"`; break; //green
    case 2: markupStyle = `" style="background-color: #ff1212;"`; break; //red
    case 3: markupStyle = `" style="background-color: #f7ff0a;"`; break; //yellow
    default: markupStyle = `" style="background-color: #000000;"`; break; //black
    }
    return markupStyle;
}

createMarkup();
