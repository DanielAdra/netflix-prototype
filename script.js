$(document).ready(function() {
    // This makes the button interactive. When clicked, it shows an alert
    $('.cta-button').click(function() {
        alert("Welcome to Netflix Prototype! Let's start exploring.");
    });

    // Adds a hover effect on content items to change their background colour and show title
    $('.content-item').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');  // Slightly zoom in on hover
            $(this).children('img').css('opacity', '0.6');  // Darken image on hover
            $(this).children('h4').css('opacity', '1');  // Show the title on hover
        }, 
        function() {
            $(this).css('transform', 'scale(1)');  // Reset scale
            $(this).children('img').css('opacity', '1');  // Reset image opacity
            $(this).children('h4').css('opacity', '0');  // Hide the title again
        }
    );
});
