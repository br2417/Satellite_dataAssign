		/*this is an array of all of my images in the order in which I want them to appear*/

var images = ["satellite1.jpeg", "satellite2.jpeg", "satellite3.jpeg", "satellite4.jpeg", "satellite5.jpeg", "satellite6.jpeg", "satellite7.jpeg", "satellite8.jpeg", "satellite9.jpeg", "satellite10.jpeg"];

		/* This is the index of the current image in our images array */

var index = 0

		/* Below are the set button events */

function setNav() {
	console.log("setNav");

	$(".button").on("click", function() {

		var isNext = $(this).hasClass("next");

		/* The below means: if isNext is clicked on and if index is not equal to (images.length-1) then show the next image*/

		if (isNext == true && index != (images.length - 1)) {
			index = index + 1;

		/* The below means: otherwise, if isNext is not clicked on (ie. if the 'previous' button is clicked on?)
		 * and the index of the current image is more than 0, then show the previous image */

		} else if (isNext == false && index > 0) {
			index = index - 1;
		}

		/* The function below is needed to change the color of the buttons when the user is at the beginning or the end
		 * of the slideshow. The function activates a 'disabled' status in certain circumstances; the disabled status will make the selected
		 * button a different color (see the CSS style file)
		 * If the index of the current image is equal to 0, then the disabled class should be applied to the 'previous' button,
		 * otherwise, if the index of the current image is 'images.length-1' (i.e. the last image in the slideshow),
		 * then the next button should be disabled.
		 */

		if (index == 0) {
			$(".button.prev").addClass("disabled");
		} else if (index == (images.length - 1)) {
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
		}
		updateImage();

	});

}

	/* Below is the function that to change the image displayed on the webpage */
	
function updateImage() {
	$(".image-holder").html("<img src='Images/" + images[index] + "'/>");

	console.log(images[index]);
}

	/* Below is the function that says load the first image into the image holder*/

$(document).ready(function() {

	/* This shows the path that has to be taken to access the images in folder */

	$(".image-holder").html("<img src='Images/" + images[index] + "'/>");

	/*refers to style of buttons */
	$(".button.prev").addClass("disabled");

	setNav();

});

console.log(images);



