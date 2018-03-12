const dataModule = (() => {

    // TV Maze API
    const apiURLs = {
        // List of shows endpoint
        url: 'http://api.tvmaze.com/shows'
    }

    /**
     * Represent basic info about TV show at top 50
     * @constructor
     * @param {number} id - The TV show's id
     * @param {string} title - The TV show's title
     * @param {string} poster - The TV show's poster URL
     */
    class ShowBasic {
        constructor(id, title, poster) {
            this.id = id;
            this.title = title;
            this.poster = poster;
        }
    }

    // methods

    // Create the list of top 50 TV shows
    const createTop50 = (showResponse) => {
        let showList = [];

        // Filter TV shows with average rating above 8
        const topShows = showResponse.filter(showResponse => showResponse.rating.average >= 8.5);

        topShows.forEach((show, index) => {
            if (index < 50) {
                showList.push(new ShowBasic(show.id, show.name, show.image.medium));
            }
        });

        return showList;
    }

    // Exposed constants and functions
    return {
        apiURLs,
        createTop50
    }
})()