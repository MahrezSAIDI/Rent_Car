$(document).ready(function () {

  $("#flip1").click(function () {
    $("#panel1").slideToggle("slow");
  });

  $("#flip2").click(function () {
    $("#panel2").slideToggle("slow");
  });

  $("#flip3").click(function () {
    $("#panel3").slideToggle("slow");
  });
  


  $.ajax({
    url: 'voitures.php',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      data.forEach(function (car) {
        // Example: Creating sections for each car

        var carS = '<div class="col">' +
          '<div class="card" >' + '<img src="' + car.img_src + '" height="170rem" class="card-img-top" >'
          + '<div class="card-body">'
          + ' <h5 class="card-title">' + car.car_name + '</h5>'
          + '<p class="card-text" style="text-align: left;">'
          + '<img src="Img/transmission.svg" height="16" width="16">' + car.transmission + '<br>'
          + '<img src="Img/fuel-pump.svg" height="16" width="16">' + car.energy + '<br>'
          + '<span style="color: red;">' + car.prix + ' dzd/Jour</span>'
          + '</p>'

          + '<button type="button" class="btn btn-outline-danger m-0" data-toggle="modal"'
          + 'data-target="#' + car.car_name + '" style="border-color: aliceblue;">Détails +</button>'

          + '<button type="button" class="btn btn-danger m-0">Réservez</button>'
          + '</div>'
          + '</div>'
          + '</div>'

          + '<div class="modal fade" id="' + car.car_name + '" tabindex="-1" role="dialog"'
          + 'aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'
          + '<div class="modal-dialog modal-dialog-centered" role="document">'
          + '<div class="modal-content">'
          + '<div class="modal-header">'
          + '<h5 class="modal-title" id="exampleModalLongTitle">' + car.car_name + '</h5>'
          + '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
          + '<span aria-hidden="true">&times;</span>'
          + '</button>'
          + '</div>'
          + '<div class="modal-body">'
          + '<p style="text-align: left;"><img src="Img/transmission.svg" height="16" width="16">' + car.transmission + '</p>'
          + '<p style="text-align: left;"><img src="Img/fuel-pump.svg" height="16" width="16">' + car.energy + '</p>'
          + '<p style="text-align: left;"><img src="Img/seat.svg" height="16" width="16">' + car.sieges + '</p>'
          + '<p style="text-align: left;"><img src="Img/door.svg" height="16" width="16">' + car.portes + '</p>'
          + '</div>'
          + '<div class="modal-footer">'
          + '<button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>'
          + '</div></div></div></div>';

        // Append the section to a container div
        
        if (car.category=='luxe') {
          $('#luxe').append(carS);
        }

        if (car.category=='suv') {
          $('#suv').append(carS);
        }

        if (car.category=='hatchback') {
          $('#hatchback').append(carS);
        }

        if (car.category=='coupe') {
          $('#coupe').append(carS);
        }

        if (car.category=='minivan') {
          $('#minivan').append(carS);
        }
       
        

      });
    },
    error: function (xhr, status, error) {
      console.error('AJAX Error:', status, error);
    }
  });
});

