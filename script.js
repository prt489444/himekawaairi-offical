// script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  
  if (menuButton) {
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'md:hidden bg-white border-t border-pink-100 py-4';
    mobileMenu.style.display = 'none';
    
    mobileMenu.innerHTML = `
      <div class="px-6 flex flex-col gap-4 text-center text-base font-medium text-gray-700">
        <a href="#profile" class="py-3 hover:text-pink-500 mobile-link">プロフィール</a>
        <a href="#career" class="py-3 hover:text-pink-500 mobile-link">出演作</a>
        <a href="#voice" class="py-3 hover:text-pink-500 mobile-link">ボイスサンプル</a>
        <a href="#sns" class="py-3 hover:text-pink-500 mobile-link">SNS</a>
        <a href="#contact" class="py-3 hover:text-pink-500 mobile-link">お問い合わせ</a>
      </div>
    `;
    
    const nav = document.querySelector('nav');
    if (nav) nav.appendChild(mobileMenu);

    // メニュー開閉
    menuButton.addEventListener('click', () => {
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        menuButton.textContent = '☰';
      } else {
        mobileMenu.style.display = 'block';
        menuButton.textContent = '✕';
      }
    });

    // リンクをクリックしたらメニューを閉じる
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        mobileMenu.style.display = 'none';
        menuButton.textContent = '☰';
      }
    });
  }
});
