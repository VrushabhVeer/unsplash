let navbar = () => {

    return `
    <div id="top_nav">
    <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1ilr1mjpWyb1VXGZgGroEIrbn6HjIomA8MNaAh-VPzCeH8hoMmR7eodVft6MbpURaqg&usqp=CAU">
    <div id="search_bar">
        <input id="query" type="search" placeholder="Search free high-resolution photos">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="option">
        <p>Explore</p>
        <p>Advertise</p>
        <p>Blog</p>
        <p>log in</p>
        <p>Sign up</p>
    </div>
</div>

<div id="categories">
    <p id="Current Events">Current Events</p>
    <p id="Wallpapers">Wallpapers</p>
    <p id="3D Renders">3D Renders</p>
    <p id="Textures & Patterns">Textures & Patterns</p>
    <p id="Experimental">Experimental</p>
    <p id="Architecture">Architecture</p>
    <p id="Nature">Nature</p>
    <p id="Bussiness & Work">Bussiness & Work</p>
    <p id="Fashion">Fashion</p>
    <p id="Film">Film</p>
    <p id="Food & Drink">Food & Drink</p>
    <p id="Health & wellness">Health & wellness</p>
</div>`;
}

export { navbar }