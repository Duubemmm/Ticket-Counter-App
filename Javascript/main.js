const tickets = document.getElementById("tickets-onsale")
const buyTicket = document.getElementById("ticket-btn")
const ticketsSold = document.getElementById("ticket-sold")
const ticketsNotSold = document.getElementById("ticket-unsold")
const resetTicket = document.getElementById("reset-button")

let totalTickets = 0;
let numberOfTicketsBought = 0;

tickets.addEventListener('input',updateTickets)
buyTicket.addEventListener('click', ticketBought)
ticketsSold.addEventListener('click', ticketSold)
resetTicket.addEventListener('click', resetButtonTicket)

function updateTickets(){
  totalTickets = parseInt(tickets.value) || 0; // Fallback to 0 if the input is not a number
  const remainingTickets = totalTickets - numberOfTicketsBought;
}

function ticketBought(){
    if (numberOfTicketsBought < totalTickets) {
      numberOfTicketsBought++;
      buyTicket.textContent = numberOfTicketsBought > 1 ?     
      `Bought ${numberOfTicketsBought} tickets` 
    : `Bought ${numberOfTicketsBought} ticket`;
    const remainingTickets = totalTickets - numberOfTicketsBought;
    ticketsNotSold.textContent = `${remainingTickets} Tickets UnSold`;
    }
    else
    {buyTicket.textContent = "No available ticket"}
}
    
function ticketSold() {
  ticketsSold.textContent = `${numberOfTicketsBought} ticket${numberOfTicketsBought > 1 ? 's' : ''} sold!`;
}

function resetButtonTicket() {
   numberOfTicketsBought = 0;
   tickets.textContent = totalTickets;
   ticketsSold.textContent = "0";
   ticketsNotSold.textContent = `${totalTickets} Tickets UnSold`;
   buyTicket.textContent = "+1";
  }

  tickets.style.color = "#262929";
  tickets.style.fontWeight = "600"
  tickets.style.fontSize = "1.2rem"

  buyTicket.style.color = "#262929";
  buyTicket.style.fontWeight = "600"
  buyTicket.style.fontSize = "1.2rem"

  ticketsNotSold.style.color = "#262929";
  ticketsNotSold.style.fontWeight = "600";
  ticketsNotSold.style.fontSize = "1.2rem";

  ticketsSold.style.color = "#262929";
  ticketsSold.style.fontWeight = "600";
  ticketsSold.style.fontSize = "1.2rem";