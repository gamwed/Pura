document.addEventListener('DOMContentLoaded', function(){	

	window.addEventListener('scroll', function() {
		var price = document.getElementById('price')
		var scrolled = window.pageYOffset;
		console.log(scrolled);

		function e(){

			if (scrolled>250) {
				price.setAttribute('style', 'position: fixed; top: 250px');
			}
			else if(scrolled<250) {
				price.setAttribute('style', 'position: absolute');
			}
			if(scrolled>700) 
			{
				price.setAttribute('style', 'top: 950px; position: absolute;');
			}

		};

		e();

		});
})

