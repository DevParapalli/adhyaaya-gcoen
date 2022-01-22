<script>
    // 1 function to validate each field, this way we can use the on:blur to validate the field
    // 1 function to submit the form where ever we need to.
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
					<p class="text-xs text-gray-400">Please fill up the following form to confirm your presence.</p>
					<form class="lg:w-1/2 md:w-2/3 mx-auto pt-6" action="">
						<div class="flex flex-wrap -mx-3 mb-6">
							<div class="p-2 w-1/2 mx-auto">
								<div class="form-control relative flex-wrap">
                                    <!-- Start of Singular Input Field -->
									<label for="" class="label">
										<span class="label-text"> Contact Email </span>
									</label>
									<input
										type="text"
										placeholder="username@domain.tld"
										class="input input-bordered"
									/>
                                    <!--"" for not accessed, input-success for correct, input-error when incorrect-->
									<label for="" class="hidden label">
                                        <!--Remove hidden from this and display error when required-->
										<span class="label-text-alt text-error">Enter a valid email</span>
									</label>
                                    <!--End of Singular Input Field -->
									<!--Use on:blur for validation, rather than binding to value-->
								</div>
							</div>
						</div>
                        <div class="justify-center card-actions pt-4">
                            <button class="btn btn-secondary">Submit</button>
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
