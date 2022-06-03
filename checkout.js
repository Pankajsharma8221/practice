function addMoney(){
    let addMoney=localStorage.getItem("amount")
    console.log(addMoney)
    let h3=document.getElementById("wallet")
    h3.innerText=addMoney;
    // window.location.reload();
    // document.getElementById("amount").innerHTML=null
  }
addMoney();  

function show_data(){

    let data_movie=JSON.parse(localStorage.getItem("movie"))
     console.log(data_movie);
    append(data_movie)

}
show_data()

   
function append(data){

    let div=document.createElement("div");

    let poster=document.createElement("img")
    poster.src=data.poster


    let h3=document.createElement("h3")
    h3.innerText=data.title;

    div.append(h3,poster)

    document.querySelector("#movies").append(div);

}

function details(){
    event.preventDefault();

    let input1=document.querySelector("#user_name").value
   
     let input2=document.querySelector("#number_of_seats").value
     
     let h3=document.getElementById("wallet").innerText
     
     let x=Number(h3)-(input2*100);

     if((input2*100)>Number(h3))
     {
         alert("Insufficent Balance!")
     }else {

        h3=x;
    //    let final= document.getElementById("wallet").innerText;
      

        localStorage.setItem("amount", h3) 
        window.location.reload()

         alert("Booking Successful!")

     }
     
console.log(Number(h3))
     console.log(input1,input2)

}


