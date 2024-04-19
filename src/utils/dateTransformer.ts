export const dateTransformer = (incomigDate: string) => {

const date = new Date(incomigDate);

const monthNames = [
  'янв', 'фев', 'мар', 'апр', 'мая', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
const dayNames = [
  'Вc', 'Пн', 'Вт', 'Ср',
  'Чт', 'Пт', 'Сб'
];

const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const weekDay = date.getDay();

const formattedDate = `${day} ${monthNames[month]} ${year}, ${dayNames[weekDay]}`;

return formattedDate;
}