// // ES6 modules
// import sal from 'sal.js'

// // CommonJS modules
// var sal = require('sal.js')

// sal();

import AOS from "aos";
import "aos/dist/aos.css";

// useEffect(() => {
//     AOS.init();

//     //give <div className='App'> an id
//     document.getElementById("app").addEventListener("scroll", () => {
//     AOS.refresh();
//     });
// }, []);


// let scrollRef = 0;

// window.addEventListener('scroll', function() {
//   // increase value up to 10, then refresh AOS
//   scrollRef <= 10 ? scrollRef++ : Aos.refresh();
// });

// <!-- <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    // <script src="https://unpkg.com/aos@next/dist/aos.js"></script> -->

//     <!-- <script>
//     AOS.init({
//     // easing: 'ease-out-back',
//     duration: 1000
// });
// </script> -->



// $(function() {
//     AOS.init({
//       duration: 1200
//     });
  
//     $('.js-load-more').on('click', function() {
//       var $content = $(this).next('.js-more-content');
      
//       $content.animate({
//         height: 750,
//       }, 500);
//     });
  
//     onElementHeightChange(document.body, function(){
//       AOS.refresh();
//     });
//   });
  
//   function onElementHeightChange(elm, callback) {
//       var lastHeight = elm.clientHeight
//       var newHeight;
      
//       (function run() {
//           newHeight = elm.clientHeight;      
//           if (lastHeight !== newHeight) callback();
//           lastHeight = newHeight;
  
//           if (elm.onElementHeightChangeTimer) {
//             clearTimeout(elm.onElementHeightChangeTimer); 
//           }
  
//           elm.onElementHeightChangeTimer = setTimeout(run, 200);
//       })();
//     }
  



var target = document.querySelector('#target');
var targetActiveClass = 'target-is-active';

// Call this function when it enters/leaves the viewport
var callback = function(entries, observer) { 
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(targetActiveClass);
    } else {
      entry.target.classList.remove(targetActiveClass);
    }
  });
};

// Create our observer
var observer = new IntersectionObserver(callback, {threshold: 0});
observer.observe(target);
