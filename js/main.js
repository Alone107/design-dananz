$('.burger,.overlay').on('click', function (e) {
  e.preventDefault()
  $('.header_nav').toggleClass('header_nav--open')
  $('.overlay').toggleClass('overlay--show')
  $('.burger').toggleClass('active')
  $('body').toggleClass('scroll')
})