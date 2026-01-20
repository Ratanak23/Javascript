function change_image(images_id, images_name) {
  document.getElementById(images_id).src =
    "images/" + images_name + ".jpg";
}

function change_border(images_id, color) {
  document.getElementById(images_id).style.borderColor = color;
  document.getElementById(images_id).style.borderWidth = '10px';
}
