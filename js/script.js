;(function($){
  $(function(){


    var wrapSwiper = new Swiper("#wrap",{
      wrapperClass:"container",
      slideClass:"area",
      direction:"vertical",
      mousewheel:true,
      speed:1000,
      pagination:{ //페이지 메뉴만들기
        el:'#gnb ul', //페이지 메뉴가 들어간 요소
        renderBullet: function (index, className) {
          var name = $(".area").eq(index).attr("id");
          return '<li class="' + className + '"><a>' + name + '</a></li>';
        },
        clickable:true, //버튼 클릭시 화면 전환이 가능하게 설정
        bulletClass:'btn', //버튼에 부여되는 클래스
        bulletActiveClass:'active', //활성화된 버튼에 부여되는 클래스
      },
      scrollbar: { //스크롤막대 사용
        el: '.scrollbar', //스크롤막대 영역 지정
        draggable: true, //드래그하여 화면 전환
        hide:true, //스크롤막대가 사라짐.
      },
      
    }); //swiper 호출 끝


    $(".works").hover(wrapSwiper.mousewheel.disable,wrapSwiper.mousewheel.enable);

    $(".works").poptrox({
      selector:'.thum',
      usePopupNav:true,
    });
    

  });
})(jQuery);