// import { state } from './state';

// export function animateCar(id: number) {
//   const track = document.getElementById('track') as HTMLDivElement;
//   const car = document.getElementById(`car-${id}`) as unknown as SVGSVGElement;
//   const chars = state.getCharsByCarId(id);
//   const duration = chars.distance / chars.velocity;
//   const distance = track.clientWidth - car.clientWidth - 28;
//   console.log(track.clientWidth);
//   console.log(car.clientWidth);
//   const start = performance.now();
//   let carId = id;
//   function draw(progress: number): void {
//     car.style.transform = `translateX(${progress * distance}px)`;
//   }
//   const timing = (timeFraction: number) => timeFraction;
//   const animate = (time: number): void => {
//     let timeFraction = (time - start) / duration;
//     if (timeFraction > 1) timeFraction = 1;
//     const progress = timing(timeFraction);
//     draw(progress);
//     if (timeFraction < 1) {
//       carId = requestAnimationFrame(animate);
//     }
//   };
//   carId = requestAnimationFrame(animate);
//   console.log(carId);
// }

// export function stopAnimateCar(carId: number) {
//   console.log(carId);
//   cancelAnimationFrame(carId);
// }

// export function resetCar(id: number) {
//   const car = document.getElementById(`car-${id}`) as unknown as SVGSVGElement;
//   car.style.transform = 'translateX(0px)';
// }
