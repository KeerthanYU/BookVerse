function addToCart(bookName){
    alert(bookName+" has been added to your cart!");
}

const shopButton=document.querySelector('.shop-btn');
shopButton.addEventListener("click",function(){
    alert("welcome to BookVerse! Start exploring Books.")
});

const searchInput = document.querySelector(".hero-search input"); 

searchInput.addEventListener("keyup",function(){
    const searchValue=searchInput.value.toLowerCase();
    const books = document.querySelectorAll(".book-card");
    books.forEach(function(book){
        const title =book.querySelector("h3").innerText.toLowerCase();
        if(title.includes(searchValue)){
            book.style.display="block";
        }
        else{
            book.style.display="none";
        }
    });
});

const darkModeButton = document.querySelector("#darkModeBtn");

darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.innerText = "Light Mode";
    } else {
        darkModeButton.innerText = "Dark Mode";
    }
});

const topButton=document.createElement("button");
topButton.innerText="Back to top";
topButton.classList.add("top-btn");
document.body.appendChild(topButton);
window.addEventListener("scroll",function(){
    if(window.scrollY>300){
        topButton.style.display="block";
    }
    else{
        topButton.style.display="none";
    }
});

topButton.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});