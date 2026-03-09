let expenses=[]

function addExpense(){

let amount=document.getElementById("amount").value
let category=document.getElementById("category").value
let description=document.getElementById("description").value
let date=document.getElementById("date").value

let table=document.getElementById("expenseTable")

let row=table.insertRow()

row.insertCell(0).innerHTML="₹"+amount
row.insertCell(1).innerHTML=category
row.insertCell(2).innerHTML=description
row.insertCell(3).innerHTML=date

expenses.push({amount,category})

updateChart()

}

function sendMessage(){

let input=document.getElementById("chatInput").value
let chat=document.getElementById("chatbox")

chat.innerHTML+="<p><b>You:</b> "+input+"</p>"

if(input=="total"){

let total=0
expenses.forEach(e=>total+=Number(e.amount))

chat.innerHTML+="<p><b>Bot:</b> Your total spending is ₹"+total+"</p>"

}else{

chat.innerHTML+="<p><b>Bot:</b> Try typing 'total'</p>"

}

}

let ctx=document.getElementById("chart").getContext("2d")

let chart=new Chart(ctx,{
type:"pie",
data:{
labels:[],
datasets:[{
data:[],
backgroundColor:["red","blue","green","orange"]
}]
}
})

function updateChart(){

let categories={}
expenses.forEach(e=>{
categories[e.category]=(categories[e.category]||0)+Number(e.amount)
})

chart.data.labels=Object.keys(categories)
chart.data.datasets[0].data=Object.values(categories)

chart.update()

}