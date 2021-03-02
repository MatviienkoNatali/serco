var acc = document.getElementsByClassName("accordion");
var i;
var j;
var panel = document.getElementsByClassName("panel")


for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("mouseenter", function() {
    this.classList.add("active");
     var panel = this.nextElementSibling.classList.add("p");    
  });
  
for (j = 0; j < panel.length; j++){
		panel[j].addEventListener("mouseenter", function() {
		this.classList.add("p");
		var acc = this.previousElementSibling.classList.add("active");
		
	});
	}
  acc[i].addEventListener("mouseleave", function() {
    this.classList.remove("active");
    // var panel = this.nextElementSibling;
    // panel.classList.remove("p");
    var panel = this.nextElementSibling.classList.remove("p");
    
  });

for (j = 0; j < panel.length; j++){
		panel[j].addEventListener("mouseleave", function() {
		this.classList.remove("p");
		var acc = this.previousElementSibling.classList.remove("active");
		
	});
	}

	
}

 //  var active = document.getElementsByClassName('p');

	// // If there are any matching elements and it is not the same one that has just been clicked on
	// if (active.length && active[0] !== this) {
	//     active[0].classList.remove('p');
	// }