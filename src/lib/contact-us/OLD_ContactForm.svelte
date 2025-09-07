<script>
	import { buttonVariants } from '$components/button';
	import { cn } from '$lib/common/utils';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta HTTP-EQUIV="content-type" CONTENT="text/html;charset=UTF-8" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
</svelte:head>

<!-- Note :
   - You can modify the font style and form style to suit your website. 
   - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. 
   - The Mandatory check script can modified as to suit your business needs. 
   - It is important that you test the modified form before going live.-->
<div
	id="crmWebToEntityForm"
	class="zcwf_lblTopBottom crmWebToEntityForm"
	style="background-color: white;color: black;max-width: 900px;"
>
	<style>
		.wf_customMessageBox {
			/* font-family: Arial, Helvetica, sans-serif; */
			color: #132c14;
			background: #f5faf5;
			box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
			max-width: 90%;
			width: max-content;
			word-break: break-word;
			z-index: 11000;
			border-radius: 6px;
			border: 1px solid #a9d3ab;
			min-width: 100px;
			padding: 10px 15px;
			display: flex;
			align-items: center;
			position: fixed;
			top: 20px;
			left: 50%;
			transform: translate(-50%, 0);
		}
		.wf_customCircle {
			position: relative;
			background-color: #12aa67;
			border-radius: 100%;
			width: 20px;
			height: 20px;
			flex: none;
			margin-right: 7px;
		}
		.wf_customCheckMark {
			box-sizing: unset !important;
			position: absolute;
			transform: rotate(45deg) translate(-50%, -50%);
			left: 6px;
			top: 9px;
			height: 8px;
			width: 3px;
			border-bottom: 2px solid #fff;
			border-right: 2px solid #fff;
		}
		.wf_customClose {
			box-sizing: border-box;
			position: relative;
			width: 18px;
			height: 18px;
		}
		.wf_customClose::after,
		.wf_customClose::before {
			content: '';
			display: block;
			box-sizing: border-box;
			position: absolute;
			width: 12px;
			height: 1.5px;
			background: #616e88;
			transform: rotate(45deg);
			border-radius: 5px;
			top: 8px;
			left: 8px;
		}
		.wf_customClose::after {
			transform: rotate(-45deg);
		}
	</style>
	<div class="wf_customMessageBox" id="wf_splash" style="display:none">
		<div class="wf_customCircle">
			<div class="wf_customCheckMark"></div>
		</div>
		<span id="wf_splash_info"> </span>
	</div>
	<form id="webform5683047000005601023" name="WebToLeads5683047000005601023">
		<input
			type="text"
			style="display: none"
			name="xnQsjsdp"
			value="889b75d7fb885f08c308993dcf1295ff8e4db04bb16c4c721982deff699c6780"
		/>
		<input type="hidden" name="zc_gad" id="zc_gad" value="" />
		<input
			type="text"
			style="display: none"
			name="xmIwtLD"
			value="e7deb13f7ec4ba28e7b3cf21f7c2440cee698f992bf912e0a8994385a6ffb9d34242644ef970eb49900485af88919c8f"
		/>
		<input type="text" style="display: none" name="actionType" value="TGVhZHM=" />
		<input type="text" style="display: none" name="returnURL" value="null" />
		<input type="hidden" style="display:none;" name="sessionId" value={$page.data.sessionId} />
		<!-- Do not remove this code. -->
		<style>
			html,
			body {
				margin: 0px;
			}
			#crmWebToEntityForm.zcwf_lblTopBottom {
				width: 100%;
				margin: 0 auto;
				box-sizing: border-box;
			}
			#crmWebToEntityForm.zcwf_lblTopBottom * {
				box-sizing: border-box;
			}
			#crmWebToEntityForm {
				text-align: left;
			}
			#crmWebToEntityForm * {
				direction: ltr;
			}
			.zcwf_lblTopBottom.cpT_primaryBtn:hover {
				background: linear-gradient(#02acff 0, #006be4 100%) no-repeat padding-box !important;
				box-shadow: 0 -2px 0 0 #0159b9 inset !important;
				border: 0 !important;
				color: #fff !important;
				outline: 0 !important;
			}

			/* Input styles */
			.zcwf_lblTopBottom .zcwf_col_fld input[type='text'],
			input[type='email'],
			input[type='password'],
			.zcwf_lblTopBottom .zcwf_col_fld textarea {
				width: 100%;
				border: 1px solid #c0c6cc !important;
				resize: none;
				border-radius: 4px;
				float: left;
				padding: 4px 6px;
			}

			/* Label styles */
			.zcwf_lblTopBottom .zcwf_col_lab {
				width: 30%;
				word-break: break-word;
				padding: 0px 6px 0px;
				margin-right: 10px;
				margin-top: 5px;
				font-size: 14px;
			}

			.zcwf_lblTopBottom .zcwf_col_fld {
				width: 60%;
				padding: 0px 6px 0px;
				position: relative;
				margin-top: 5px;
			}
			.zcwf_lblTopBottom .zcwf_privacy {
				padding: 6px;
			}
			.zcwf_lblTopBottom .wfrm_fld_dpNn {
				display: none;
			}
			.dIB {
				display: inline-block;
			}
			.zcwf_lblTopBottom .zcwf_col_fld_slt {
				width: 60%;
				border: 1px solid #ccc;
				background: #fff;
				border-radius: 4px;
				font-size: 12px;
				float: left;
				resize: vertical;
				padding: 2px 5px;
			}
			.zcwf_lblTopBottom .zcwf_row:after,
			.zcwf_lblTopBottom .zcwf_col_fld:after {
				content: '';
				display: table;
				clear: both;
			}
			.zcwf_lblTopBottom .zcwf_col_help {
				float: left;
				margin-left: 7px;
				font-size: 12px;
				max-width: 35%;
				word-break: break-word;
			}
			.zcwf_lblTopBottom .zcwf_help_icon {
				cursor: pointer;
				width: 16px;
				height: 16px;
				display: inline-block;
				background: #fff;
				border: 1px solid #c0c6cc;
				color: #c1c1c1;
				text-align: center;
				font-size: 11px;
				line-height: 16px;
				font-weight: bold;
				border-radius: 50%;
			}
			.zcwf_lblTopBottom .zcwf_row {
				margin: 16px 0px;
			}
			.zcwf_lblTopBottom .formsubmit {
				margin-right: 5px;
				cursor: pointer;
			}
			.zcwf_lblTopBottom .zcwf_privacy_txt {
				width: 90%;
				color: rgb(0, 0, 0);
				font-size: 12px;
				display: inline-block;
				vertical-align: top;
				color: #313949;
				padding-top: 2px;
				margin-left: 6px;
			}
			.zcwf_lblTopBottom .zcwf_button {
				cursor: pointer;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.zcwf_lblTopBottom .zcwf_tooltip_over {
				position: relative;
			}
			.zcwf_lblTopBottom .zcwf_tooltip_ctn {
				position: absolute;
				background: #dedede;
				padding: 3px 6px;
				top: 3px;
				border-radius: 4px;
				word-break: break-word;
				min-width: 100px;
				max-width: 150px;
				color: #313949;
				z-index: 100;
			}
			.zcwf_lblTopBottom .zcwf_ckbox {
				float: left;
			}
			.zcwf_lblTopBottom .zcwf_file {
				width: 35%;
				box-sizing: border-box;
				float: left;
			}
			.cBoth:after {
				content: '';
				display: block;
				clear: both;
			}
			@media all {
				.zcwf_lblTopBottom .zcwf_col_lab,
				.zcwf_lblTopBottom .zcwf_col_fld {
					width: auto;
					float: none !important;
				}
				.zcwf_lblTopBottom .zcwf_col_help {
					width: 40%;
				}
			}
		</style>
		<div class="zcwf_row">
			<div class="zcwf_col_lab">
				<label for="First_Name">
					First Name
					<span style="color:red;"> * </span>
				</label>
			</div>
			<div class="zcwf_col_fld">
				<input
					type="text"
					id="First_Name"
					aria-required="true"
					aria-label="First Name"
					name="First Name"
					maxlength="40"
					autocomplete="given-name"
				/>
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab">
				<label for="Last_Name">
					Last Name
					<span style="color:red;"> * </span>
				</label>
			</div>
			<div class="zcwf_col_fld">
				<input
					type="text"
					id="Last_Name"
					aria-required="true"
					aria-label="Last Name"
					name="Last Name"
					maxlength="80"
					autocomplete="family-name"
				/>
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab">
				<label for="Email"> Email <span style="color: red"> * </span> </label>
			</div>
			<div class="zcwf_col_fld">
				<input
					type="email"
					id="Email"
					aria-required="true"
					aria-label="Email"
					name="Email"
					maxlength="100"
				/>
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab">
				<label for="Phone">
					Phone
					<span style="color:red;"> * </span>
				</label>
			</div>
			<div class="zcwf_col_fld">
				<input
					type="text"
					id="Phone"
					aria-required="true"
					aria-label="Phone"
					name="Phone"
					maxlength="30"
					autocomplete="tel"
				/>
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab">
				<label for="Street">
					Street Address <span style="color: red"> * </span>
				</label>
			</div>
			<div class="zcwf_col_fld">
				<input
					type="text"
					id="Street"
					aria-required="true"
					aria-label="Street"
					name="Street"
					maxlength="250"
				/>
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab">
				<label for="City"> City <span style="color: red"> * </span> </label>
			</div>
			<div class="zcwf_col_fld">
				<input
					type="text"
					id="City"
					aria-required="true"
					aria-label="City"
					name="City"
					maxlength="100"
				/>
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab">
				<label for="Description"> Please Share Job Details </label>
			</div>
			<div class="zcwf_col_fld">
				<textarea
					aria-multiline="true"
					id="Description"
					aria-required="false"
					aria-label="Description"
					name="Description"
				></textarea>
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab"></div>
			<div class="zcwf_col_fld">
				<input
					class="{cn(
						buttonVariants({
							variant: 'default',
							size: 'default',
							className: 'formsubmit zcwf_button'
						})
					)}}"
					type="submit"
					id="formsubmit"
					value="Submit"
					aria-label="Submit"
					title="Submit"
				/>
				<input
					type="reset"
					class="{cn(
						buttonVariants({
							variant: 'outline',
							size: 'default',
							className:
								'zcwf_button text-secondary border-secondary hover:bg-white hover:border-secondary hover:text-secondary'
						})
					)}}"
					name="reset"
					value="Reset"
					aria-label="Reset"
					title="Reset"
				/>
			</div>
		</div>
		<script>
			function validateEmail5683047000005601023() {
				var form = document.forms['WebToLeads5683047000005601023'];
				var emailFld = form.querySelectorAll('[type=email]');
				var i;
				for (i = 0; i < emailFld.length; i++) {
					var emailVal = emailFld[i].value;
					if (emailVal.replace(/^\s+|\s+$/g, '').length != 0) {
						var atpos = emailVal.indexOf('@');
						var dotpos = emailVal.lastIndexOf('.');
						if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
							alert('Please enter a valid email address. ');
							emailFld[i].focus();
							return false;
						}
					}
				}
				return true;
			}
			function checkMandatory5683047000005601023() {
				var mndFileds = new Array('First Name', 'Last Name', 'Email', 'Phone', 'Street', 'City');
				var fldLangVal = new Array(
					'First\x20Name',
					'Last\x20Name',
					'Email',
					'Phone',
					'Street\x20Address',
					'City'
				);
				for (i = 0; i < mndFileds.length; i++) {
					var fieldObj = document.forms['WebToLeads5683047000005601023'][mndFileds[i]];
					if (fieldObj) {
						if (fieldObj.value.replace(/^\s+|\s+$/g, '').length == 0) {
							if (fieldObj.type == 'file') {
								alert('Please select a file to upload.');
								fieldObj.focus();
								return false;
							}
							alert(fldLangVal[i] + ' cannot be empty.');
							fieldObj.focus();
							return false;
						} else if (fieldObj.nodeName == 'SELECT') {
							if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
								alert(fldLangVal[i] + ' cannot be none.');
								fieldObj.focus();
								return false;
							}
						} else if (fieldObj.type == 'checkbox') {
							if (fieldObj.checked == false) {
								alert('Please accept ' + fldLangVal[i]);
								fieldObj.focus();
								return false;
							}
						}
						try {
							if (fieldObj.name == 'Last Name') {
								name = fieldObj.value;
							}
						} catch (e) {}
					}
				}
				if (!validateEmail5683047000005601023()) {
					return false;
				}
				var urlparams = new URLSearchParams(window.location.search);
				if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
					var webform = document.getElementById('webform5683047000005601023');
					var service = urlparams.get('service');
					var smarturlfield = document.createElement('input');
					smarturlfield.setAttribute('type', 'hidden');
					smarturlfield.setAttribute('value', service);
					smarturlfield.setAttribute('name', 'service');
					webform.appendChild(smarturlfield);
				}
				document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
				return true;
			}
			$(document).ready(function () {
				$('#webform5683047000005601023').submit(function (e) {
					var ismandatory = checkMandatory5683047000005601023();
					e.preventDefault();
					if (ismandatory) {
						if (typeof _wfa_track != 'undefined' && _wfa_track.wfa_submit) {
							_wfa_track.wfa_submit(e);
						}
						var formData = new FormData(this);
						$.ajax({
							url: 'https://crm.zoho.com/crm/WebToLeadForm ',
							type: 'POST',
							data: formData,
							cache: false,
							contentType: false,
							processData: false,
							success: function (data) {
								var splashinfodom = document.getElementById('wf_splash_info');
								splashinfodom.innerText = data.actionvalue;
								var splashdom = document.getElementById('wf_splash');
								document.getElementById('webform5683047000005601023').reset.click();
								splashdom.style.display = '';
								setTimeout(function () {
									splashdom.style.display = 'none';
								}, 5000);
								document
									.querySelector('.crmWebToEntityForm .formsubmit')
									.removeAttribute('disabled');
							},
							error: function (data) {
								alert('an error occurred');
							}
						});
						gtag('event', 'conversion', {
							send_to: 'AW-998511498/BlxqCM2XkOMZEIqnkNwD'
						});
					}
				});
			});
			function tooltipShow5683047000005601023(el) {
				var tooltip = el.nextElementSibling;
				var tooltipDisplay = tooltip.style.display;
				if (tooltipDisplay == 'none') {
					var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
					for (i = 0; i < allTooltip.length; i++) {
						allTooltip[i].style.display = 'none';
					}
					tooltip.style.display = 'block';
				} else {
					tooltip.style.display = 'none';
				}
			}
		</script>
	</form>
</div>
