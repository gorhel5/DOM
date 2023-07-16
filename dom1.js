const newDate = new Date ();
const NewYearDate = new Date(newDate.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
const timeDifference = Math.floor((NewYearDate.getTime() - newDate.getTime()) / (1000 * 60 * 60 * 24));
const timeDifference1 = Math.floor((NewYearDate.getTime() - newDate.getTime()) % (1000 * 60 * 60 * 24));
const timeDifferenceHours = Math.floor((timeDifference1) / (1000 * 60 * 60));


const currentDateEl = document.querySelector('.current-date span');
const NewYearDateEl = document.querySelector('.new-year span');
const NewYearDateHoursEl = document.querySelector('.new-year');
const NewYearSpanEl = document.createElement('span');

currentDateEl.innerText = newDate.toString();
NewYearDateEl.innerText = `${timeDifference} days `;
NewYearSpanEl.innerText = `${timeDifferenceHours} hours`;
NewYearDateHoursEl.append( NewYearSpanEl );
