var tourBtns =document.querySelectorAll('.buy-tour-btn') ;
var ticketModal=document.querySelector('.ticket-modal');
var ticketClosebtns=document.querySelectorAll('.ticket__btn');
console.log(ticketClosebtns);
console.log(ticketModal);
var isTicketOpen = false;

for (var i = 0 ; i < tourBtns.length; i++) {
    tourBtns[i].addEventListener('click' , open , false ) ; 
 }
 for (var i = 0 ; i < ticketClosebtns.length; i++) {
    ticketClosebtns[i].addEventListener('click' , open , false ) ; 
 }

function open () {
    if (!isTicketOpen){
        ticketModal.classList.add('open')
        isTicketOpen=true
    }
    else
    {
        ticketModal.classList.remove('open')
        isTicketOpen=false
    }
}