<script>
	/* Initialize foundation framework */
	$(document).foundation();
	
	/* JQuery on finish load */
	$(document).ready(function()
	{
		/*$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		minWidth	: 600
		});*/
		
		{if segment_1=="pricing"}
			/* Initial Calculation */
			calculateSlider();
		 {/if}
		 
		 {if segment_1 == 'courses' AND segment_2 != ''}
			 
			 $('[data-accordion]').accordion({
				singleOpen: false,
				groupElement: 'catalog'
			});
			$('#course-information [data-accordion]').accordion({
				singleOpen: false,
				groupElement: 'course-information'
			});
		 {/if}
		 
		 {if segment_1=="active-shooter"}
		 	/*$('.ASTakeaways').slick({
				dots: true
			});*/
		  {/if}
		  {if segment_2=="not-so-great-moments-in-safety"}
		  		$('.slider-for').slick({
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: true,
				  fade: true,
				  asNavFor: '.slider-nav',
				  prevArrow:"<img class='a-left control-c prev slick-prev' style='left:75px; width:50px; height:75px; z-index:1001' src='/assets/img/arrow-left.png'>",
				  nextArrow:"<img class='a-right control-c next slick-next' style='right:75px; width:50px; height:75px;' src='/assets/img/arrow-right.png'>"
				});
				$('.slider-nav').slick({
				  slidesToShow: 5,
				  slidesToScroll: 1,
				  asNavFor: '.slider-for',
				  dots: false,
				  centerMode: true,
				  focusOnSelect: true,
				  prevArrow:"<img class='a-left control-c prev slick-prev' style='width:20px; height:30px;' src='/assets/img/sm-arrow-left.png'>",
				  nextArrow:"<img class='a-right control-c next slick-next' style='width:20px; height:30px;' src='/assets/img/sm-arrow-right.png'>"
				});
		   {/if}
	});
		  
	
	{if segment_1=="pricing"}
		$('#numberEmployees').change(function() {

			var empRange = $('#numberEmployees').val();

			if(empRange < 75)
			{
				$('#numberEmployees').val(75);
				$('.range-slider-handle').css("transform", "translateX(-1px)");
			}

			if(empRange > 1000)
			{
				$('#numberEmployees').val(1000);
			}

		});
	
		 $('[data-slider]').on('change.fndtn.slider', function(){
				calculateSlider();
			});

			function calculateSlider()
			{

				var numEmployees = $('#numberEmployees').val();					//User input of average hourly employee wages
				var costPerEmployee = 5;
				var totalCost = 0;

				//monthly cost, number of employees x cost per employee
				monthlyCost = numEmployees*costPerEmployee;

				//annual costs, number of employees x cost per employee x 12 months. 
				annualCost = monthlyCost*12;

				if(numEmployees < 75)
				{
					numEmployees = 75;
					monthlyCost = 375;
					annualCost = 4500;		
				}

				$('#cost').text(numeral(totalCost).format('$0,0.00'));

				//for testing
				$('#numEmployees').text(numeral(numEmployees).format('0,0'));
				$('#costPerEmployee').text(numeral(costPerEmployee).format('$0,0.00'));
				$('#monthlyCost').text(numeral(monthlyCost).format('$0,0'));
				$('#monthlyCostCell').text(numeral(monthlyCost).format('$0,0'));
				$('#annualCost').text(numeral(annualCost).format('$0,0'));
				$('#numberEmployees').text(numeral(numEmployees).format('0'));	
				if(numEmployees >= 250)
				{
					if ( !over250 ) {
						//console.log('oh you fancy');
						$('#over250').foundation('reveal', 'open');
						over250 = true;
					}

							return false;
						} else {
					over250 = false;
				  }

			};
	 {/if}
</script>


    {if segment_2 == 'news' OR segment_1 == "main"}
    <script type="text/javascript">
    $('.months').hide();
    $('.year').click(function() {
        $(this).find('ul').slideToggle();
    });	
    </script>
    {/if}
    

	{if segment_1=="blog"}
		<script src="/assets/js/validate/jquery.validate.min.js"></script> 

		<script type="text/javascript">
				var aoProtocol = location.protocol;
				if ( aoProtocol.indexOf('http') < 0 ) aoProtocol = 'http:';
				var aoCAP = {
				aid: '2931', 	
				fid: '001c', 
				did: 'd-0001', 
				server: 'go.vividlearningsystems.com', 
				formId: 'blogNewsletter', 
				protocol: aoProtocol 
				};
				document.write( '<script type="text/javascript" src="'+aoCAP.protocol+'//'+aoCAP.server+'/acton/js/formcap.min.js"><'+'/script>' );
		</script>

		<script type="text/javascript">
			$(document).ready(function() 
			{
				//get cookie info if it exists.
				var myCookie = getCookie("blogSignup");
				if(myCookie == "")
				{
					//do nothing?
					document.getElementById("sticky").style.display = "block";
				}
				else if(myCookie != "")
				{
					document.getElementById("sticky").style.display = "none";
				}

				
			});

			$( "#blogNewsletter" ).submit(function( event ) 
			{
				if ( $( "#blogNewsletter" ).valid() ) {

					 setCookie();
				}
			  return false;
			});

			function setCookie()
			{

				var d = new Date();

				//create date of expiration - 1 month
				d.setTime(d.getTime() + (30*24*60*60*1000));
				var expires = "expires="+d.toUTCString();
				document.cookie = "blogSignup=yes; " + expires;

				//display thank you. 
				document.getElementById("sticky").innerHTML = "<div class=\"row subscribe-bar\"><div class=\"small-12 columns\"><h2 class=\"section-header\">Subscribe to our blog</h2></div></div>";
				//$("sticky").html("testing");
				return false;

			}

			function getCookie(cname) 
			{
				var name = cname + "=";
				var ca = document.cookie.split(';');
				for(var i=0; i<ca.length; i++) 
				{
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1);
					if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
				}
				return "";
			}
		</script>
	{/if}