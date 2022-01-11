<script>
import { onMount } from "svelte";


	onMount(() => {
		console.log("%c [Note] The video provided has the logo proud and center, making it unsuitable for mobile.", "font-size: 1.5rem")
	})
	function pause_near_end(event) {
		let video = event.target;
		let time = video.currentTime;
		let duration = video.duration;
		if (time >= duration - 1.1) {
			video.pause();
			console.log("%c [Note] Ideally I would want a static image or a proper frame to replace this, but I don't yet have resources", "font-size: 1.5rem;");
		}
	}
</script>

<video on:timeupdate="{pause_near_end}" autoplay muted playsinline id="bg-video-md" class="md:w-[100vw] md:block hidden h-[100vh] object-cover fixed left-0 right-0 top-0 bottom-0 -z-[1] pointer-events-none " >
	<source src="/modified_logo_cyberpunk.mp4" type="video/mp4">
</video>

<div class="hero min-h-screen">
	<div class="hero-overlay "></div> 
	<div class="text-center hero-content text-neutral-content bg-base-200 rounded-3xl bg-opacity-70">
	  <div class="max-w-md">
		<h1 class="mb-5 text-5xl font-bold">
			  u wot m8 ?
			</h1> 
		<p class="mb-5">
			  What did you just say? Did you just say I can't dip my balls in the soda dispenser? I thought this was America. Land of the free, Home of the brave. I fought for this country, I served in Vietnam in 1917. And I cannot hear you, i am currently dipping my balls in the soda dispenser
			</p>
			<div data-tip="button brokey" class="tooltip tooltip-left tooltip-error">
				<button class="btn btn-primary">Learn More</button>
			</div>
	  </div>
	</div>
  </div>
  