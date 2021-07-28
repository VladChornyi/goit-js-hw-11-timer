import './sass/main.scss';

function pad(value) {
  return String(value).padStart(2, '0');
}
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.intervalId = null;
    this.targetDate = targetDate;
  }
  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      if (this.targetDate <= currentTime) {
        clearInterval(this.intervalId);
      } else {
        document.querySelector('span[data-value = "days"]').textContent = days;
        document.querySelector('span[data-value = "hours"]').textContent = hours;
        document.querySelector('span[data-value = "mins"]').textContent = mins;
        document.querySelector('span[data-value = "secs"]').textContent = secs;
        console.log(days, hours, mins, secs);
      }
    }, 1000);
  }
}
const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});
countdownTimer.start();
// const CountdownTimer = {
//   intervalId: null,
//   start() {
//     const targetTime = new Date('Jul 28, 2021 15:06:00');
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const time = targetTime - currentTime;
//       const days = Math.floor(time / (1000 * 60 * 60 * 24));
//       const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//       const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//       const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//       if (targetTime <= currentTime) {
//         clearInterval(this.intervalId);
//       } else {
//         console.log(days, hours, mins, secs);
//       }
//     }, 1000);
//   },
// };
// CountdownTimer.start();
// # Таймер обратного отсчета

// Создай плагин настраиваемого таймера, который ведет обратный отсчет до
// предварительно определенной даты. Такой плагин может использоваться в блогах и
// интернет-магазинах, страницах регистрации событий, во время технического
// обслуживания и т. д.

// ![preview](preview.gif)

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы,
// минуты и секунды в формате `XX:XX:XX:XX`. Количество дней может состоять из
// более чем двух цифр.

// Плагин это класс `CountdownTimer`, экземпляр которого создает новый таймер с
// настройками.

// countdownTimer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
// countdownTimer.start();
// Для подсчета значений используй следующие готовые формулы, где `time` - разница
// между `targetDate` и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
