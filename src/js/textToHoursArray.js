import dayjs from "dayjs";

const customParseFormat = require('dayjs/plugin/customParseFormat');
const x = dayjs.extend(customParseFormat);

//функція отримує рядок, а повертає масив значень
export function textToHoursArray(on, maybe) {
    const arrayHoursBuffer = hoursArray(on);
    const arrayHoursMaybeBuffer = hoursArray(maybe);
    const arrayHours = [];

    //заповнюємо масив значень вкл, викл або можливо
    for (let i = 0; i < 24; i++) {
        if (arrayHoursBuffer.includes(i)) {
            arrayHours.push(1);
        } else {
            arrayHours.push(2);
        }

        if (arrayHoursMaybeBuffer.includes(i)) {
            arrayHours[i] = 3;
        }
    }

    return arrayHours;
}


//функція повертає масив годин
function hoursArray(text) {
    const regex = /(\d{2}:\d{2})[\sA-Za-zА-Яа-я]*(\d{2}:\d{2})/g;
    const arrayHoursBuffer = [];

    //отримаємо кількість груп годин
    let countHoursGroup = 0;
    while (match = regex.exec(text)) {
        countHoursGroup += 1;
    }

    for (let i = 0; i < countHoursGroup; i++) {
        match = regex.exec(text);

        //часи початку діапазона
        const timeOne = match[1];
        const houreOne = dayjs(timeOne, 'hh:mm').hour();
        const minutesOne = dayjs(timeOne, 'hh:mm').minute(); 
        
        //часи кінця діапазона
        const timeTwo = match[2];
        let houreTwo = dayjs(timeTwo, 'hh:mm').hour();
        const minutesTwo = dayjs(timeTwo, 'hh:mm').minute(); 

        //якщо остання година = 00, тобто кінець групи годин
        if ((i === countHoursGroup - 1) && (houreTwo === 0)) {
            houreTwo = 24;
        }

        //якщо є діапазон більше ніж 2 години, то додаємо проміжні значення
        if ((houreTwo - houreOne) > 2) {
            for (let i = houreOne; i < houreTwo; i++) {
                arrayHoursBuffer.push(i);
            }
        } else {
            arrayHoursBuffer.push(houreOne, houreTwo - 1);
        }
    }
    return arrayHoursBuffer;
}