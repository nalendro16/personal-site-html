document.addEventListener('DOMContentLoaded', () => {
  console.log(
    "%cWelcome to Nalendro's CV",
    'color: #F58426; font-size: 16px; font-weight: bold; border: 2px solid #000; padding: 10px; background: #006BB6;',
  )

  const documentLinks = document.querySelectorAll('a[href^="#"]')

  documentLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      if (this.getAttribute('href') === '#') return

      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const navbarHeight = document.querySelector('.neo-navbar').offsetHeight
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition =
          elementPosition + window.scrollY - navbarHeight - 20

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    })
  })

  const sections = document.querySelectorAll('section, article')
  const navLinks = document.querySelectorAll('.neo-nav-link')

  window.addEventListener('scroll', () => {
    let current = ''

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      const navbarHeight = document.querySelector('.neo-navbar').offsetHeight

      if (scrollY >= sectionTop - navbarHeight - 50) {
        current = section.getAttribute('id')
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active')
      }
    })
  })
})
