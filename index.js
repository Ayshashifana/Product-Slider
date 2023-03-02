const sImage=document.querySelectorAll(".show-img a")

const imageDiv=document.querySelectorAll(".show-img div")

var imgId=1
sImage.forEach(img=>{
    img.addEventListener("click",(e)=>{
       e.preventDefault();
       imgId=img.dataset.id
       imageDiv.forEach(imag=>{
        imag.classList.remove("active")
      moveImage();
      img.parentElement.classList.add("active") 
      })

})

       
    })

function moveImage(){
    const imgWidth=document.querySelector(".big-img img:first-child").clientWidth
   
    let twidth=(imgId-1)*imgWidth
    
    document.querySelector(".big-img").style.transform=`translateX(${-twidth}px)`;
   
}

