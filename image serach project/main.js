const accessKey = "Eij3Rg7n-esJ_3TYR54p1q3M8CD-u9XlNLPL-l2Gr0Y";

const formEl = document.querySelector("form")
const inputEl = document.getElementById("serach-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData= "";
let page = 1;

async function serachImages(){
    inputData =  inputEl.value;
    const url =`http://api.unsplash.com/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page ===1){
        searchResults.innerHTML ="";
    }
  results.map ((result)=>{
    const imageWrapper = document.getElement("<div");
    imageWrapper .classList.add("search-result");
    const image = document.getElement("img");
    image.src = result.urls.small;
    image.alt= result.alt_description;
    const imageLink=document.getElement("a");
    imageLink.href= result.links.html;
    imageLink.target="_blank";
    imageLink.textContent =result.alt_description;


    imageWrapper.appenedChild(image);
    imageWrapper.appenedChild(imageLink);
    searchResults.appenedChild(imageWrapper);



  });

  page++;
 if(page >1){
    showMore.style.display="block";
 }

}
formEl.addEventListener("submit",(event)=>{
  event.preventDefault();
  page=1;
  serachImages();
});
showMore.addEventListener("click",()=>{
    serachImages();

});