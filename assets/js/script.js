
window.addEventListener("load", () => {
	
	toggleClassShow();
	window.addEventListener("resize", toggleClassShow);
   bgColorMenu();
	window.addEventListener("resize", bgColorMenu);
});


// 						HEADER
// ========================================================
// ========================================================


function bgColorMenu() {
	
		const navbar = document.querySelector('.navbar');
		const navbarButton = document.querySelector('.mobile-menu');
		
		if (window.innerWidth < 991.98) {

			navbarButton.onclick = function(){
				if(navbar.style.backgroundColor === 'white') {
					navbar.style.backgroundColor = '';
					navbar.style.transitionProperty = "background-color, top";
					navbar.style.transitionDuration = "0.3s";
					navbar.style.transitionDelay = ".3s";
				} else {
					navbar.style.backgroundColor = 'white';
					navbar.style.transitionDelay = "0s";
					navbar.style.transitionDuration = "0s";
				}
			}

		} else {
			navbar.style.backgroundColor = 'transparent';
			document.querySelector('.navbar-collapse').classList.remove('show');
		}
	
}

// 						SELECT BOX
// ========================================================
// ========================================================

	document.querySelectorAll('.select-box').forEach((el)=>{
		let settings = {}

		new TomSelect(el, settings);	
	});	

// 						SWIPER
// ========================================================
// ========================================================



const config = {
  type: "carousel",
  perView: 3,
  startAt: 1,
  gap: 60,
  animationDuration: 1000,
  focusAt: "center",
  autoplay: 5000,
 
  breakpoints: {
  	767: {
			perView: 1,
			gap: 0,
		},
  	992: {
			perView: 2.2,
			gap: 28,
		},
		1200: {
			perView:2.75,
			gap: 46,
		},
		1400: {
			perView: 3,
			gap: 28,
		},
  },
};

var glide = new Glide(".glide", config);


// glide.on(['mount.after', 'run'], function () {
// });
  


glide.mount();





var nextButton = document.querySelector('#next');
var prevButton = document.querySelector('#prev');


nextButton.addEventListener('click', function (event) {
  event.preventDefault();

  glide.go('>');
});
prevButton.addEventListener('click', function (event) {
  event.preventDefault();

  glide.go('<');
})


var nextSlide = document.querySelector('#next-slide');
var prevSlide = document.querySelector('#prev-slide');

nextSlide.addEventListener('click', function (event) {
  event.preventDefault();

  glide.go('>');
});
prevSlide.addEventListener('click', function (event) {
  event.preventDefault();

  glide.go('<');
});


	
// 							AOS
// ========================================================
// ========================================================

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// 							BUTTON SHOW MORE
// ========================================================
// ========================================================

	const buttonShowMore = document.getElementById('buttonShowMore');
	const hiddenContent = document.querySelectorAll('.hiddenContent');
			
	buttonShowMore.addEventListener("click", function (e) {
	  if (e.target.textContent === "Show all") {
	    e.target.innerHTML = 'Show less' + '<i class="icon-arrow-up-2  ms-3"></i>';
	    e.target.scrollIntoView({behavior: "smooth", block: "center"});
	  } else {
	    e.target.innerHTML = 'Show all' + '<i class="icon-arrow-down-1  ms-3"></i>';
	  }
	  hiddenContent.forEach(element => {
		element.classList.toggle("d-none");
		e.target.scrollIntoView({behavior: "smooth", block: "center"});
	 });
	}); 
		
	



// 						FOOTER
// ========================================================
// ========================================================

const collapseButton = document.querySelectorAll('.collapse-button');
const collapseFooter = document.querySelectorAll('.collapse-footer');

collapseButton.forEach((colBtn)=>{	
	colBtn.onclick = function(e) {
		e.target.nextElementSibling.scrollIntoView({behavior: "smooth"});
	} 	
});

function toggleClassShow() {
	
		collapseFooter.forEach(function(element) {
			if (window.innerWidth < 991.98) {
				element.classList.remove('show')
			} else {
				element.classList.add('show')
			}
		})
}


// 						inputValid
// ========================================================
// ========================================================

const inputValid = document.querySelector('.inputValid');

    inputValid.addEventListener('click', function() {
		this.previousElementSibling.classList.add('label-valid');
		inputValid.style.Color = 'green!important';
    })


const modalForm = document.querySelectorAll('.modal-form');
const modalPopup = document.querySelectorAll('.modal-popup')



modalPopup.forEach(function(form) {
	form.addEventListener('shown.bs.modal', () => {

		let requiredInputs = form.querySelectorAll("[required]");
		const submitButtons = form.querySelector(".btn-allow");
		if (submitButtons) {
		submitButtons.disabled = true;
		
		for(let i = 0; i < requiredInputs.length; i++){	
			console.log(requiredInputs[i]);	
			if(requiredInputs[i].type == "number") {
				requiredInputs[i].parentNode.addEventListener("click", buttonState);
			} else {
				requiredInputs[i].addEventListener("input", buttonState);
			}			
		};

		function buttonState() {
		  submitButtons.disabled = Array.from(requiredInputs).some(x => x.value === '');
		}

		}

	})	
});




