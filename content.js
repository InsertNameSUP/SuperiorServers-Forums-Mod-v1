    // Loading in
console.log("Insert Name's Forum Modification")







		function FillEmptyPinSlot(topic) {

			  for (Pinned_Slot = 1; Pinned_Slot <= 10; Pinned_Slot++) {

  				if (localStorage.getItem("Pinned_" + Pinned_Slot) == null) {
	  				localStorage.setItem('Pinned_' + Pinned_Slot, topic);
	  				console.log("Slot #" + Pinned_Slot + ", was available and was filled.");
	  				break;
	  				} 
				}
			}
			// Insert As  A <script> tag for global use cause fuck using any other method.
		$('body').prepend(`
			<script>
					function FillEmptyPinSlot(topic) {

			  for (Pinned_Slot = 1; Pinned_Slot <= 10; Pinned_Slot++) {

  				if (localStorage.getItem("Pinned_" + Pinned_Slot) == null) {
	  				localStorage.setItem('Pinned_' + Pinned_Slot, topic);
	  				localStorage.setItem('Pinned_' + Pinned_Slot + '_URL', location.href.split("?")[0])
	  				console.log("Slot #" + Pinned_Slot + ", was available and was filled.");
	  				break;
	  				} 
				}
			}
			</script>
			`)
        if (window.location.href == "https://forum.superiorservers.co/") { 
 			

        	 $('.cForumList:first').hide() // Hide the "Servers" List



        	// Functions
	        	function UpdateServerCount() {
	        		// Update DarkRP Player Count (Out of 384 Players)
	        			$(".DRP_PC").html('<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">&nbsp' + $("#DarkRP\\ \\&\\ Zombies > div.cForumGrid__hero > div > div > ul > li:nth-child(1)").text() + "/384");
							// Tool-Tip, So you can see the player count of individual servers	        		
								var DT_Pcount = $("#DarkRP\\ \\&\\ Zombies > div.cForumGrid__description.ipsFlex.ipsFlex\\:11 > div:nth-child(2) > div:nth-child(1) > a").text();
								var C18_Pcount = $("#DarkRP\\ \\&\\ Zombies > div.cForumGrid__description.ipsFlex.ipsFlex\\:11 > div:nth-child(2) > div:nth-child(2) > a").text();
								var ZRP_Pcount = $("#DarkRP\\ \\&\\ Zombies > div.cForumGrid__description.ipsFlex.ipsFlex\\:11 > div:nth-child(2) > div:nth-child(3) > a").text();
								
								$(".DRP_PC").attr("data-ipstooltip", ""); // Honestly dunno why this is needed but seems like the tool tip doesnt work without it
								$(".DRP_PC").attr("_title", "DT: " + DT_Pcount + " | C18: " + C18_Pcount + " | ZRP: " + ZRP_Pcount);
								// data-ipstooltip="" _title="Connect to Danktown" ----- !!! IMPORTANT FOR THE TWO LINES ABOVE, Adds a SUP themed tool tip.


	        		// Update CWRP Player Count (Out of 384 Players)
	        			$(".CWRP_PC").html('<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">&nbsp' + $("#CWRP > div.cForumGrid__hero > div > div > ul > li:nth-child(1)").text() + "/384");
	   						// Tool-Tip, So you can see the player count of individual servers	      		
								var CWRP_Pcount = $("#CWRP > div.cForumGrid__description.ipsFlex.ipsFlex\\:11 > div:nth-child(2) > div:nth-child(1) > a").text();
								var Training_Pcount = $("#CWRP > div.cForumGrid__description.ipsFlex.ipsFlex\\:11 > div:nth-child(2) > div:nth-child(2) > a").text();
								var Events_Pcount = $("#CWRP > div.cForumGrid__description.ipsFlex.ipsFlex\\:11 > div:nth-child(2) > div:nth-child(3) > a").text();
								
								$(".CWRP_PC").attr("data-ipstooltip", "");
								$(".CWRP_PC").attr("_title", "CWRP: " + CWRP_Pcount + " | Training: " + Training_Pcount + " | Events: " + Events_Pcount);

	        		// Update MilRP Player Count (Out of 128 Players), Tool Tip not necessary as it is a stand alone server.
	        		$(".MilRP_PC").html('<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">&nbsp' + $("#MilRP > div.cForumGrid__hero > div > div > ul > li:nth-child(1)").text() + "/128");
	        		
	        		// Update Teamspeak3 Player Count (Under Community Heading)
	        		var TS_Pcount = $("#TS3 > div.cForumGrid__hero > div > div > ul > li:nth-child(1)").text();
	        		$(".TS_PC").html('<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">&nbsp' + $("#TS3 > div.cForumGrid__hero > div > div > ul > li:nth-child(1)").text() + "/512");
	        		$(".TS_PC").attr("data-ipstooltip", "");
					$(".TS_PC").attr("_title", "TS3: " + TS_Pcount + "/512");




	        		console.log("# Insert's Forum Modification #  Updated Server Player Counts")

	        	}


	    // Player Count Related 

        	// Dark RP Player Count Bubble & Styling for all the bubbles (CSS)
	 			$("#ipsLayout_mainArea > section > ol.ipsList_reset.cForumList.splitview > li:nth-child(4) > div").prepend(`
				<style>
				h3.PlayerCount {
				background: #222;
				border-radius:25px;
				padding: 7px;
				float: right;
				}
				</style>



				<div class="DRP_PCContainer" style="text-align: right; position:relative">
					<h3 class="DRP_PC PlayerCount" style="bold:true;">
						<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">
				 	Loading... </h3>
				</div>
				`);
	 		// Clone Wars RP Player Count Bubble
	 			$("#ipsLayout_mainArea > section > ol.ipsList_reset.cForumList.splitview > li:nth-child(5) > div").prepend(`
				<div class="CWRP_PCContainer " style="text-align: right; position:relative">
					<h3 class="CWRP_PC PlayerCount" style="bold:true;">
						<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">
				 	Loading... </h3>
				</div>
				`);
	 		// Military RP Player Count Bubble
	 			$("#ipsLayout_mainArea > section > ol.ipsList_reset.cForumList.splitview > li:nth-child(6) > div").prepend(`
				<div class="MilRP_PCContainer " style="text-align: right; position:relative">
					<h3 class="MilRP_PC PlayerCount" style="bold:true;">
						<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">
				 	Loading... </h3>
				</div>
				`);
	 		// TeamSpeak3 User Count Bubble
	 			$("#ipsLayout_mainArea > section > ol.ipsList_reset.cForumList.splitview > li:nth-child(1) > div").prepend(`
				<div class="Community_Container " style="text-align: right; position:relative">
					<h3 class="TS_PC PlayerCount" style="bold:true;">
						<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">
				 	Loading... </h3>
				</div>
				`);

	 		// Initial Server Count Loader
			startup_PlayerCLoad = window.setInterval(function() {
				if ($('#MilRP > div.cForumGrid__hero > div > div > ul > li:nth-child(1)').length) {
					UpdateServerCount();
					clearInterval(startup_PlayerCLoad);
				}

			}, 100); // Load Server Count on page startup (0.1 second delay)
 			window.setInterval(UpdateServerCount, 30500); // Start a timer which is *roughly* in-line with the forum update for player count.

 	// Pinned Topic Related ------- On the Home Page

 		$("#nbRecTPTabsTabBar_yydduq41c > ul").prepend(`
 			<li role="presentation">
				<a href="#" id="nbRecTPTabsTabPinned_yydduq41c_Hide" role="tab" class="ipsTabs_item Pinned_Tab" data-action="nbRecentTopicsPostsActin" data-nbrectptabs-key="pinned" aria-selected="true">Pinned</a>
			</li>


 			`); // This Adds a Pinned Button to the Recent Page
 		$("#nbRecTPTabsTabContent_yydduq41c").append(`
 				<div id="ipsTabs_nbRecTPTabsTabBar_yydduq41c_nbRecTPTabsTabPinned_yydduq41c_Hide_panel" class="ipsTabs_panel  ipsHide" aria-hidden="true" style="display: none;">

				</div>`);
 		for (Pinned_Count = 1; Pinned_Count <= 10; Pinned_Count++) {
 			if(localStorage.getItem("Pinned_" + Pinned_Count) != null) {
 		$("#ipsTabs_nbRecTPTabsTabBar_yydduq41c_nbRecTPTabsTabPinned_yydduq41c_Hide_panel").append(`
					<ul class="ipsDataList ipsDataList_reducedSpacing">
						<li class="ipsDataItem ipsDataItem_unread">
							<div class="ipsDataItem_main ">
							` + localStorage.getItem("Pinned_" + Pinned_Count) + `
							<img src="https://s3.superiorservers.co/forums/reactions/disagree.png" class="Pin_Remover" title="Remove This Post" style="width:15px;"onclick="localStorage.removeItem('Pinned_` + Pinned_Count +`'); localStorage.removeItem('Pinned_` + Pinned_Count +`_URL'); $(this).parent().html('<p> Post Removed! </p>')"></img>
							</div>
						</li>
					</ul>


 				`);
 			}
 		}

 		$('.Pinned_TimePosted > span > span > time').each(function() {
	 		Time_Posted = new Date($(this).attr("datetime")).getTime();
			Time_Now = new Date().getTime();
			Pinned_TimeAgo = (Time_Now - Time_Posted)/1000/60/60/24
			if (Pinned_TimeAgo < 1) {
					$(this).text("Less than a Days Ago")


			} else if (Pinned_TimeAgo >= 365) {
				$(this).text("More than a Year Ago")

			} else {
					$(this).text(Math.round(Pinned_TimeAgo) + " Days Ago")

				}

		});
 }

 //Function to Pin a Post / Save a Post to Local Storage (Checkbox to Pin)


