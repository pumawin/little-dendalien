window.addEventListener('load', () => {
  const tl = gsap.timeline();
  tl.from('.home-content h1', { y: -100, autoAlpha: 0 });
  tl.to('.middle-line', { autoAlpha: 1, height: 200 }, '-=.3');
  tl.from('.grape', { y: -100, autoAlpha: 0, delay: 0.5 });
  tl.from('.home-content button', { y: -100, autoAlpha: 0 }, '-=.3');

  tl.from('.container-nav a', { y: -50, autoAlpha: 0, stagger: 0.2 }); /* hidden을 사용했기 때문에 stagger을 주면  딜레이를 줄 수 있다. */
  tl.from('nav img:first-child', { autoAlpha: 0, rotation: 90, y: -50 }, '<');
  tl.from(
    'nav img:last-child',
    {
      autoAlpha: 0,
      rotation: 90,
      y: -50,
      /* 애니메이션이 종료된 후에 할 동작 */ onComplete: () => {
        gsap.to('.grape', { rotation: 360, ease: 'power4.inOut' });
        Splitting(); /* 글자를 쪼개주는 용도이다. */
      },
    },
    '<'
  );
});
