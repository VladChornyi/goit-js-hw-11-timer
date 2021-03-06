import './sass/main.scss';

interface Timer {
  selector: string;
  targetDate: any
}

function pad(value: string | number) {
  return String(value).padStart(2, '0');
}
class CountdownTimer {
  public selector: string;
  public intervalId: NodeJS.Timer;
  public targetDate:  number ;
  constructor({ selector, targetDate }: Timer) {
    this.selector = selector;
    this.intervalId = null;
    this.targetDate = targetDate;
  }
  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      const days : number | string = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours: number | string  = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins: number | string  = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs: number | string  = pad(Math.floor((time % (1000 * 60)) / 1000));
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
// # ???????????? ?????????????????? ??????????????

// ???????????? ???????????? ???????????????????????????? ??????????????, ?????????????? ?????????? ???????????????? ???????????? ????
// ???????????????????????????? ???????????????????????? ????????. ?????????? ???????????? ?????????? ???????????????????????????? ?? ???????????? ??
// ????????????????-??????????????????, ?????????????????? ?????????????????????? ??????????????, ???? ?????????? ????????????????????????
// ???????????????????????? ?? ??. ??.

// ![preview](preview.gif)

// ???????????? ?????????????? ?????????????????? HTML-???????????????? ?? ???????????????????? ???????????? ??????????: ??????, ????????,
// ???????????? ?? ?????????????? ?? ?????????????? `XX:XX:XX:XX`. ???????????????????? ???????? ?????????? ???????????????? ????
// ?????????? ?????? ???????? ????????.

// ???????????? ?????? ?????????? `CountdownTimer`, ?????????????????? ???????????????? ?????????????? ?????????? ???????????? ??
// ??????????????????????.

// countdownTimer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
// countdownTimer.start();
// ?????? ???????????????? ???????????????? ?????????????????? ?????????????????? ?????????????? ??????????????, ?????? `time` - ??????????????
// ?????????? `targetDate` ?? ?????????????? ??????????.

/*
 * ???????????????????? ??????: ?????????? ???????????????? UTC ???? 1000 * 60 * 60 * 24, ????????????????????
 * ?????????????????????? ?? ?????????? ?????? (???????????????????????? * ?????????????? * ???????????? * ????????)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * ???????????????????? ????????: ???????????????? ?????????????? ???? ?????????????????????? ?????????????? ?? ?????????????? ??????????????????
 * ?????????????? % ?? ?????????? ?????? ???? ???????????????????? ?????????????????????? ?? ?????????? ????????
 * (1000 * 60 * 60 = ???????????????????????? * ???????????? * ??????????????)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * ???????????????????? ????????????: ???????????????? ???????????????????? ???????????? ?? ?????????? ???? ???? ????????????????????
 * ?????????????????????? ?? ?????????? ???????????? (1000 * 60 = ???????????????????????? * ??????????????)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * ???????????????????? ??????????????: ???????????????? ???????????????????? ?????????????? ?? ?????????? ???? ???? ????????????????????
 * ?????????????????????? ?? ?????????? ?????????????? (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
