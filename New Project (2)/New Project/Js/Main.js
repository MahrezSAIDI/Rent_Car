$.ajax({
    url: 'get_cars.php', //Le javaScript doit recuperer des fichiers depuis php. Afin de créer les options pour la balise <select>
    type: 'GET',
    dataType: 'json',
    success: function (data) { //creation liste des category (recuperé depuis la bd)

        var carSelect = $('#cat');
        data.forEach(function (car) {
            carSelect.append('<option value="' + car.id + '">' + car.category + '</option>');
        });
    }
});