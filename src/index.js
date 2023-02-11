import { blackout } from "./js/objectBlackout";
import { textToHoursArray } from "./js/textToHoursArray";

const rowOn = "з 00:00 до 02:00, 04:00 до 07:00, 10:00 до 12:00, 16:00 до 18:00, 21:00 до 00:00 – черги будуть з електропостачанням";
const rowMaybe = "з 02:00 до 04:00, 09:00 до 10:00, 21:00 до 00:00 – можливі вимкнення";



const arrayHours_q_1_1__1_2 = textToHoursArray(rowOn, rowMaybe);
blackout.map((item, i) => {
    item.q_1_1__1_2 = arrayHours_q_1_1__1_2[i];
});





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
