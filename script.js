let like = document.getElementById('like');
function likeClick(){
like.innerHTML='<i class="fa-solid fa-thumbs-up"></i> Liked';
like.style.backgroundColor="#3a3b3c";
}
const commenthobe = document.getElementById('comment');
commenthobe.addEventListener('click', () => {
    const hiddenbox = document.getElementById('textWrapper');
    hiddenbox.style.visibility = hiddenbox.style.visibility ==='visible'? 'hidden':'visible';
    
})



let buttonClick = document.getElementById('buttonClick');
buttonClick.addEventListener('click', () => {
 const commentBox = document.getElementById('commentBox');
 const commentValue = commentBox.value;
 const commentShow = document.getElementById('commentShow');
 commentShow.style.fontSize = '15px';
 commentShow.style.color ='#b0b3b8' ;
 commentShow.style.marginBottom= '2px';
 const makePtag = document.createElement('p');
 makePtag.innerText= commentValue;
 makePtag.style.marginBottom = '5px';
 makePtag.style.backgroundColor = '#242526';
 makePtag.style.borderRadius= '10px'; 
 makePtag.style.padding = '10px 5px' ;
 commentShow.appendChild(makePtag);
 commentBox.value = '';
})

// let comment = document.getElementById('comment');
