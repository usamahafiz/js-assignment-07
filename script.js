const clearInput=() =>{
    document.getElementById("inputText").value="";
}

function clearoutput(){
    document.getElementById("output").innerHTML="";
}

const showOutput=(output) =>{
    document.getElementById("output").innerHTML="<h5>"+output+"</h5>";

}
function inputValue(){
    return document.getElementById("inputText").value
}
const tellTime=()=>{
    var now=new Date()
    var hours=now.getHours()
    var minutes=now.getMinutes()
    var seconds=now.getSeconds()
    var ampm=hours>=12?"PM":"AM"
    hours=hours%12
    let html="<br>You clicked the button @"+hours+":"+minutes+":"+seconds+":"+ampm;
    showOutput(html)
}

// get Name of today 
function getname(){
    let rightNow= new Date();
    console.log(rightNow)
    // console.log(rightNow.getTime())
    let theDay=rightNow.getDay();
    console.log(theDay)
    let daynames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let nameOfToday=daynames[theDay]
    console.log(nameOfToday)

    showOutput(nameOfToday);
    // document.getElementById("output").innerHTML=nameOfToday;
    // tellTime()
    
}
//calculate days since i born
function calculatedays(){
    let dob=inputValue();
    console.log(dob)
// tellTime()
    if (!dob) {
        alert("Please enter your date of birth")
        
    }
    let today=new Date();
    let bornDate=new Date(dob);
    console.log(today)
    console.log(bornDate)

    let todayTime=today.getTime();
    let bornTime=bornDate.getTime();
    console.log(todayTime)
    console.log(bornTime)

    let msDiff=todayTime-bornTime;
    console.log("msDiff",msDiff)
    let day=msDiff/(1000*60*60*24) //we get day from this step
    day=Number(day)
    // day=Math.floor(day)
    // console.log(day)
    let html=Math.floor(day) +" days have been passed since you born";
    showOutput(html)
    // tellTime()



}
//calculate next birthday
function birthday(){
    let dob=inputValue();
    console.log(dob)

    if (!dob) {
        alert("Please enter your date of birth")
        
    }
    let today=new Date();
    let nextbornDate=new Date(dob);
    let msDiff=nextbornDate.getTime()-today.getTime();
    let daysDiff=msDiff/(1000*60*60*24)
    let html="Your next birthday is after "+Math.floor(daysDiff)+" days";
    document.getElementById("output").innerHTML=html;
    // tellTime()

}
function time1(){
    tellTime()

}
function tell2(){

    tellTime()

}
function time3(){
    tellTime() //it is function which prevent the reapitation of code

}

function greetuser(){
    let userName=prompt("Please enter your name")
    console.log(userName)
    let now=new Date();
    let hours=now.getHours();
    console.log(hours)

    let greetingMsg="Good";
    if(hours>=5 && hours<12){
        greetingMsg +="Morning"
}
else if(hours>12 && hours<16){
    greetingMsg +="Afternoon"
}
else if(hours>16 && hours<20){
    greetingMsg +="Evening"
}
else{
    greetingMsg +="Night"
}
showOutput(greetingMsg+" "+ userName)
}

//calculate tax
function tax(){
    let income=+prompt("Please enter any amount")
    console.log(income)
    let tax=18;
    let taxAmount=income*tax/100;
    let html="Tax="+ taxAmount;
    showOutput(html)
}
//calculate total price + tax
// function totaltax(){
//     let price=+prompt("Please enter price")
//     let tax=18;
//     let taxAmount=price*tax/100;
//     let total=price+taxAmount;
//     let html="Total price="+ Math.round(total);
//     showOutput(html)
// }
//another method
function calculatetax(price,taxrate){
    return price*taxrate/100;

function calculatetotal(price){
    if(price<1000)
        var taxrate=8;
    else{
        var taxrate=18;
    }
    var tax=calculatetax(price,taxrate)
    let total=price + tax;
    return total;

}
function totaltax(){
    let price=+prompt("Please enter price")
    if (!price)
        alert("please enter price")
    return;
}

    var total=calculatetax(price)
    let html="total is"+ Math.round(total)
    showOutput(html)

}
