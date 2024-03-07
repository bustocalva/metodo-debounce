export default function debounce(funcion: Function, delay: number) {
  let timerID: any;
  return (...args: any[]) => {
    clearTimeout(timerID);

    timerID = setTimeout(() => {
      funcion(...args);
    }, delay);
  };
}
