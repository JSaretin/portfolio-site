<script>
	import Section from './_layout/Section.svelte';
</script>

<section id="AboutMe">
	<h2>Who I Am</h2>
	<div class="content">
		<div class="brif-intro">
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptates cum provident
				doloremque non, ea error soluta, hic cumque harum perferendis voluptate consectetur animi
				assumenda quibusdam accusantium reiciendis optio a?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum nesciunt earum quod
				ipsam magnam est recusandae architecto praesentium cumque autem magni dolore maiores officia
				quae ipsa iusto assumenda! Fugiat.
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

	.brif-intro{
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
		font-size: 20px;
		color: var(--dark-second);
		opacity: 0.8;
	}

    @media screen and (max-width: 1200px) {
        .brif-intro p {
			font-size: 18px;
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
			font-size: 16px;
		}
	}
</style>
