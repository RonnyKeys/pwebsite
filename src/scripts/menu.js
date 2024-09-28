
  const navOpen = document.getElementById('open')
  const navMenu = document.getElementById('nav-menu')
  const navClose = document.getElementById('close')

  navOpen.addEventListener('click', function(){
    navMenu.classList.add('show-menu')
  })

  navClose.addEventListener('click', function(){
    navMenu.classList.remove('show-menu')
  })
