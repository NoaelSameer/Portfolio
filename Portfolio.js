const PortfolioContainer = document.querySelector('.Portfolio-container');
const PortfolioControlsContainer = document.querySelector('.Portfolio-controls');
const PortfolioControls = ["previous", "next"];
const PortfolioItems = document.querySelectorAll('.Portfolio-item');


// Why is there no function name()?
class Carousel{
        // Think of constructors as classes
        constructor(container, items, controls){
            this.carouselContainer = container;
            this.carouselControls = controls;
            this.carouselArray = [...items];

        }

        updatePortfolio(){
            // el is a parameter, => is the arrow function.
            this.carouselArray.forEach(el => {
                el.classList.remove("Portfolio-item-1");
                el.classList.remove("Portfolio-item-2");
                el.classList.remove("Portfolio-item-3");
                el.classList.remove("Portfolio-item-4");
                el.classList.remove("Portfolio-item-5");
            });

            this.carouselArray.slice(0,5).forEach((el, i) => {
                el.classList.add(`Portfolio-item-${i+1}`);
            });
        }

        setCurrentState(direction){
            if (direction.className == "Portfolio-controls-previous"){
                this.carouselArray.unshift(this.carouselArray.pop());
            }
            else{
                this.carouselArray.push(this.carouselArray.shift());
            }
            this.updatePortfolio();
        }

        setControls(){
            this.carouselControls.forEach(control => {
                PortfolioControlsContainer.appendChild(document.createElement("button")).className = `Portfolio-controls-${control}`;
                document.querySelector(`.Portfolio-controls-${control}`).innerText = control;
            });
        }

        useControls(){
            const triggers = [...PortfolioControlsContainer.childNodes]
            triggers.forEach(control => {
                control.addEventListener("click", e => {
                e.preventDefault(); 
                this.setCurrentState(control);
                });
        });

    }
}

const exampleCarousel = new Carousel(PortfolioContainer, PortfolioItems, PortfolioControls);

exampleCarousel.setControls();
exampleCarousel.useControls();


$(".Portfolio-item-1").click(function() {
    window.location.href = 'http://www.google.com'
  });