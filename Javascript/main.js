const tickets = document.getElementById("tickets-onsale")
const buyTicket = document.getElementById("ticket-btn")
const ticketsSold = document.getElementById("ticket-sold")
const ticketsNotSold = document.getElementById("ticket-unsold")
const resetTicket = document.getElementById("reset-button")

let totalTickets = 100
tickets.textContent = totalTickets;
let numberOfTicketsBought = 0;

buyTicket.addEventListener('click', ticketBought)
ticketsSold.addEventListener('click', ticketSold)
resetTicket.addEventListener('click', resetButtonTicket)

function ticketBought() {
    numberOfTicketsBought = numberOfTicketsBought + 1;
    buyTicket.textContent = `Bought ${numberOfTicketsBought} ticket`;

    const remainingTickets = totalTickets - numberOfTicketsBought;
    ticketsNotSold.textContent = `${remainingTickets} Tickets UnSold`;
    tickets.textContent = `${remainingTickets} Tickets On Sale`;
  }

  function ticketsOnSale(){
    let updateTicketCount = parseInt(tickets.textContent)
    updateTicketCount = updateTicketCount - numberOfTicketsBought;
  }

function ticketSold() {
  ticketsSold.textContent = `${numberOfTicketsBought} ticket${numberOfTicketsBought > 1 ? 's' : ''} sold!`;
}
function resetButtonTicket() {
// Reset all counts and UI elements
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
