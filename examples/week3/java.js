// // Hamburger menu toggle
// const hamburger = document.getElementById('hamburger');
// const menu = document.getElementById('menu');

// hamburger.addEventListener('click', function() {
//     const lines = document.querySelectorAll('.line');
//     lines.forEach(line => line.classList.toggle('open'));
//     menu.classList.toggle('open');
// });

// // Magic button for changing title and box style
// document.getElementById('magicButton').addEventListener('click', function() {
//     const title = document.querySelector('.title');
//     title.textContent = "More Magic Unlocked!";
//     title.style.color = '#ff6a95';
//     title.style.transform = 'scale(1.2) rotate(10deg)';
    
//     const box = document.getElementById('box');
//     box.style.transform = 'scale(1.5)';
//     box.style.transition = 'transform 1s ease';
//     setTimeout(() => {
//         box.style.transform = 'rotate(180deg) scale(1)';
//     }, 1000);
// });

// // Resize button functionality
// document.getElementById('resizeBox').addEventListener('click', function() {
//     const box = document.getElementById('box');
//     const isBig = box.style.width === '300px';
//     box.style.width = isBig ? '200px' : '300px';
//     box.style.height = isBig ? '200px' : '300px';
//     box.style.transition = 'width 0.4s ease, height 0.4s ease';
// });
