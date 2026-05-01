function addToCart(bookName){
    alert(bookName+"has been added to your cart!");
}

const shopButton=document.querySelector('.hero-content button');
shopButton.addEventListener("click",function(){
    alert("welcome to BookVerse! Start exploring Books.")
});

const searchInput=document.createElement("input");
searchInput.placeholder="Search books...";
searchInput.classList.add("search-bar");

document.querySelector("header").appendChild(searchInput);
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

const darkModeButton=document.createElement("button");
darkModeButton.innerText="Dark Mode";
darkModeButton.classList.add("dark-mode-btn");
document.querySelector("header").appendChild(darkModeButton);
darkModeButton.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
});

const topButton=document.createElement("button");
topButton.innerText="up";
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