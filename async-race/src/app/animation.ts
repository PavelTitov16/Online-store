import { state } from './state';

export function animateCar(id: number) {
  console.log('star drive');
  const car = document.getElementById(`car-${id}`) as unknown as SVGSVGElement;
  const chars = state.getCharsByCarId(id);
  const duration = chars.distance / chars.velocity;
  const start = performance.now();
  let carId = id;
  function draw(progress: number): void {
    car.style.transform = `translateX(${progress * chars.distance}px)`;
    console.log('draw');
  }
  const timing = (timeFraction: number) => timeFraction;
  const animate = (time: number): void => {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timing(timeFraction);
    draw(progress);
    if (timeFraction < 1) {
      carId = requestAnimationFrame(animate);
      console.log('shut up and drive car');
    }
  };
  carId = requestAnimationFrame(animate);
  console.log('drive car');
}

export function stopCar(id: number) {
  cancelAnimationFrame(id);
  console.log('stop car');
}

//   public async raceCar(id: number): Promise<EngineStatus> {
//     return this.startCar(id).then(async (response: EngineResponse) => {
//       state.setCarChars(id, response);
//       return this.driveCar(id);
//     }).then((response: EngineStatus) => {

//       return response;
//     });
//   }
