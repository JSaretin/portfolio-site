<script context="module">
	import { browser } from '$app/env';

	export const load = async () => {
		if (browser) {
			const path = localStorage.getItem('path');
			if (path) {
				document.querySelector(path).scrollIntoView({ behavior: 'smooth' });
				localStorage.removeItem('path');
			}
		}
		return {
			status: 200
		};
	};
</script>

<script>
	// import { goto } from '$app/navigation';

	import AboutMe from './_componets/AboutMe.svelte';

	import Footer from './_componets/Footer.svelte';

	import Header from './_componets/Header.svelte';
	import Hero from './_componets/Hero.svelte';
	import Porfolio from './_componets/Porfolio.svelte';
	import Services from './_componets/Services.svelte';
	import Testimonies from './_componets/Testimonies.svelte';

	let addShadow = false;
	let scrollUp = undefined;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/brands.min.css"
		integrity="sha512-bSncow0ApIhONbz+pNI52n0trz5fMWbgteHsonaPk42JbunIeM9ee+zTYAUP1eLPky5wP0XZ7MSLAPxKkwnlzw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>

	<title>Welcome To My Portfolio | JOHN OSARETIN</title>
</svelte:head>

<svelte:window
	on:scroll={() => {
		if (window.pageYOffset > 50) {
			addShadow = true;
			if (window.pageYOffset >= document.body.scrollHeight / 5.5) {
				scrollUp = true;
			} else {
				scrollUp = false;
                localStorage.removeItem('path');
			}
		} else {
			addShadow = false;
		}
	}}
/>

<div
	class={'scrollup ' + (scrollUp == undefined ? '' : scrollUp ? 'show' : 'hide')}
	on:click={() => {
		document.body.scrollIntoView({ behavior: 'smooth' });
		localStorage.removeItem('path');
	}}
>
	<div class="angle">
		<svg
			class="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
			/></svg
		>
	</div>
</div>

<section>
	<Header {addShadow} />
	<Hero />
	<AboutMe />

	<Services />

	<Porfolio />
	<Testimonies />
</section>
<Footer />

<style>
	:root {
		font-size: 18px;
	}
	:global(:root) {
		--primary-color: #ca6f00;
		--dark-primary: #a55c03;
		--second-color: #03007d;
		--dark-second: #101a6f;
		--bg-color: #fff;
	}

	:global(body) {
		width: 100%;
		overflow-x: hidden;
		background-color: var(--bg-color);
	}

	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;
	}

	section {
		width: 80%;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 0 3rem;
	}

	.scrollup {
		width: 50px;
		aspect-ratio: 1/1;
		background-color: #03007d;
		border-radius: 50%;
		position: fixed;
		right: 8%;
		bottom: 38vh;
		display: grid;
		place-items: center;
		opacity: 0;
	}

	.angle {
		width: 100%;
		margin: auto;
		aspect-ratio: 1/1;
		position: relative;
		overflow: hidden;
	}

	.angle svg {
		stroke: var(--primary-color);
	}

	.show {
		animation: show 1.5s ease forwards;
	}
	.hide {
		animation: hide 1s ease forwards;
	}

	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.6;
		}
	}

	@keyframes hide {
		to {
			opacity: 0;
		}
	}

	@media screen and (max-width: 700px) {
		section {
			padding: 0 1rem;
			gap: 1rem;
			width: 100%;
		}

		.scrollup {
			bottom: 1rem;
			z-index: 3;
		}
	}

	@media screen and (max-width: 390px) {
		:root {
			font-size: 15px;
		}
	}
</style>
