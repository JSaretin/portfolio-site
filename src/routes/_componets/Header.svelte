<header>
	<div class="logo">
		<h1>Josas</h1>
	</div>

	<nav class="nav">
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

	<div class="buger-menu">
		<div class="buger-stroke" />
		<div class="buger-stroke" />
		<div class="buger-stroke" />
	</div>
</header>

<style>
	header {
		display: flex;
		height: 10vh;
		justify-content: space-around;
		place-items: center;
		/* padding: 0 3rem; */
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
		header {
			position: static;
			top: 0;
			right: 0;
			left: 0;
		}
		.contact {
			display: none;
		}

		.buger-menu {
			position: relative;
			width: 40px;
			aspect-ratio: 1/1;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			cursor: pointer;
		}

		.buger-stroke {
			width: 100%;
			height: 4px;
			background-color: var(--dark-second);
		}

		.nav-links {
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			/* background-color: coral; */

			background-color: var(--dark-second);
			position: fixed;
			right: 0;
			top: 10vh;
			bottom: 0;
			width: 70%;
			z-index: 1;
			height: 100%;
            display: none;
		}

        
	}
</style>
