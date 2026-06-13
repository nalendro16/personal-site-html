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
      const id_href = this.getAttribute('href')
      const targetElement = document.querySelector(id_href)

      if (targetElement) {
        const height = document.querySelector('.neo-navbar').offsetHeight
        const elementPositions = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPositions + window.scrollY - height - 20

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
