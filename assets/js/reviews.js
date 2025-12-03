// i use local reviews data
const reviews = [
  {
    id: 1,
    customer: "Anna Johnson",
    service: "She Uses the Best Products!",
    img:
      "assets/images/detergent-icon.png",
    review:
      "Ayisha uses the best laundry detergent and products. My clothes smell better than my perfume whens she drops them off!",
  },
   {
    id: 2,
    customer: "Shyan Smith",
    service: "Neat, tidy folding",
    img:
      "assets/images/folded-clothes.png",
    review:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "Peter Jones",
    service: "Same Day Laundry is a Life Saver!",
    img:
      "assets/images/clock.png",
    review:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    customer: "Bill Anderson",
    service: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    review:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// here we'll select items
const img = document.getElementById('person-img');
const customer = document.getElementById('customer');
const service = document.getElementById('service');
const review = document.getElementById('review');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// now we set the starting item and load initial item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
showPerson(currentItem);
});

// i wrote a function witch shows the current person, 

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  customer.textContent = item.customer;
  service.textContent = item.service;
  review.textContent = item.review;
}

//show next person
nextBtn.addEventListener('click', function() {
 currentItem++;
 if(currentItem>reviews.length-1){
   currentItem = 0;
 }
 showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener('click', function() {
 currentItem--;
 if(currentItem<0){
   currentItem = reviews.length -1;
 }
 showPerson(currentItem);
});

// auto-rotate reviews every 5 seconds
setInterval(() => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
}, 5000);

//show random person
randomBtn.addEventListener('click', function (){
  
currentItem = Math.floor(Math.random()*reviews.length);
showPerson(currentItem)
console.log(currentItem);
});
