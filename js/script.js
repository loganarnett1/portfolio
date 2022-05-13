let firstImageHolder = document.getElementById("FirstImageHolder");
let secondImageHolder = document.getElementById("SecondImageHolder");
let thirdImageHolder = document.getElementById("ThirdImageHolder");

setupImageCarousel(firstImageHolder);
setupImageCarousel(secondImageHolder);
setupImageCarousel(thirdImageHolder);

function setupImageCarousel(imageHolder) 
{
    imageHolder.querySelector(".CarouselButtonPrevious").addEventListener("click", () => 
    {
        changeImage(imageHolder, true);
    });
    imageHolder.querySelector(".CarouselButtonNext").addEventListener("click", () => 
    {
        changeImage(imageHolder, true);
    });
}

function changeImage(imageHolder , forward)
{
    let images = imageHolder.querySelectorAll(".ImageSlide");
    console.log(images);
    let indexOfCurrentImage = 0;
    for (let i = 0; i < images.length; i++)
    {
        if (images[i].classList.contains("CarouselImageActive"))
        {
            indexOfCurrentImage = i;
        }
    }
    images[indexOfCurrentImage].classList.remove("CarouselImageActive");
    if(forward === true)
    {
        indexOfCurrentImage++;
    }
    else
    {
        indexOfCurrentImage--;
    }

    if (indexOfCurrentImage >= images.length) { indexOfCurrentImage = 0; }
    if (indexOfCurrentImage < 0) { indexOfCurrentImage = images.length-1; }
    
    images[indexOfCurrentImage].classList.add("CarouselImageActive");
    
}
