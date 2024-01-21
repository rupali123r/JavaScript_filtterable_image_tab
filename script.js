


//select all filter buttons and filterable cards
		const filterButtons = document.querySelectorAll(".filter_buttons button");
		const fliterableCards = document.querySelectorAll(".filterable_cards .card");


		// define the filterCards function
		const filterCards = e =>{
			document.querySelector(".active").classList.remove("active");
			e.target.classList.add("active");
			//console.log(e.target);

			// Iterate over each filterable card
			fliterableCards.forEach(card =>{
				 // add "hide" class to hide the card initially
				 card.classList.add("hide");
				 // check if the card matches the selected filter or "all" is selected
				if (card.dataset.name ===  e.target.dataset.name || e.target.dataset.name === "all"){
					card.classList.remove("hide");
				}
			});


		};





		// console.log(filterButtons, fliterableCards)

		// Add click event listener to filter button
		filterButtons.forEach(button => button.addEventListener("click", filterCards));




	