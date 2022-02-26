<script>
	import Section from './_layout/Section.svelte';
</script>

<section id="MyServices">
	<h2 class="services-header-title">What Can I Do?</h2>
	<div class="services">
		<div class="service">
			<h4>Web Development</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia debitis similique, sunt
				molestias molestiae sint blanditiis, magnam itaque minima quibusdam magni. Dolores
				consequatur non fuga exercitationem itaque facilis quo nam!
			</p>
		</div>
		<div class="service">
			<h4>Web Development</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia debitis similique, sunt
				molestias molestiae sint blanditiis, magnam itaque minima quibusdam magni. Dolores
				consequatur non fuga exercitationem itaque facilis quo nam!
			</p>
		</div>
		<div class="service">
			<h4>Web Development</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia debitis similique, sunt
				molestias molestiae sint blanditiis, magnam itaque minima quibusdam magni. Dolores
				consequatur non fuga exercitationem itaque facilis quo nam!
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
	.services-header-title {
		font-size: 40px;
		color: var(--second-color);
		position: relative;
		padding-bottom: 1rem;
	}

	.services-header-title::after {
		content: '';
		display: block;
		position: absolute;
		height: 4px;
		right: 0;
		left: 0;
		bottom: -0.5rem;
		background-color: var(--primary-color);
		transform: rotate(-3deg);
	}

	.services {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	.service {
		/* flex: 1; */
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.service h4 {
		font-size: 20px;
		color: var(--primary-color);
	}

	.service p {
		max-width: 35ch;
		font-size: 1rem;
		color: rgb(100, 100, 100);
		line-height: 1.6;
		word-spacing: 2px;
		font-family: 'Josefin Sans', sans-serif;
	}

	@media screen and (max-width: 1200px) {
		section {
			height: fit-content;
		}
		.services {
			padding: 0 1rem;
			flex-wrap: wrap;
			width: 100%;
		}

		.service {
			/* min-width: 200px; */
			flex: 1;
			align-self: center;
			justify-self: center;
			justify-content: center;
			place-items: center;
			padding: 1rem;
			width: 100%;
		}

		.service p {
			font-size: 15px;
			/* max-width: 100%; */
			width: 100%;
		}
	}
</style>
