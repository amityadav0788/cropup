/*!
* Start Bootstrap - Creative v7.0.3 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

  var config = {
    apiKey: "AIzaSyCgtYutCBeRBu_Lb2cdhcZRCxOVyGJ4hw8-dRCv9JchW0OLhZvozU",
    authDomain: "cropup-8866a.firebaseapp.com",
    
    databaseURL: "https://cropup-8866a-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "cropup-8866a.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

// var messagesRef = firebase.firestore();

document
  .getElementById('contactForm')
  .addEventListener('submit', formSubmit);

  function formSubmit(e) {
    e.preventDefault();

  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let message = document.querySelector('#message').value;

  var id = "id" + Math.random()
  firebase.database().ref('data').set({
    name: name,
    email: email,
    phone: phone,
    message: message
  }).then(() => {
        document.getElementById('submitMessage').innerHTML = "Form submission successful! We will get back to you.";
        document.getElementById('submitButton').style.visibility = 'hidden'
    })
    .catch(() => {
        document.getElementById('submitMessage').innerHTML = "Error sending message!";
        document.getElementById('submitButton').style.visibility = 'hidden'
    });
  
}
