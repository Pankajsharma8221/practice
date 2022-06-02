async function searchMovies(search){
    // let search = document.getElementById("search").value;
    // console.log(search)
    const url =`http://www.omdbapi.com/?s=${search}&apikey=d5c826c7&type=movie`

try{
    let res = await fetch(url);
let data = await res.json();
return (data);
// append(data.Search)
}
catch (err){
    console.log("movie Not found ")
}
}

async function main(){
    
    let search_new = document.getElementById("search").value;
    let movie_data = searchMovies(search_new);
    try{
        let new_res = await movie_data;
        console.log(new_res.Search)
        append(new_res.Search)
    }
    catch(err){
        console.log("movie Not found ")
    }
}



function append(data){
    if(data==undefined){
        return false;
    }

    let movies = document.getElementById("movies") 
    movies.innerHTML=null;
    data.forEach(function(el){
      

      let m_div = document.createElement("div");

      let m_img = document.createElement("img");
          m_img.src = el.Poster;
        // if(el.Poster="N/A"){
        //     m_img.src= "image.src"
        // }else{
        //     m_img.src = el.Poster;
        // }

      let m_title = document.createElement("h3");
         m_title.innerText=el.Title
      let book = document.createElement("button");
     let dataadd ={
         m_title,
         m_img,
             }

       book.setAttribute("class","book_now")
       book.innerText="Book now";
       book.onclick=function(dataadd){
           localStorage.setItem("movie",dataadd)
       }
m_div.append(m_img,m_title,book)
movies.append(m_div)

      

    })
   



}
let id;

function deBouncing(fun,delay){
if(id){
    clearTimeout(id);
}
    id = setTimeout(function(){
             fun();
    },delay)
}

