$(document).ready(function() {
    // Message that pops up when the "Get Started" button is clicked
    $('.cta-button').click(function() {
        alert("Welcome to Netflix Prototype! Let's start exploring.");
    });

    // Toggle for showing/hiding the navbar on mobile view
    $('.hamburger').click(function() {
        $('.navbar').toggleClass('active');
    });

    // Display message after the contact form is submitted
    $('#contact-form').submit(function(event) {
        event.preventDefault(); // Prevents the page from reloading after form submission
        alert("Thank you for contacting us! We'll get back to you soon.");
    });

    // Effects when hovering over content items
    $('.content-item').hover(
        function() {
            // Slightly enlarge the item and dim the image
            $(this).css('transform', 'scale(1.05)');
            $(this).children('img').css('opacity', '0.6');
            $(this).children('h4').css('opacity', '1');
        }, 
        function() {
            // Return the item to its original state
            $(this).css('transform', 'scale(1)');
            $(this).children('img').css('opacity', '1');
            $(this).children('h4').css('opacity', '0');
        }
    );
});
