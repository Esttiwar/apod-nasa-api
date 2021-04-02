(() => {

    const API_key = "JeEMRksLDV54PQ3v7IELaJvwFiGLSKyudfabEYJz";

    const $error = document.querySelector(".error")


    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_key}`)
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            console.log(json)

            const $title = document.querySelector(".title").textContent = `${json.title}`;
            const $author = document.querySelector(".author").textContent = `Author: ${json.copyright}`;
            const $date = document.querySelector(".date").textContent = `${json.date}`;
            const $img = document.querySelector("img").setAttribute("src", json.url);
            const $explanation = document.querySelector(".explanation").textContent = `${json.explanation}`;
            
        })
        .catch((error) => {
            console.log(error);
            let message = error.statusText || "Oops, something's wrong.";
            $error.innerHTML = `Error ${error.status}: ${message}`;
        })




})();