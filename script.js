// script.js
document.addEventListener('DOMContentLoaded', () => {
  
  const menuButton = document.getElementById('menu-button');
  
  if (menuButton) {
    let isOpen = false;
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'md:hidden bg-white border-t border-pink-100 py-4';
    mobileMenu.style.display = 'none';
    
    mobileMenu.innerHTML = `
      <div class="px-6 flex flex-col gap-4 text-center text-base font-medium">
        <a href="#profile" class="py-3 hover:text-pink-500 active:text-pink-600 transition-colors mobile-link">プロフィール</a>
        <a href="#career" class="py-3 hover:text-pink-500 active:text-pink-600 transition-colors mobile-link">経歴</a>
        <a href="#sns" class="py-3 hover:text-pink-500 active:text-pink-600 transition-colors mobile-link">SNS</a>
        <a href="#contact" class="py-3 hover:text-pink-500 active:text-pink-600 transition-colors mobile-link">お問い合わせ</a>
      </div>
    `;
    
    const nav = document.querySelector('nav');
    if (nav) nav.appendChild(mobileMenu);

    // ボタンクリック
    menuButton.addEventListener('click', () => {
      isOpen = !isOpen;
      toggleMenu();
    });

    // リンククリックで閉じる
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('mobile-link')) {
        isOpen = false;
        toggleMenu();
      }
    });

    function toggleMenu() {
      if (isOpen) {
        mobileMenu.style.display = 'block';
        menuButton.textContent = '✕';
        menuButton.style.fontSize = '28px';
      } else {
        mobileMenu.style.display = 'none';
        menuButton.textContent = '☰';
        menuButton.style.fontSize = '32px';
      }
    }
  }
});
