function myfun(){
  let amount=  document.getElementById("amount").value;
let money=localStorage.getItem("amount")||[]
let newmoney;
newmoney=Number(money)+Number(amount);
  localStorage.setItem("amount", newmoney) 
  
  addMoney();
}
addMoney();
function addMoney(){
  let addMoney=localStorage.getItem("amount")
  console.log(addMoney)
  let h3=document.getElementById("wallet")
  h3.innerText=addMoney;
  // window.location.reload();
  document.getElementById("amount").innerHTML=null
}
