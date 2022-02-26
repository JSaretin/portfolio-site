<script>
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	export let addShadow;
	let showNav;

	function moveToView(element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}

	function addEvent(link) {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			if (link.hash) {
				moveToView(document.querySelector(link.hash));
				// goto(link.hash,{noscroll: false, });
			} else {
				moveToView(document.body);
			}
		});
	}

	$: {
		if (browser) {
			document.body.style.overflowY = showNav ? 'hidden' : '';
		}
	}
	let navLinks;

	$: {
		if (navLinks) {
			const links = navLinks.querySelectorAll('li a');
			links.forEach((link) => addEvent(link));
		}
	}
</script>

<header>
	<div class="logo" on:click={()=>{moveToView(document.body)}}>
		<h1>Josas</h1>
	</div>

	<nav class={'nav ' + (showNav != undefined ? (showNav == false ? 'hide-nav' : 'show-nav') : '')}>
		<ul class="nav-links" bind:this={navLinks}>
			<li><a href="/" class="nav-link">Home</a></li>
			<li><a href="#AboutMe" class="nav-link" sveltekit:prefetch>About Me</a></li>
			<li><a href="#MyServices" class="nav-link" sveltekit:prefetch>My Services</a></li>
			<li><a href="#Portfolio" class="nav-link" sveltekit:prefetch>See My Works</a></li>
		</ul>

		<div class="contact">
			<button class="contact-me">Contact Me</button>
		</div>
	</nav>

	<div
		class="buger-menu"
		on:click={() => {
			showNav = !showNav;
		}}
	>
		{#if showNav}
			<div class="x" />
		{:else}
			<div class="buger-stroke" />
			<div class="buger-stroke" />
			<div class="buger-stroke" />
		{/if}
	</div>
</header>

<style>
	.shadow {
		filter: hue-rotate(1deg);
	}
	header {
		display: flex;
		height: 10vh;
		justify-content: space-around;
		place-items: center;
		background-color: var(--bg-color);
	}

	.nav,
	.logo,
	.contact,
	.nav-links {
		flex: 1;
		display: flex;
	}

	.logo {
		color: var(--dark-second);
		text-transform: uppercase;
	}

	.nav {
		flex: 2;
		justify-content: center;
	}

	.nav-links {
		display: flex;
		justify-content: space-around;
		list-style: none;
	}

	.nav-link {
		text-decoration: none;
		color: var(--primary-color);
	}

	.contact {
		justify-content: flex-end;
	}

	.contact-me {
		padding: 0 2rem;
		display: flex;
		height: 2.5rem;
		outline: none;
		border: none;
		align-items: center;
		border-radius: 0.5rem;
		background-color: var(--second-color);
		color: #fff;
	}

	.buger-menu {
		display: none;
	}

	@media screen and (max-width: 1200px) {
		.contact {
			display: none;
		}
	}

	@media screen and (max-width: 900px) {
		.show-nav {
			animation: animate-nav 0.5s ease-in-out forwards;
		}

		.hide-nav {
			animation: hide-nav 0.5s ease-in-out forwards;
		}

		.buger-menu {
			position: relative;
			width: 2.5rem;
			aspect-ratio: 1/1;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			cursor: pointer;
			z-index: 3;
			background: none;
		}

		.buger-stroke {
			width: 100%;
			height: 0.25rem;
			background-color: var(--dark-second);
		}

		.nav {
			position: fixed;
			inset: 0;
			top: 10vh;
			height: 90vh;
			z-index: 2;
			transform: translateX(100%);
			/* margin: -4rem 0; */
			/* padding: 0; */
			background-color: var(--dark-second);
			visibility: hidden;
			overflow: hidden;
			flex-direction: column;
			justify-content: center;
			place-items: center;
		}

		.nav-links {
			flex: 2;
		}

		.nav-link {
			font-size: 20px;
		}

		.contact {
			display: flex;
			justify-content: center;
			filter: hue-rotate(70deg) brightness(200%);
			/* background-color: rebeccapurple; */
			width: 100%;
			padding: 1rem;
		}

		.contact-me {
			width: 70%;
			padding: 2rem 1rem;
			display: flex;
			justify-content: center;
			place-items: center;
			font-size: 1.25rem;
		}

		.nav-links {
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			/* background-color: coral; */
			/* background-color: var(--dark-second); */
		}

		.invert {
			background-color: #fff;
		}

		.x::before,
		.x::after {
			content: '';
			display: block;
			position: absolute;
			height: 0.25rem;
			left: 0;
			right: 0;
			background-color: #000;
		}

		.x::after {
			transform: rotate(40deg);
		}

		.x::before {
			transform: rotate(-40deg);
		}
	}

	@keyframes animate-nav {
		from {
			transform: translateX(100%);
			visibility: hidden;
			/* opacity: 0; */
		}

		to {
			transform: translateX(0%);
			visibility: visible;
			/* opacity: 1; */
		}
	}

	@keyframes hide-nav {
		from {
			transform: translateX(0%);
			visibility: visible;
			opacity: 1;
		}

		to {
			transform: translateX(100%);
			opacity: 0;
			visibility: hidden;
		}
	}
</style>
