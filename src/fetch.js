let searchImage = async (API, value) => {
    try {
        let res = await fetch(
            `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`
        );

        let data = await res.json();
        return data;

    } catch (err) {
        console.log(err);
    }
};

let append = (data, container) => {

    data.forEach(({urls: { small } }) => {


        let div = document.createElement("div");
        div.setAttribute("class", "imageDiv");

        let photo = document.createElement("img");
        photo.src = small;

        div.append(photo);
        container.append(div);
    });
};
export { searchImage, append };