
$(document).ready(function(){
    console.log('script');
    //헤더 푸터 컴포넌트
    $('#header').load('/components/header.html', function() {
        var headerList = $("header nav > ul > li > a")
  
          headerList.mouseover(function(){
              $("header").addClass("open")
          })
          $("header").mouseleave(function(){
              $("header").removeClass("open")
          })
  
          //헤더 메뉴 생성
          var headerMenu = $('.mobile-menu')
          var slideMenu = $('.mobile-menu-wrap')
          var closeBtn = $('.close-btn')
          headerMenu.click(function(){
              slideMenu.addClass("open")
          })
          closeBtn.click(function(){
              slideMenu.removeClass("open")
          })
  
          //모바일 메뉴 토글 리스트
          var menuList = $('.mobile-menu-wrap > ul > li')
          menuList.click(function(){
              $(this).children('.sub-menu').slideToggle()
          })
      });
      $('#footer').load('/components/footer.html');



})


