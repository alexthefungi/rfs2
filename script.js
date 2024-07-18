body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
}

header {
    background-color: #2f4f4f;
    color: white;
    padding: 10px 0;
    text-align: center;
    background-image: url('path-to-header-background-image.jpg'); /* Add an elegant background image */
    background-size: cover;
    background-position: center;
}

.header-content {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

nav ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.banner {
    background-image: url('path-to-banner-image.jpg'); /* Add a relevant banner image */
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 100px 20px;
}

.content-section {
    padding: 50px 20px;
    max-width: 1200px;
    margin: auto;
}

.content-section h2 {
    color: #2e8b57;
    margin-bottom: 20px;
}

.content-section p, .content-section ul {
    color: #555;
    line-height: 1.6;
}

.content-section ul {
    list-style-type: none;
    padding: 0;
}

.content-section ul li {
    background: #e7f7f5;
    margin: 10px 0;
    padding: 10px 15px;
    border-radius: 5px;
}

footer {
    background-color: #2f4f4f;
    color: white;
    text-align: center;
    padding: 10px 0;
}

@media (max-width: 768px) {
    nav ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    nav ul li {
        display: block;
        margin: 10px 0;
    }

    .banner {
        padding: 50px 20px;
    }

    .content-section {
        padding: 20px;
    }
}
