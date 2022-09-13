const bubble = document.querySelectorAll('.bubble');
const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
//position of the active bubble
let currentBubble = 1;

//next button event listener
nextBtn.addEventListener('click', () => {
    //increment the 'currentbubble' which is === '1'
    //of  '1' evetytime you click
    currentBubble++;
    // to keep the bubble within boundaries [1 to 4]
    if (currentBubble > bubble.length) {
        currentBubble = bubble.length;
       
    }
    
    if (currentBubble === bubble.length) {
        nextBtn.disabled = true;
    }
    
    if(currentBubble >1){
        //change the button to able to disabled and vice versa
        prevBtn.disabled = false;
    }



    update()


})



//prev button event listener
prevBtn.addEventListener('click', () => {

    currentBubble--;

    if (currentBubble <1) {
        currentBubble = 1;
    }

    if(currentBubble === 1){
        nextBtn.disabled = false;
        prevBtn.disabled = true;
    }

    update()

})


function update() {

    //making the bubble border 'black' when active
    bubble.forEach((bubble, index) => {
        if(index < currentBubble) {
            bubble.classList.add('active-bubble');
        } else {
            bubble.classList.remove('active-bubble');
        }
    })

    
    //call all the active bubble
    const activeBubble = document.querySelectorAll ('.active-bubble');
    //progress bar 
    progressBar.style.width =  ((activeBubble.length -1)/(bubble.length-1)) * 100 + '%';
    
    
}