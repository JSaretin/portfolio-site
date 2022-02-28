<script>
	const getRandomNumber = (range = 500) => {
		return Math.round(Math.floor(Math.random() * range));
	};
	const items = [];

	for (let i = 0; i < 30; i++) {
		const width = getRandomNumber();
        const height = width;
		// const height = getRandomNumber(width);
		items.push(`${width}x${height}`);
	}

	function showInfo(card) {
		// const about = card.target.querySelector('.about')
		// about.style.visibility = 'visible'
	}
</script>

<section id="Portfolio">
	<h2 class="section-title">My Work</h2>
	<div class="works">
		{#each items as size}
			<div class="work" on:focus={showInfo} on:mouseover={showInfo}>
				<div class="about">
					<h3 class="title">Aquaponics Farm</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, possimus. Beatae
						ipsum earum quidem culpa ducimus omnis voluptatibus ut itaque.
					</p>
				</div>
				<div class="image">
					<img src={`https://source.unsplash.com/random/${size}`} alt="" />
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		min-height: 60vh;
		height: fit-content;
		display: flex;
		flex-direction: column;
		gap: 4rem;
		scroll-snap-type: y mandatory;

		/* background-color: rgb(206, 176, 236); */
	}

	.section-title {
		/* background-color: rebeccapurple; */
		align-self: center;
		font-size: 50px;
		font-weight: 700;
		position: relative;
		padding: 1rem 0;
		color: var(--dark-second);
	}

	.section-title::after {
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

	.works {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-auto-flow: row dense;
	}

	.work {
		position: relative;
		overflow: hidden;
		/* background-color: rebeccapurple; */
	}

	.about {
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.753);
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 1rem;
		animation-timing-function: ease-in;
		visibility: hidden;
	}

	.about .title {
		color: var(--dark-primary);
	}

	.about p {
		color: rgb(204, 206, 207);
	}

	img {
		object-fit: cover;
		width: 100%;
	}

	img:hover {
		animation: zoom 1.1s ease-in-out forwards;
	}

	@keyframes zoom {
		from {
			transform: scale(1);
		}

		to {
			transform: scale(1.1);
		}
	}
</style>
