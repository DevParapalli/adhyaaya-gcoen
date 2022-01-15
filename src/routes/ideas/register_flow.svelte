<script>
    /*
    [Note]
    This probably can be improved
    The Register Flow is done in 3 Steps
    1. Inital Details
    2. Educational Details (U from college or from School ? etc)
    3. Aaydhya Specific Questions, Can be left blank
    Ideally, the details will be saved in Svelte's Stores, and sent to the server at the end of the flow.
    stores will be initilized with blank values, and then updated with the values from the flow.
    names: register_alpha, register_beta, register_gamma 
    finally at the end of the flow, the values will be combined and sent to the server.
    The server then returns error or a success message. 
    */
    import RegisterAlpha from "$lib/RegisterAlpha.svelte";
    import RegisterBeta from "$lib/RegisterBeta.svelte";
    import RegisterGamma from "$lib/RegisterGamma.svelte";

</script>

