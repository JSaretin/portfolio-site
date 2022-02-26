<script>
	import { browser } from '$app/env';

	export let addShadow;
	let showNav;

	$: {
		if (browser) {
			document.body.style.overflowY = showNav ? 'hidden' : '';
		}
	}
</script>

<header>
	<div class="logo">
		<h1>Josas</h1>
	</div>

	<nav class={'nav ' + (showNav != undefined ? (showNav == false ? 'hide-nav' : 'show-nav') : '')}>
		<ul class="nav-links">
			<li><a href="#" class="nav-link">Home</a></li>
			<li><a href="#" class="nav-link">About Me</a></li>
			<li><a href="#" class="nav-link">My Services</a></li>
			<li><a href="#" class="nav-link">See My Works</a></li>
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
		height: 40px;
		outline: none;
		border: none;
		align-items: center;
		border-radius: 8px;
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
			animation: animate-nav 1s ease-in-out forwards;
		}

		.hide-nav {
			animation: hide-nav 1s ease-in-out forwards;
		}

		.buger-menu {
			position: relative;
			width: 40px;
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
			height: 4px;
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
			font-size: 20px;
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
			height: 4px;
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
