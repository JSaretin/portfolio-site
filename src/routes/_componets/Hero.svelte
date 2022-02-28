<script>
	let svg;
	$: if (svg) {
		const paths = svg.querySelectorAll('path');
		paths.forEach((path, index) => {
			const width = path.getTotalLength();
			path.style['stroke-dasharray'] = width;
			console.log(width);
		});
	}
</script>

<div class="hero">
	<div class="hero-about">
		<h3 class="hero-title">I am John Osaretin</h3>
		<p class="hero-brif">
			Not just a another programmer, but one with a canvas. So what's your story gonna be?
			<!-- You diserve nothing but the best, and am ready to deliver nothing but the best. -->
		</p>
		<div class="cta">
			<button
				class="active"
				on:click={() => {
					document.getElementById('MyWork').scrollIntoView({ behavior: 'smooth' });
				}}>Get In Touch</button
			>
			<button
				class="check-work"
				on:click={() => {
					document.getElementById('MyServices').scrollIntoView({ behavior: 'smooth' });
				}}>Check My Portfolio</button
			>
		</div>
	</div>

	<div class="hero-image">
		<!-- <img src="/bg.jpeg" alt="hero image" /> -->
		<img src="/main-bg.jpeg" alt="hero image" />
	</div>
</div>

<style>
	.hero {
		margin-top: 3rem;
		height: 60vh;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-template-rows: 100%;
		overflow: hidden;
		align-items: center;
		justify-content: space-between;
	}

	.hero-about {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		flex: 1;
	}

	.hero-image {
		height: 100%;
		display: flex;
		justify-content: flex-end;
		opacity: 0;
		transform: translateY(-50px);
		animation: slide-image 1.5s ease forwards 1.5s;
	}

	.hero-image img {
		height: 100%;
		aspect-ratio: 1.1/1;
		object-fit: contain;
	}

	.hero-title {
		font-size: 60px;
		border: 3px solid transparent;
		background: linear-gradient(to right, var(--dark-second), var(--primary-color));
		color: transparent;
		-webkit-background-clip: text;
		text-shadow: 4px 4px 3px transparent;
		text-transform: uppercase;
		opacity: 0;

		transform: translateY(-50px);
		animation: slide-image 2s ease forwards;
	}

	.hero-brif {
		justify-self: flex-end;
		max-width: 60ch;
		line-height: 1.6;
		background-color: inherit;
		z-index: 1;
		color: rgb(97, 97, 97);
		background-color: var(--bg-color);
		font-family: 'Josefin Sans', sans-serif;
		opacity: 0;
		transform: translateY(-50px);
		animation: slide-image 1.5s ease forwards 0.5s;
	}

	.cta {
		display: flex;
		opacity: 0;
		gap: 1rem;
		margin-top: 2rem;
		transform: translateY(-50px);
		animation: slide-image 2s ease forwards 2s;
	}

	.cta button {
		padding: 1rem 2rem;
		outline: none;
		border: none;
		font-weight: 700;
	}

	.cta .active {
		background: var(--primary-color);
		color: var(--dark-second);
	}

	.cta .check-work {
		background-color: var(--dark-second);
		color: var(--primary-color);
	}

	@keyframes slide-image {
		0% {
			opacity: 0;
			transform: translateY(-50px);
		}
		10% {
			opacity: 0;
		}

		/* 70% {
			transform: translateY(-20px);
		} */

		100% {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	@media screen and (max-width: 1400px) {
		.hero {
			/* height: 60vh; */
			gap: 2rem;
			justify-content: center;
		}

		.hero-image {
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: center;
			place-items: center;
		}

		.hero-image img {
			width: 80%;
			object-fit: contain;
		}

		.hero-title {
			font-size: 30px;
		}

		.cta {
			margin-top: 0;
		}
	}

	@media screen and (max-width: 1000px) {
		.hero {
			margin-top: 0;
		}
		.hero-image {
			height: 60%;
			padding: 1rem;
		}

		/* .hero-about{
            padding: 1rem;
        } */
		.hero-title {
			font-size: 1.625rem;
		}
		.cta button {
			font-size: 0.875rem;
			padding: 1rem;
		}
	}

	@media screen and (max-width: 900px) {
		.hero {
			height: fit-content;
			padding: 2rem 0;
		}

		.hero-about {
			height: fit-content;
		}
		.hero-title {
			font-size: 1.625rem;
		}

		.hero-about p {
			font-size: 0.875rem;
		}
		.cta button {
			font-size: 0.875rem;
		}

		.hero-image {
			justify-self: flex-start;
			align-self: flex-start;
			height: 100%;
		}

		.hero-image img {
			width: 100%;
			height: 100%;
		}
	}

	@media screen and (max-width: 876px) {
		.hero {
			gap: 0;
		}
		.hero-title {
			font-size: 1.5rem;
		}
		.cta button {
			font-size: 14px;
			padding: 1rem;
		}

		.hero-image img {
			height: 100%;
		}
	}

	@media screen and (max-width: 833px) {
		.cta button {
			font-size: 0.8125rem;
			/* padding: 0.3rem 1rem; */
		}

		.hero-image {
			height: 100%;
		}
	}

	@media screen and (max-width: 800px) {
		.hero {
			display: flex;
			flex-direction: column-reverse;
			justify-content: flex-start;
			padding: 0;
			justify-content: center;
			height: 80vh;
			gap: 2rem;
			margin-bottom: 2rem;
		}

		.hero-about {
			justify-content: flex-start;
		}

		.hero-title {
			font-size: 25px;
		}

		.cta button {
			width: 100%;
			font-size: 0.875rem;
			padding: 1rem 1.4rem;
		}

		.hero-image {
			height: 100%;
			width: 100%;
			padding: 0;
		}

		.hero-image img {
			object-fit: cover;
		}
	}
</style>
