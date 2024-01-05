window.addEventListener('load', () => {
  // GSAP를 사용하기 위해서는 gsap객체를 먼저 부른다.
  // gsap.to('대상', { 옵션 });
  gsap.to('.box1', { autoAlpha: 1, x: -200, width: 400, duration: 1, rotation: 360 }); /* transform의 x를 표현한 것이다. px값에는 값이 안붙어도 된다. rotation이 아닌 rotate도 먹는다. */
  gsap.from('.box2', {
    scale: 2,
    y: 100 /* translateY의 약자이다. */,
    delay: 1.5,
    // opacity: 0,
    autoAlpha: 0 /* 토글 같은 역할을 한다. */,
    /* repeat: 2 */ /* 원래동작 + 2 ,*/ repeat: -1 /* infinite */,
    yoyo: true /* alternate */,
    ease: 'power4.inOut',
  });

  // 버튼을 클릭했을 때 초록색박스 (.box3)를 움직이자
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    gsap.fromTo(
      '.box3',
      {
        opacity: 0,
        backgroundColor: '#000',
      },
      {
        opacity: 1,
        backgroundColor: 'green',
        scale: 3,
        duration: 2,
      }
    );
  });

  gsap.from('.wrap2 div', {
    y: -100,
    autoAlpha: 0,
    rotation: 90,
    stagger: 0.3 /* 같은 요소에 적용, delay */,
  });
});
