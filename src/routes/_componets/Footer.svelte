<footer>
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
		</nav>
	</header>

	<div class="socials">
        <h3>Follow Me On:</h3>
		<ul class="links">
			<li><a href="#" class="link"><i class="fab fa-telegram" />Telegram</a></li>
			<li><a href="#" class="link"><i class="fab fa-facebook" />Facebook</a></li>
			<li><a href="#" class="link"><i class="fab fa-twitter" />Twitter</a></li>
			<li><a href="#" class="link"><i class="fab fa-instagram" />Instagram</a></li>
			<li><a href="#" class="link"><i class="fab fa-youtube" />Youtube</a></li>
			<li><a href="#" class="link"><i class="fab fa-snapchat" />Snapchat</a></li>
		</ul>
	</div>
</footer>

<style>
	footer {
		height: 30vh;
		background-color: var(--dark-second);
		padding: 2rem 3rem;
		display: flex;
		justify-content: space-between;
	}
	header {
		display: flex;
		height: 100%;
		justify-content: space-around;
		/* place-items: center; */
		flex-direction: column;
		/* padding: 0 3rem; */
	}

	.nav,
	.logo,
	.nav-links {
		flex: 1;
		display: flex;
	}

	.logo {
		color: #fff;
		text-transform: uppercase;
	}

	.nav {
		flex: 2;
		justify-content: center;
	}

	.nav-links {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		list-style: none;
	}

	.nav-link {
		text-decoration: none;
		color: var(--primary-color);
	}

    .socials{
        display: flex;
        gap: 2rem;
        flex-direction: column;
    }

    .socials h3{
        color: #fff;
    }

	.links {
		display: flex;
		flex-direction: column;
		list-style: none;
		justify-content: space-around;
		height: 100%;
		font-size: 14px;
	}

	.link {
		text-decoration: none;
		color: var(--primary-color);
		display: flex;
		gap: 0.4rem;
		/* justify-content: center; */
		align-items: center;
	}

</style>