/* 

 if(window.location.href.includes("/forum/")) { // If you are on a forum page (Not inside a post)
 	$('.ipsDataItem').append(`<input type="checkbox" class="Pin_A_Post" style="filter: invert(100%); opacity: 1;"></input>`);

	$('.Pin_A_Post').change(function() {
		if($(this).is(':checked')) {
	  var topic = $(this).siblings('div.ipsDataItem_main').html();
	  	FillEmptyPinSlot(topic);

		}
	});


 } */

 // Bans Page Filters and OverHaul
if (window.location.href.includes("/bans")) { 

		$("#bans_wrapper > div:nth-child(1) > div:nth-child(1)").append(`

					<style>
				div.Filters_Insert {
										background: rgba(5,5,5, 0.4);
					           		 border-radius: 15px;
					            		text-align: center;
					            		width: 300px;
		        

								}
</style>
<div class="Filters_Insert" style="position:sticky;">
    <input type="checkbox" style="position:sticky; filter: inverted(100%);" class="DarkRP_Bans Bans_Check" `+ localStorage.getItem("DarkRP_Checkbox_Val") + `>
    		<span>&nbsp;&nbsp;DARKRP&nbsp;&nbsp;</span>
    </input>
    <input type="checkbox" style="position:sticky; filter: inverted(100%);" class="CWRP_Bans Bans_Check" `+ localStorage.getItem("CWRP_Checkbox_Val") + `>
    		<span>&nbsp;&nbsp;CWRP&nbsp;&nbsp;</span>
    </input>
	<input type="checkbox" style="position:sticky; filter: inverted(100%);" class="MILRP_Bans Bans_Check" ` + localStorage.getItem("MILRP_Checkbox_Val") + `>
			<span">&nbsp;&nbsp;MILRP&nbsp;&nbsp;</span>
	</input>
</div>










			`);


	function banTableUpdate() {

		if ($('.DarkRP_Bans:checked').val() == undefined) {
			$('tr[role=row]:contains("DarkRP")').hide();
			localStorage.setItem("DarkRP_Checkbox_Val", " ");
		} else {
			$('tr[role=row]:contains("DarkRP")').show();
			localStorage.setItem("DarkRP_Checkbox_Val", "checked");
		}
		if ($('.CWRP_Bans:checked').val() == undefined) {
			$('tr[role=row]:contains("CWRP")').hide();
			localStorage.setItem("CWRP_Checkbox_Val", " ");
		} else {
			$('tr[role=row]:contains("CWRP")').show();
			localStorage.setItem("CWRP_Checkbox_Val", "checked");
		}
		if ($('.MILRP_Bans:checked').val() == undefined) {
			$('tr[role=row]:contains("MilRP")').hide();
			localStorage.setItem("MILRP_Checkbox_Val", " ");
		} else {
			$('tr[role=row]:contains("MilRP")').show();
			localStorage.setItem("MILRP_Checkbox_Val", "checked");
		}


	}
$('.Bans_Check').change(banTableUpdate()); // Imediately update a checkbox once clicked

tableUpdater = setInterval(banTableUpdate, 500); // Timer to update the bans table incase User changes the table in any way

}
if(window.location.href.includes("/topic/")) { // If you are INSIDE the post, Add a button to pin the topic


 	// Initialize Variables and Set up a variable which contains the format for pinning a post
 	$('body').prepend(`
 		<script>
		var Post_Title = $('.ipsType_pageTitle').text()
		var Post_URL = window.location.href;
		var Post_Owner = $('.ipsType_reset').children('.ipsType_normal').html()

		var topic = \`
		<div class="ipsDataItem_main ">
									
		<h4 class="ipsDataItem_title ipsContained_container">
		<span class="ipsType_break ipsContained">
		<a href="\` + Post_URL + \`" class="" title="\` + Post_Title + \`" data-ipshover="" data-ipshover-target="\` + Post_URL + \`?preview=1" data-ipshover-timeout="1.5" id="ips_uid_770_3">
		<span>
		\` + Post_Title + \`
		</span>
		</a>
		</span>
		</h4>
		<div class="ipsDataItem_meta ipsType_reset ipsType_light ipsType_blendLinks Pinned_TimePosted">
		<span>
		\` + Post_Owner + \`
		</div>
		\`;
		</script>
		`);


 				for (Pinned_Slot = 1; Pinned_Slot <= 10; Pinned_Slot++) {

	  				if (localStorage.getItem("Pinned_" + Pinned_Slot + "_URL") == location.href.split("?")[0]) {

	  						$('#ipsLayout_mainArea > div.ipsPageHeader.ipsResponsive_pull.ipsBox.ipsPadding.sm\\:ipsPadding\\:half.ipsMargin_bottom > div.ipsPageHeader__meta.ipsFlex.ipsFlex-jc\\:between.ipsFlex-ai\\:center.ipsFlex-fw\\:wrap.ipsGap\\:3 > div.ipsFlex-flex\\:01.ipsResponsive_hidePhone > div').append(`
							<button style="background: rgba(23, 126, 201, 1); border-radius: 5px; border: none; padding: 3px; height: 30px; color: white;">&nbspPost Pinned!&nbsp</button>
							`);

							break;
		  				} else {
		  					if (Pinned_Slot == 10) { 
		  					$('#ipsLayout_mainArea > div.ipsPageHeader.ipsResponsive_pull.ipsBox.ipsPadding.sm\\:ipsPadding\\:half.ipsMargin_bottom > div.ipsPageHeader__meta.ipsFlex.ipsFlex-jc\\:between.ipsFlex-ai\\:center.ipsFlex-fw\\:wrap.ipsGap\\:3 > div.ipsFlex-flex\\:01.ipsResponsive_hidePhone > div').append(`
							<button style="background: rgba(255, 255, 255, 0.8); border-radius: 5px; border: none; padding: 3px; height: 30px" onclick="FillEmptyPinSlot(window.topic); $(this).text('Post Pinned!'); $(this).attr('onclick',''); $(this).css('background', 'rgba(23, 126, 201, 1)'); $(this).css('color', 'white');">&nbspPin Post&nbsp</button>
							`);

		  				}

		  			}
				}

/*
		$('#ipsLayout_mainArea > div.ipsPageHeader.ipsResponsive_pull.ipsBox.ipsPadding.sm\\:ipsPadding\\:half.ipsMargin_bottom > div.ipsPageHeader__meta.ipsFlex.ipsFlex-jc\\:between.ipsFlex-ai\\:center.ipsFlex-fw\\:wrap.ipsGap\\:3 > div.ipsFlex-flex\\:01.ipsResponsive_hidePhone > div').append(`
			<button style="background: rgba(255, 255, 255, 0.8); border-radius: 5px; border: none; padding: 3px; height: 30px" onclick="window.FillEmptyPinSlot(window.topic); $(this).text('Post Pinned!'); $(this).attr('onclick',''); $(this).css('background', 'rgba(23, 126, 201, 1)'); $(this).css('color', 'white');">Pin Post</button>



			`)

*/

}

