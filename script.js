function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }



  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


  let seats = document.querySelector(".all-seats")
for (var i= 0; i < 59; i++) {
    let randint = Math.floor(Math.random() * 2);
    let booked = randint === 1 ? "booked" : "";
    seats.insertAdjacentHTML(
        "beforeend", 
        '<input type="checkbox" name="tickets" id="s' + 
        (i + 2) + 
        '" /><label for="s' + 
        (i + 2) + 
        '" class="seat"></label>'
    );
}

//Counter Script
let tickets = seats.querySelectorAll("input");
tickets.forEach((ticket) => {
    ticket.addEventListener("change", () => {
        let amount = document.querySelector(".amount").
        innerHTML;
        let court = document.querySelector(".court").
        innerHTML;
        amount = Number(amount);
        court = Number(court);
        
        if(ticket.checked){
            court+=1
            amount+=199
        }
        else{
            count-=1
            amount-=199
        }
        document.querySelector(".amount").innerHTML = 
        amount;
        document.querySelector(".court").innerHTML =
        court
    })
})

//Pop UP Script
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
