<script>
	import Section from './_layout/Section.svelte';
</script>

<section id="AboutMe">
	<h2>Who I Am</h2>
	<div class="content">
		<div class="brif-intro">
			<p>
				I am John Osaretin, a computer programmer from Nigeria, I love solving computer problem,
				when am not busy designing beautiful websites <a href="#" class="animate-link"
					><span class="animate-work">like these</span></a
				>, I love to create IOT and work on other open-source project
			</p>
			<p>
				I am well experienced in front and backend development, Arduino's and IOTs. My years of
				programming has truly impact the way I think when dealing with various problem should be
				tackle. I believe that programming is all about problem solving and making world a better
				place using these knowledge.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 40vh;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		place-items: center;
		gap: 4rem;
	}

	h2 {
		font-size: 45px;
		color: var(--second-color);
		position: relative;
		padding: 1rem;
	}

	h2::after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		height: 4px;
		background-color: var(--primary-color);
		left: 0;
		right: 0;
		transform: rotate(2deg);
	}

	.brif-intro {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.brif-intro p {
		max-width: 60ch;
		line-height: 1.6;
		word-spacing: 3px;
		/* font-family: 'Redressed', cursive; */
		font-family: 'Josefin Sans', sans-serif;
		font-size: 1.25rem;
		color: var(--dark-second);
		opacity: 0.8;
	}

	@media screen and (max-width: 1200px) {
		.brif-intro p {
			font-size: 1.125rem;
		}
	}

	@media screen and (max-width: 900px) {
		section {
			height: 70vh;
			gap: 2rem;
			/* margin-bottom: 4rem; */
		}
		/* h2 {
			font-size: 35px;
		} */

		.brif-intro p {
			font-size: 1rem;
		}
	}

	@media screen and (max-width: 390px) {
		.brif-intro p {
			min-width: 40ch;
			text-align: center;
		}
	}

	.animate-link {
		text-decoration: none;
	}

	/* .animate-work{
		width: 3px;
		background: linear-gradient(to left, var(--dark-second), var(--primary-color));
		-webkit-background-clip: text;
		-webkit-text-stroke: 2px transparent;
		color: var(--bg-color);
	} */
</style>
