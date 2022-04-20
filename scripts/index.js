var movies = [
    {
        name: "RRR",
        release_date: "25 March 2022",
        Image_url: "https://i.pinimg.com/736x/9d/9b/56/9d9b5609f828ab526e98c3637e82c0dc.jpg",
        rating: 8.9,
    },
    {
        name: "Pushpa",
        release_date: "17 Dec 2021",
        Image_url: "https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg",
        rating: 7.9,
    },
    {
        name: "KGF 2",
        release_date: "14 Aprial 2022",
        Image_url: "https://images.news18.com/ibnlive/uploads/2022/03/yash-2-16462987103x2.jpg?impolicy=website&width=510&height=356",
        rating: 9.6,
    },
    {
        name: "BahuBali",
        release_date: "10 July 2015",
        Image_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTANLW6o_XKmdd3zyIgBRb0OyEeqwB54QWJ7ZgJteucuSIZSEZE",
        rating: 8.1,
    },
    {
        name: "Dangal",
        release_date: "23 Dec 2016",
        Image_url: "https://i.pinimg.com/originals/a2/bf/94/a2bf94f21f32d8e172531ab31865b911.jpg",
        rating: 8.4,
    },
    {
        name: "Hera Feri",
        release_date: "31 March 2000",
        Image_url: "https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/50368182.jpg",
        rating: 8.1,
    },
    {
        name: "Master",
        release_date: "13 Jan 2021",
        Image_url: "https://wallpaperaccess.com/full/2543924.jpg",
        rating: 8.1,
    },
    {
        name: "Spider Man",
        release_date: "16 Dec 2021",
        Image_url: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
        rating: 8.4,
    },
    {
        name: "Ms Dhoni",
        release_date: "30 September 2016",
        Image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeQTJK-aG3Z5HF_M5giJZ1gyI0QgXy1Y7XM3o4bP0sSL0A8JBK",
        rating: 8,
    },
]

var sorteddata = JSON.parse(localStorage.getItem("movies"));
document.querySelector("#sort-buttons>select").addEventListener('change', function () {
    var sortType = document.querySelector("#sort-buttons>select").value;
    if (sortType == "none") {
        display(movies);
    }
    else {
        sorteddata.sort(function (a, b) {
            if (sortType == "lowToHigh") {
                return a.rating - b.rating;
            }
            return b.rating - a.rating;
        });
        display(sorteddata);
    }
});



function display(movies) {
    document.querySelector("#movies").innerHTML = "";
    movies.forEach(moviesEle => {
        var box = document.createElement("div");
        box.setAttribute('class', "box");

        var name = document.createElement('p');
        name.textContent = moviesEle.name;

        var img = document.createElement('img');
        img.src = moviesEle.Image_url;

        var releaseDate = document.createElement('p');
        releaseDate.textContent = moviesEle.release_date;

        var rating = document.createElement('p');
        rating.textContent = moviesEle.rating;

        box.append(name, img, releaseDate, rating);
        document.querySelector("#movies").append(box);

        localStorage.setItem("movies", JSON.stringify(movies));
    });
}
display(movies)
var image = document.querySelector("#slideshow>img");
var moviesList = ["https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg", "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg", "https://c4.wallpaperflare.com/wallpaper/996/743/625/pascal-blanche-dune-movie-dune-series-artwork-science-fiction-hd-wallpaper-preview.jpg"
    , "https://c4.wallpaperflare.com/wallpaper/361/823/829/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg","https://i.pinimg.com/originals/8b/1f/14/8b1f142728463daa12c292c1c4b38744.jpg"]
var index = 0;
function slide() {
    image.setAttribute("src", moviesList[(index++ % moviesList.length)]);
}
setInterval(slide, 2000);