const search=document.querySelector("#search")
 const button=document.querySelector("#btn")
 
 button.addEventListener("click",fetchData)
 search.addEventListener("input",fetchData)
 
 async function fetchData(){
     const url = `https://www.omdbapi.com/?s=${search.value}&apikey=2107d75b`
     try{
         const response= await fetch(url);
         const data = await response.json();
         
         displayData(data);
     } catch(error){
         console.log("Error fetching movie data :",error)
     }
 }
 
 const maindiv=document.querySelector(".main")
 function displayData(data){
     console.log(data)
     maindiv.textContent=""
     data.Search.forEach((m)=>{
         const movieDiv=document.createElement("div")
         movieDiv.classList.add("mdivstyle")
         const movieImage=document.createElement("img")
         movieImage.src=m.Poster
         movieImage.alt=m.Title
         const movieTitle=document.createElement("h2")
         movieTitle.textContent=m.Title
         movieDiv.append(movieImage, movieTitle);
         maindiv.appendChild(movieDiv)
     })
 }