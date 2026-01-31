function call(){
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var ans = document.getElementById("ans");
    var math = Math.floor(Math.random()*100);

    //ans.innerHTML = "the love between " + p1 + " and " + p2 + " is " + math + "%";

    if(math >= 90){
        ans.innerHTML = "the love between " + p1 + " and " + p2 + " is " + math + "%<br> You both are made for each other ❤️";
    }
    else if(math >= 70){
        ans.innerHTML = "the love between " + p1 + " and " + p2 + " is " + math + "%<br> You both can make it work! 💖";
    }
    else if(math >= 40){
    else if(math < 20){
        ans.innerHTML = "the love between " + p1 + " and " + p2 + " is " + math + "%<br> You should try finding someone better! 💕";
    }
    else{
        ans.innerHTML = "the love between " + p1 + " and " + p2 + " is " + math + "%<br> There is a chance for both of you! 🌹";
    }
}