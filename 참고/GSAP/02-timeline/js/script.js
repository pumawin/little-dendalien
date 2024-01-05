window.addEventListener('load', () => {
  // 여러요소를 내가 원하는 시간에 맞게 애니메이션 시키겠다.
  const tl = gsap.timeline();
  // gsap
  //   .timeline()
  tl.from('.box1', { opacity: 0, y: -100 }, 1) /* 숫자1은 1초 후라는 뜻이다. */
    .from('.box2', { opacity: 0, sclae: 2, rotation: 180 }, 0) /* 0은 먼저 시작하라는 뜻이다. */
    .from('.box3', { scale: 1.5, rotation: 90 })
    .from('.box4', { opacity: 0, y: 50, rotation: 180 }, '-=0.5') /* 원래 시간보다 0.5초를 빠르게 */
    .from('.box5', { opacity: 0, x: 100, ease: 'power4.inOut' }, '<'); /* '<'은 이전 애니메이션 시작지점과 같은 시작지점에서 시작하라는 소리이다. */
});
