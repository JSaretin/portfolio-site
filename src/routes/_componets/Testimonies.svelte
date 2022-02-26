<script id="Testimonies">
	import Section from './_layout/Section.svelte';
	const testimonies = [
		{
			name: 'Jane Magret',
			star: 5.0,
			comment:
				'This is the be developer I have ever worked with, he did everything the way I asked him to. I will highly recomend his services to anyone'
		},
		{
			name: 'Jane Magret',
			star: 5.0,
			comment:
				'This is the be developer I have ever worked with, he did everything the way I asked him to. I will highly recomend his services to anyone'
		},
		{
			name: 'Jane Magret',
			star: 5.0,
			comment:
				'This is the be developer I have ever worked with, he did everything the way I asked him to. I will highly recomend his services to anyone'
		},
		{
			name: 'Jane Magret',
			star: 5.0,
			comment:
				'This is the be developer I have ever worked with, he did everything the way I asked him to. I will highly recomend his services to anyone'
		},
		{
			name: 'Jane Magret',
			star: 5.0,
			comment:
				'This is the be developer I have ever worked with, he did everything the way I asked him to. I will highly recomend his services to anyone'
		},
		{
			name: 'Jane Magret',
			star: 5.0,
			comment:
				'This is the be developer I have ever worked with, he did everything the way I asked him to. I will highly recomend his services to anyone'
		}
	];

	let waits = [];

	for (let i = 0; i < testimonies.length; i++) {
		waits.push(i);
	}
</script>

<section>
	<h2>Review From Customers</h2>
	<p class="section-about">Testimonies from people that I have render my service to.</p>
	<div class="testimonies">
		{#each testimonies as testimony, index}
			<div class="testimony" style={`animation-delay: ${index != 0 ? waits[index] + 4 : 0}s;`}>
				<div class="image">
					<img src="https://source.unsplash.com/random/150x150" alt="" />
				</div>
				<div class="user-info">
					<h3 class="rater-username">{testimony.name}</h3>
					<div class="user-rating">
						<ul class="rate-stars">
							<li class="star" />
							<li class="star" />
							<li class="star" />
							<li class="star" />
							<li class="star" />
						</ul>
					</div>
					<p class="comment">{testimony.comment}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		min-height: 80vh;
		height: fit-content;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 4rem;
	}
	h2 {
		font-size: 35px;
		color: var(--dark-second);
		/* border-bottom: 4px solid; */
		/* padding-bottom: 1rem; */
	}

	h2::after {
		display: block;
		content: '';
		bottom: 0;
		left: 0;
		right: 0;
		height: 4px;
		margin: 1rem 0;
		background-color: var(--primary-color);
		transform: rotate(-3deg);
	}

	.section-about {
		color: rgb(99, 99, 99);
		height: fit-content;
	}
	.testimonies {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
		width: 100%;
		justify-content: center;
	}
	.testimony {
		display: flex;
		box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.151);
		gap: 2rem;
		align-items: center;
		/* background-color: tomato; */
		/* animation: showcomment 10s ease forwards infinite; */
	}

	.image {
		grid-area: picture;
		justify-self: center;
		align-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.user-info {
		flex: 3;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem 0;
	}

	/* img {
		width: 100%;
		object-fit: cover;
	} */

	.rater-username {
		width: fit-content;
		color: var(--dark-second);
	}

	.comment {
		font-family: 'Josefin Sans', sans-serif;
		grid-area: comment;
		max-width: 50ch;
		line-height: 1.4;
		color: var(--primary-color);
	}

	.user-rating {
		flex: 1;
		grid-area: stars;
	}

	.rate-stars {
		display: flex;
		gap: 1rem;
		list-style: none;
	}

	.star {
		width: 15px;
		aspect-ratio: 1/1;
		background-color: rgb(190, 163, 4);
		transform: rotate(50deg);
		position: relative;
	}

	.star::after {
		content: '';
		display: block;
		position: absolute;
		aspect-ratio: 1/1;
		background-color: rgb(190, 163, 4);
		transform: rotate(50deg);
		position: relative;
	}

	@keyframes showcomment {
		from {
			transform: translateX(0%);
		}
		30% {
			transform: translateX(-10%);
		}

		to {
			transform: translateX(100%);
		}
	}

	@media screen and (max-width: 750px) {
		section {
			margin: 4rem 0;
		}
		h2 {
			font-size: 30px;
			position: relative;
			/* overflow: hidden; */
			/* transform: rotate(-4deg); */
		}

		.section-about {
			display: none;
		}

		.testimonies {
			display: flex;
			flex-direction: column;
		}

		.testimony {
			flex-direction: column;
			width: 100%;
			padding: 1rem;
			gap: 0;
			justify-content: center;
			flex-direction: column;
			place-items: center;
			border-radius: 1rem;
		}

		.testimony .comment {
			width: 100%;
		}

		.image {
			width: 100%;
			filter: drop-shadow(2px 4px 10px rgba(0,0,0.2));
			padding-top: 1rem;
		}

		.image img {
			border-radius: 50%;
			object-fit: cover;
		}

		.user-info {
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			justify-content: center;
		}
	}
</style>
