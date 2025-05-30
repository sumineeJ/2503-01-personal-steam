document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.btn_menu');
  const mNav = document.querySelector('.m_nav');
  const mSubMenus = document.querySelectorAll('.m_has_sub > a');

  menuBtn.addEventListener('click', () => {
    mNav.classList.toggle('active');
  });

  mSubMenus.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      link.parentElement.classList.toggle('active');
    });
  });
});