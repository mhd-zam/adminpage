document.getElementById("menuBtn").addEventListener("click", check);
var logo1 = document.getElementById("logo1");
var logo2 = document.getElementById("logo2");
function check() {
  document.querySelector("aside").classList.toggle("open");
  let value = document.querySelector("aside").className;

  if (value === "aside open") {
    logo1.style.display = "block";
    logo2.style.display = "none";
  } else {
    logo1.style.display = "none";
    logo2.style.display = "block";
  }
}
document.getElementById('mobile-menuBtn').addEventListener('click', mountorunmount)
document.getElementsByClassName('cancel-btn')[0].addEventListener('click',mountorunmount)

function mountorunmount() {
  document.querySelectorAll("aside")[1].classList.toggle("hide")
  document.querySelector('main').classList.toggle('blur')
  // console.log(document.querySelector('main').className);
  
    document.querySelectorAll('nav')[1].classList.toggle("hide")
  let btn = document.getElementsByClassName('cancel-btn')
  btn[0].classList.toggle('hide')
}


let listItems = document.querySelectorAll('#list li');

listItems.forEach(function(listItem) {
  listItem.addEventListener('click', function() {
    
    listItems.forEach(function(item) {
      item.classList.remove('active-logo','active');
    });

    listItem.classList.add('active-logo','active');
  });
});


let mobilelistitems = document.querySelectorAll('#mobile-list li')


mobilelistitems.forEach(function (listitem) {
  listitem.addEventListener('click', function () {
    
    mobilelistitems.forEach(function(item) {
      item.classList.remove('active-logo','mobile-active');
    });

    listitem.classList.add('active-logo','mobile-active');
  })
})



let formSubNav = document.querySelectorAll('#form-subnav li')

formSubNav.forEach((li) => {
  li.addEventListener('click', () => {
    
    formSubNav.forEach((item) => {
      item.classList.remove('active-sub-nav')
    })

    li.classList.add('active-sub-nav')

  })
})


let bottomnav = document.querySelectorAll('.bottom-sidebar li')


bottomnav.forEach((li) => {
  li.addEventListener('click', () => {
    bottomnav.forEach((item) => {
      item.classList.remove('active-bottom-sidebar')
    })

    li.classList.add('active-bottom-sidebar')
  })

 
})











