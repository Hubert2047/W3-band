/* insert card to tourcard section */
var cards = [{
        imgUrl: 'img/vietnam.jpg',
        heading: 'Viet Nam',
        date: 'Tue 22 March 2022',
        p: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
    },
    {
        imgUrl: 'img/paris.jpg',
        heading: 'Paris',
        date: 'Sat 28 May 2022',
        p: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
    },
    {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 21 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    },
    {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 21 June 2023',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    },
    {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 28 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    },
    {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 28 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    },
    {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 28 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    },
    {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 28 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    }, {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 28 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    }, {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 28 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    }, {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 28 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    }, {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 28 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    }, {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 28 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    }, {
        imgUrl: 'img/taiwan.jpg',
        heading: 'Taipei',
        date: 'Tue 28 June 2022',
        p: 'Praesent tincidunt lorem sed tellus ut rutrum sed justo.',
    },
]

var tourListCard = document.querySelector('.tours__list-card')

var newCards = cards.map((card) => {
    return `
       <div class="card">
           <img src="${card.imgUrl}" alt="" class="card__img">
           <div class="card__content">
               <h4 class="heading-4">${card.heading}</h4>
               <div class="card__date">${card.date}</div>
               <p class="card__text">${card.p}</p>
               <a class="btn btn--black buy-tour-btn" >Buy Tickets</a>
           </div>
       </div>`

})

tourListCard.innerHTML = newCards.join('');

/* open ticketmodal */
var tourBtns = document.querySelectorAll('.buy-tour-btn');
var ticketModal = document.querySelector('.ticket-modal');
var ticketClosebtns = document.querySelectorAll('.ticket__btn');
var isTicketOpen = false;

for (var i = 0; i < tourBtns.length; i++) {
    tourBtns[i].addEventListener('click', open, false);
}
for (var i = 0; i < ticketClosebtns.length; i++) {
    ticketClosebtns[i].addEventListener('click', open, false);
}

function open() {
    if (!isTicketOpen) {
        ticketModal.classList.add('open')
        isTicketOpen = true
    } else {
        ticketModal.classList.remove('open')
        isTicketOpen = false
    }
}