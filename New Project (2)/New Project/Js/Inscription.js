$(document).ready(function(){
    $('#register').on('submit', function(e) {
        var password = $('#pw').val();
        var confirmPassword = $('#pwr').val();
        if (password !== confirmPassword) {
            $('#message').text('Mot de passes différént !');
            e.preventDefault(); // Prevent form submission
        } else {
            $('#message').text(''); // Clear any previous error message
        }
    });

    $('#password, #confirmPassword').on('input', function() {
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        if (password !== confirmPassword) {
            $('#message').text('Mot de passes différént !');
        } else {
            $('#message').text('');
        }
    });
  });