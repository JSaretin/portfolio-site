<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<div class="logo-container">
		<div class="logo">
			<h1>JOSAS</h1>
		</div>
	</div>
	<nav>
		<ul class="nav-links">
			<li><a href="#" class="nav-link active">Home</a></li>
			<li><a href="#" class="nav-link">About Me</a></li>
			<li><a href="#" class="nav-link">View My Portfolio</a></li>
		</ul>
	</nav>

	<div class="contact-section">
		<a href="#">Get In Touch</a>
	</div>
</header>
<main>
	<div class="presentation">
		<div class="about">
			<h1 class="title">I am <span>John Osaretin</span></h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, minima doloribus
				repudiandae cumque maxime doloremque velit.
			</p>
		</div>
		<div class="cta">
			<button class="active">Get In Touch</button>
			<button>View Projects</button>
		</div>
	</div>

	<div class="hero-image">
		<img src="/me.jpeg" alt="" />
	</div>
</main>
<footer />

<style>
	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}

	header,
	main {
		margin: auto;
		width: 80%;
		display: flex;
	}

	header {
		height: 10vh;
	}
	header {
		color: rgb(23, 0, 66);
		align-items: center;
	}

	.logo-container,
	nav,
	.contact-section {
		flex: 1;
	}

	.nav-links,
	.logo-container,
	.contact-section {
		display: flex;
	}

	.logo-container {
		font-weight: 500;
	}

	.nav-links {
		list-style: none;
		justify-content: space-around;
	}

	.nav-links .nav-link {
		text-decoration: none;
		color: rgb(212, 119, 5);
	}

	.nav-links .active {
		font-weight: 500;
	}

	.contact-section {
		place-content: flex-end;
	}

	.contact-section a {
		text-decoration: none;
		border: 2px solid rgb(212, 119, 5);
		padding: 0.4rem 1rem;
		border-radius: 0.2rem;
		color: rgb(212, 119, 5);
	}

	.contact-section a:hover {
		background-color: rgb(212, 119, 5);
		color: #fff;
	}

	main {
		height: 80vh;
		/* background-color: rebeccapurple; */
		align-items: center;
		justify-content: space-around;
	}

	.presentation .title {
		background: linear-gradient(to right, rgba(136, 66, 0, 0.911), rgb(61, 29, 136));
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		font-size: 44px;
		font-weight: 600;
	}

	.title span {
		/* display: inline-block; */
		overflow-x: hidden;
	}

	.presentation .about {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 50ch;
	}

	.about p {
		line-height: 1.6;
		font-size: 14px;
	}

	.hero-image {
		width: 100%;
		flex: 1;
		display: flex;
		justify-content: flex-end;
		/* background-color: rebeccapurple; */
	}
	.hero-image img {
		/* opacity: 0; */
		filter: drop-shadow(3px 3px 4px rgba(136, 66, 0, 0.911));
		transform: translateY(-50px);
		animation: slideIn 1.5s ease forwards;
		width: 60%;
	}

	.cta {
		display: flex;
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.cta button {
		outline: none;
		border: none;
		padding: 0 1.5rem;
		height: 40px;
		font-weight: 500;

		background: none;
		border: 1px solid rgba(136, 66, 0, 0.911);
		color: rgba(136, 66, 0, 0.911);
	}

	.cta .active,
	.cta button:hover {
		background-color: rgba(136, 66, 0, 0.911);
		color: #fff;
		border: none;
	}

	footer {
		height: 40vh;
		width: 100%;
		background-color: black;
	}

	@keyframes slideIn {
		0% {
			transform: translateY(-50px);
			opacity: 0;
		}

		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}

    @media screen and (max-width:1200px){
        .presentation{
            flex-direction: column;
        }
    }
</style>
