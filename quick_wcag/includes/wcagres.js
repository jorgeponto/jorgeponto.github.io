// Global variables
var currentLink; // Stores last link selected so focus can be returned there easily. 

function initTabs() {
	
		// Bind key handlers to all tabs on the page
		//$('a[role=tab]').on('keyup', function(e) {
		$(document.body).on('keyup', 'a[role=tab]', function(e) {
			// Get id of current tab
			var current_tab_id = $(this).attr('id');
			// Get array of tabs in this tablist an an array of ids
			var tablist_id = $(this).closest('ul[role=tablist]').attr('id');
			var tabArray = [];
			var tablistdata = $('#' + tablist_id).find('a[role=tab]').each(function() { tabArray.push(this.id); }) 
			var tabpos = jQuery.inArray(current_tab_id, tabArray);
			
			
			// Left (37) or up (38) pressed
			if (e.which == 37 || e.which == 38) { 	 
				// Check position in tabs array, and step to previous tab if available
				if (tabpos > 0) {
					// Current tab is not first one, step back
					target_tab_pos = tabpos - 1;
					target_tab_id = tabArray[target_tab_pos];					
					moveTab(current_tab_id, target_tab_id);
				
				} 	
			}
			
			// Right (39) or down (40) pressed
			if (e.which == 39 || e.which == 40) {		
				// Check position in tabs array, and step to next tab if available
				if (tabpos < (tabArray.length - 1)) {
					// Current tab is not first one, step back
					target_tab_pos = tabpos + 1;
					target_tab_id = tabArray[target_tab_pos];
					moveTab(current_tab_id, target_tab_id);
				} 
			}
		});
				
		// Add mouse functionality to tabs as well!
		//$('a[role=tab]').on("click", function(e) {
		$(document.body).on('click', 'a[role=tab]', function(e) {
			// Get id of target tab (clicked)
			var target_tab_id = $(this).attr('id');
			// Get the parent tablist id
			var tablist_id = $(this).closest('ul[role=tablist]').attr('id');
			// Now to get the id of the currently selected tab
			var current_tab_id = $('#'+tablist_id).find('a[aria-selected=true]').attr('id');

			
			moveTab(current_tab_id, target_tab_id);
			e.preventDefault();
			
		});
		
		// Add keyhandler to overlay to allow escape to close it down. 
		$(document.body).on('keyup', '#success-criteria', function(e) {
			if (e.which == 27) {
				closeOverlay();
			}
			e.preventDefault();
		});
		
		
	}
	
	function moveTab(current_tab_id, target_tab_id) {
		// Remove aria-selected, tabindex, and selected class from old tab. Also hide associated tabpanel
		var current_tabpanel_id = $('#' + current_tab_id).attr('aria-controls');
		$('#'+current_tab_id).attr('aria-selected','false').attr('tabindex','-1')
		$('#'+current_tab_id).parent().removeClass('pure-menu-selected');
		$('#'+current_tab_id).removeClass('tab-selected');
		$('#'+current_tabpanel_id).hide();
		
		// Set focus, aria-selected and focus on new tab, along with tab-selected class. Also show new tabpanel
		$('#'+target_tab_id).focus().attr('tabindex','0').attr('aria-selected','true').addClass('pure-menu-selected'); 
		$('#'+target_tab_id).parent().addClass('pure-menu-selected');
		$('#'+target_tab_id).removeClass('tab').addClass('tab-selected');
		
		// Show associated tabpanel, and add to focus order
		var target_tabpanel_id = $('#'+target_tab_id).attr('aria-controls');
		$('#'+target_tabpanel_id).show();
}

	function closeOverlay() {
		// Delete overlay contents!
		$('#success-criteria').empty();
		// Show rest of page
		$('#header-container, #preferences-container, #main').show();
		
		// Set focus back to last link
		$("a[data-wcag-id='" + currentLink + "']").focus();	
	}
	
	$(function() {
		// Define global variable for last link selected. 
		
		
		$('#toggle_checkpoints').hide();	// Hide form button - only useful if JS disabled. 
		
		// Hide the preferences div and set the aria-expanded attribute of its controller to false
		$('#preferences').hide();
		$('a[aria-controls="preferences"]').attr('aria-expanded', 'false'); 
		
		// State total of displayed success criteria
		$('#currentScCount').text(countLevelA + countLevelAA + countLevelAAA);
		
		// Add event listener to preferences link for hiding it
		$('a[aria-controls="preferences"]').on("click", function(e) {
			// Toggle display of preferences section and toggle value of (this) aria-expanded state!
			$('#preferences').toggle();
			$('a[aria-controls="preferences"]').attr('aria-expanded', $('a[aria-controls="preferences"]').attr('aria-expanded') == "false" ? "true" : "false");

			// Toggle the expand\collapse visual icon
			$('a[aria-controls="preferences"]').children('i').toggleClass("fa-plus-circle").toggleClass("fa-minus-circle");
			// Prevent default action!
			// e.preventDefault();
			return false;
		});
		
		// =========================================================
		// Display preferences
		//
		// Add event listeners to checkboxes for toggling display of success criteria levels
		// =========================================================
		$('.toggle_sc').on("click", function(e) {
			var level = $(this).attr('id').toUpperCase();

			//Now to toggle level! Hide the parent <li> of all <a elements with custom data attribute data-wcag-level
			$('a[data-wcag-level=' + level + ']').parent('li').toggle();
			
			// Update number of displayed success criteria
			var currentCount = $('#currentScCount').text();
			
			// Update current count of displayed checkpoints
			// Note that parseint is used as otherwise existing count and new count values are treated as strings and concatenated instead of 
			// being mathematically added. Probably a better way to do this!
			$('#currentScCount').text( $(this).is(':checked') ?  parseInt(currentCount) + parseInt($(this).attr('data-sc-count')) : currentCount - $(this).attr('data-sc-count') );
		});
		
		
		
		// Amend links to display a lightbox
		$('.sc').on("click", function(e) {
			// Get ID of SC that user clicked.
			var id = $(this).attr('data-wcag-id');
			
			// Store this link in currentLink
			currentLink = id;
			
			// Hide heading-container, preferences-container, main
			$('#header-container, #preferences-container, #main').hide();
			
			// Get reference data
			var referenceUrl = "display.php?id=" + id;
			
			//  Populate element with data
			$('#success-criteria').load(referenceUrl, function() {
				initTabs();
				$('#scHeading').focus();
			});
			
			e.preventDefault();
		});
		
		$(document).on('click', 'a#closeOverlay', function(e) {
				closeOverlay();
			e.preventDefault();
		})
		
		
		
});










