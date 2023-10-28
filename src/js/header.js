
// 抓取節點
const menu = document.querySelector('#menu')
const links = document.querySelector('#links')
const close = document.querySelector('#close')

// 點擊menu函式
function menuDisplayToggle() {
  links.style.width = "100vw";
}

// 點擊close函式
function closeDisplayToggle() {
  links.style.width = "0vw";
}

// menu點擊事件
menu.addEventListener('click', menuDisplayToggle)
close.addEventListener('click', closeDisplayToggle)

