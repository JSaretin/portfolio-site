<script>
	import Section from './_layout/Section.svelte';
</script>

<section id="MyServices">
	<h2 class="services-header-title">What Can I Do?</h2>
	<div class="services">
		<div class="service">
			<h4>Web Development</h4>
			<p>
				I will create that wonderful website of yours using the most latest and up-to-date tech
				available. so you can be rest-assured about security and compatibility.
			</p>
		</div>
		<div class="service">
			<h4>RestAPI development</h4>
			<p>
				I will create REST backend for your IOT project. I am most suited if you need a blazey
				RESTAPI backend for your project.
			</p>
		</div>
		<div class="service">
			<h4>Smart Contract Development</h4>
			<p>
				Web3 is the hottest trend right now, you can sit-back and watch the revolution or take the
				blue pill and ride-along with me on this train. I will create NFT for your project
				integrated with a front-end.
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
		font-size: 2.5rem;
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
		font-size: 1.25rem;
		color: var(--primary-color);
	}

	.service p {
		max-width: 35ch;
		font-size: 1rem;
		color: rgb(100, 100, 100);
		line-height: 1.6;
		word-spacing: 0.125rem;
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
			font-size: 0.9375rem;
			/* max-width: 100%; */
			width: 100%;
		}
	}

	@media screen and (max-width: 390px) {
		.service p {
			/* background-color: rebeccapurple; */
			min-width: 40ch;
		}
	}
</style>
