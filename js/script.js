document.addEventListener('DOMContentLoaded', function() {
             let robot = document.querySelector('.robot-body');
             let checkpoints = document.querySelectorAll('.info-block');
             let leftBlocks = document.querySelectorAll('.left-blocks .block');
             let rightBlocks = document.querySelectorAll('.right-blocks .block');
             let content = document.querySelector('.robot-section');
             let lastScrollPosition = 0;
             let stopPosition = 206.6;//206.6
         
             document.addEventListener('scroll', function () {
                 let currentScrollPosition = window.scrollY;
                 let scrollDirection = currentScrollPosition > lastScrollPosition ? 'down' : 'up';
                 lastScrollPosition = currentScrollPosition;
         
                 // Move robot until it reaches stopPosition
                 if (currentScrollPosition <= stopPosition) {
                     robot.style.opacity = 1;
                     robot.style.top = `${Math.min(currentScrollPosition / 2, stopPosition)}px`; // Adjust speed
                 }
         
                 // Keep robot at stopPosition after it reaches stop point
                 if (currentScrollPosition > stopPosition) {
                     robot.style.opacity = 1;
                     robot.style.top = '10px';
                 }
         
                 // Checkpoints visibility
                 checkpoints.forEach((checkpoint) => {
                     if (currentScrollPosition > checkpoint.offsetTop - 150) {
                         checkpoint.style.opacity = 1;
                         checkpoint.classList.add('visible');
                     } else {
                         checkpoint.style.opacity = 0;
                         checkpoint.classList.remove('visible');
                     }
                  });
         
         
                 // Show and hide blocks on the left and right
                 leftBlocks.forEach((block) => {
                     if (currentScrollPosition > block.offsetTop - 50) {
                         block.style.opacity = 1;
                     } else {
                         block.style.opacity = 0;
                     }
                 });
         
                 rightBlocks.forEach((block) => {
                     if (currentScrollPosition > block.offsetTop - 50) {
                         block.style.opacity = 1;
                     } else {
                         block.style.opacity = 0;
                     }
                 });
         
                 // Handle Robot's Position on Scroll (fixed or absolute)
                 const rect = content.getBoundingClientRect();
         
                 // Check if the section is almost hidden (less than 50px visible)
                 if (rect.bottom <= 200) {
                     robot.style.position = 'absolute';
                     robot.style.bottom = '0px';
                     robot.style.top = 'auto';
                 } else if (robot.style.position === 'absolute') {
                     robot.style.position = 'fixed';
                     robot.style.bottom = 'auto';
                 }
             });
         
         
         
         
             let lastScrollY = window.scrollY;
         let rotation = 0;
         
         window.addEventListener('scroll', () => {
         const currentScrollY = window.scrollY;
         const gear = document.querySelector('.gear-scroll');
         
         if (!gear) return;
         
         if (currentScrollY > lastScrollY) {
         // Scrolling down
         rotation += 180;
         } else if (currentScrollY < lastScrollY) {
         // Scrolling up
         rotation -= 90;
         }
         
         gear.style.transform = `rotate(${rotation}deg)`;
         lastScrollY = currentScrollY;
         });
         
         
         
         
         });
