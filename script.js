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

