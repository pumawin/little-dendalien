$(function () {
  // 대상을 변수에 저장
  const $btnMenu = $('.btn-menu');
  const $Menu = $('.menu-wrap');
  const $dim = $('.dim');

  // flag : 아직 활성화되지 않음
  let isActive = false;

  // 햄버거 버튼을 클릭했을 때
  $btnMenu.on('click', function (e) {
    e.preventDefault();

    // $menu가 보여지게 : isActive 조건에 따라서
    !isActive ? openMenu() : closeMenu();
  });
  // $dim을 클릭했을 때
  $dim.on('click', closeMenu);

  // 공통의 동작을 함수로 정의

  // 1. 메뉴의 움직임 (보이거나 숨기거나)
  function slideMenu(pos) {
    $Menu.stop().animate(
      {
        left: pos,
      },
      350
    );
  }

  // 2. openMenu : 메뉴를 보이게(메뉴, active, dim fadein, isActive)
  function openMenu() {
    $btnMenu.addClass('active');
    $dim.stop().fadeIn();
    slideMenu(0);
    isActive = true;
  }
  // 3. closeMenu : 메뉴를 안 보이게 (메뉴, active삭제, dim fadeOut)
  function closeMenu() {
    $btnMenu.removeClass('active');
    $dim.stop().fadeOut();
    slideMenu('-100%');
    isActive = false;

    // 서브메뉴 초기화
    initSubmenu();
  }

  // 서브메뉴 동작
  const $menuList = $('.menu > li');
  const $submenu = $('.submenu');

  $menuList.on('dbclick', initSubmenu);

  $menuList.on('click', function (e) {
    e.preventDefault(); /* 기본동작 막기 a가 가진 다른 링크로 가는 기능을 막아준다. */
    initSubmenu();
    $(this).toggleClass('on');

    $(this).find($submenu).stop().slideToggle();
  });

  // 서브메뉴 초기화를 함수로 분리
  function initSubmenu() {
    $submenu.stop().slideUp();
    $menuList.removeClass('on');
  }
});
