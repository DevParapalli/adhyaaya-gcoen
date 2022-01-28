<script>
    let email_input
    let email_error
    let email_onblur
</script>

<div class="w-full text-left mx-auto py-4 px-2 text-xl border-b-2 border-base-300">
    <span>Contact Information</span>
</div>
<div class="p-2 w-1/2 mx-auto">
    <div class="form-control relative flex-wrap">
        <!-- Start of Singular Input Field -->
        <label for="" class="label">
            <span class="label-text"> Contact Email </span>
            <span class="label-text-alt text-[0.5rem] text-warning">Required</span>
        </label>
        <input
            type="text"
            id="email"
            placeholder="username@domain.tld"
            class="input input-bordered"
            required
            bind:value="{email_input}"
            on:blur="{email_onblur}"
        />
        <!--"" for not accessed, input-success for correct, input-error when incorrect-->
        <label for="" class="{email_error ? '': 'hidden'} label">
            <!--Remove hidden from this and display error when required-->
            <span class="label-text-alt text-error">{email_error}</span>
        </label>
        <!--End of Singular Input Field -->
        <!--Use on:blur for validation, rather than binding to value-->
    </div>
</div>