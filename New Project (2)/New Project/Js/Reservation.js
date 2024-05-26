$(document).ready(function () {




    $.ajax({
        url: 'get_cars.php', //Le javaScript doit recuperer des fichiers depuis php. Afin de créer les options pour la balise <select>
        type: 'GET',
        dataType: 'json',
        success: function (data) { //creation liste des voitures (recuperé depuis la bd)

            var carSelect = $('#car');
            data.forEach(function (car) {
                carSelect.append('<option value="' + car.id + '">' + car.car_name + '</option>');
            });
        }
    });

    $('#r-btn').on('click', function () {
        var formData = $('#form-r').serialize();
        $.ajax({
            url: 'rent_car.php', //Envoyer les informations de la reservations vers le fichier php ou autre.
            type: 'POST',
            data: formData,
            success: function (response) {
                alert(response.message);
            }
        });
    });
});