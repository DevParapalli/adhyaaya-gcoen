<script lang="ts">
	
	// 1 function to validate each field, this way we can use the on:blur to validate the field
	// 1 function to submit the form where ever we need to.
	let email: string;
	let email_error: string;
	function email_onblur(event) {
		//console.log(email, event);
		// Sanitize Email
	}

	let mobile_number: string;
	let mobile_error: string;
	function mobile_onblur(event) {
		//console.log(mobile_number, event);
	}

	let first_name: string;
	let last_name: string;
	let branch_name: string;
	let roll_number: string;
	function button_submit(event) {
		console.log("SUBMIT CLICKED")
		console.log(email, mobile_number, first_name, last_name, branch_name, roll_number);
	}
</script>

<section class="hero">
	<div class="container px-5 py-24 mx-auto rounded-t-3xl">
		<div class="flex flex-col text-center w-full mb-12">
			<div class="card card-bordered bg-base-200">
				<figure>
					<img src="https://picsum.photos/id/773/1000/200?blur=true" alt="form-header-logo" />
				</figure>
				<div class="card-body">
					<h2 class="card-title text-3xl">Register for Adhyaaya-22</h2>
					<p class="text-xs text-gray-400">
						Please fill up the following form to confirm your presence.
					</p>
					<form class="lg:w-1/2 md:w-2/3 mx-auto pt-6" action="">
						<div class="flex flex-wrap -mx-3 mb-6">
							<div class="w-full text-left mx-auto py-4 px-2 text-xl border-b-2 border-base-300">
								<span>Contact Information</span>
							</div>
							<div class="p-2 w-1/2 mx-auto">
								<div class="form-control relative flex-wrap">
									<!-- Start of Singular Input Field -->
									<label for="email" class="label mt-4">
										<span class="label-text"> Contact Email </span>
										<span class="label-text-alt text-[0.5rem] text-warning">Required</span>
									</label>
									<input
										type="email"
										id="email"
										placeholder="username@domain.tld"
										class="input input-bordered {email ? 'input-success' : email_error ? 'input-error' : ''}"
										required
										bind:value={email}
										on:blur={email_onblur}
									/>
									<!--"" for not accessed, input-success for correct, input-error when incorrect-->
									<label for="email" class="{email_error ? '' : 'hidden'} label">
										<!--Remove hidden from this and display error when required-->
										<span class="label-text-alt text-error">{email_error}</span>
									</label>
									<!--xxxxxxxxxxxxxxxxxxxxxx-->
									<label for="mobile-number" class="label mt-4">
										<span class="label-text"> Mobile Number </span>
										<span class="label-text-alt text-[0.5rem] text-warning">Required</span>
									</label>
									<input
										type="text"
										id="mobile-number"
										placeholder="+91 12345 67890"
										class="input input-bordered"
										required
										bind:value={mobile_number}
										on:blur={mobile_onblur}
									/>
									<!--"" for not accessed, input-success for correct, input-error when incorrect-->
									<label for="mobile-number" class="{mobile_error ? '' : 'hidden'} label">
										<!--Remove hidden from this and display error when required-->
										<span class="label-text-alt text-error">{mobile_error}</span>
									</label>

									<label for="first-name" class="label mt-4">
										<span class="label-text"> First Name </span>
										<span class="label-text-alt text-[0.5rem] text-warning">Required</span>
									</label>
									<input
										type="text"
										id="first-name"
										placeholder="FirstName"
										class="input input-bordered"
										required
										bind:value={first_name}
									/>
									<!--"" for not accessed, input-success for correct, input-error when incorrect-->
									<label for="firstname" class="{mobile_error ? '' : 'hidden'} label">
										<!--Remove hidden from this and display error when required-->
										<span class="label-text-alt text-error">{mobile_error}</span>
									</label>

									<label for="lastname" class="label mt-4">
										<span class="label-text"> Last Name </span>
										<span class="label-text-alt text-[0.5rem] text-warning">Required</span>
									</label>
									<input
										type="text"
										id="last-name"
										placeholder="LastName"
										class="input input-bordered"
										required
										bind:value="{last_name}"
									/>
									<!--"" for not accessed, input-success for correct, input-error when incorrect-->
									<label for="lastname" class="{mobile_error ? '' : 'hidden'} label">
										<!--Remove hidden from this and display error when required-->
										<span class="label-text-alt text-error">{mobile_error}</span>
									</label>

									<label for="branch-name" class="label mt-4">
										<span class="label-text"> Branch </span>
										<span class="label-text-alt text-[0.5rem] text-warning">Required</span>
									</label>
									<input
										type="text"
										id="branch-name"
										placeholder="CSE / EE"
										class="input input-bordered"
										required
										bind:value="{branch_name}"
									/>
									<!--"" for not accessed, input-success for correct, input-error when incorrect-->
									<label for="branch-name" class="{mobile_error ? '' : 'hidden'} label">
										<!--Remove hidden from this and display error when required-->
										<span class="label-text-alt text-error">{mobile_error}</span>
									</label>

									<label for="roll-number" class="label mt-4">
										<span class="label-text"> Roll Number </span>
										<span class="label-text-alt text-[0.5rem] text-warning">Required</span>
									</label>
									<input
										type="text"
										id="roll-number"
										placeholder="CSE-01"
										class="input input-bordered"
										required
										bind:value="{roll_number}"
									/>
									<!--"" for not accessed, input-success for correct, input-error when incorrect-->
									<label for="roll-number" class="{mobile_error ? '' : 'hidden'} label">
										<!--Remove hidden from this and display error when required-->
										<span class="label-text-alt text-error">{mobile_error}</span>
									</label>
								</div>
							</div>
						</div>
						<div class="justify-center card-actions pt-4">
							<button on:click|preventDefault="{button_submit}" class="btn btn-secondary">Submit</button>
						</div>
					</form>
					<div class="justify-center text-sm pt-6">
						<span class="text-xs text-gray-400">
							Details submitted here will only be used in correspondence with 'Adhyaaya-22'. Please
							ensure that the mobile number and email address are correct, further information will
							be sent to you via those channels
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
