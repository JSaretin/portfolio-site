<script>
	import AboutMe from './_componets/AboutMe.svelte';

	import Footer from './_componets/Footer.svelte';

	import Header from './_componets/Header.svelte';
	import Hero from './_componets/Hero.svelte';
	import Porfolio from './_componets/Porfolio.svelte';
	import Services from './_componets/Services.svelte';
	import Testimonies from './_componets/Testimonies.svelte';

	let addShadow = false;
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
		} else {
			addShadow = false;
		}
	}}
/>

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

	@media screen and (max-width: 700px) {
		section {
			padding: 0 1rem;
			gap: 1rem;
			width: 100%;
		}
	}
</style>
