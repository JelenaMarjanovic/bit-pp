const uiModule = (() => {
    // DOM selectors
    const DOMSelectors = {
        top50DivOutput: '#top-50',
        searchShowsInput: '#search-show',
        navForm: '.form-inline'
    }

    // Display top 50 TV shows at landing page
    const displayTop50 = (showList) => {
        showList.forEach((show) => {
            const $divColumn = $('<div>');
            const $divShow = $('<div>');
            const $poster = $('<img>');
            const $title = $('<p>');
            $divColumn.addClass('col-12 col-md-6 col-xl-4');
            $divShow.addClass('singleShow');
            $poster.attr('id', show.id);
            $poster.attr('src', show.poster);
            $poster.attr('alt', show.title);
            $title[0].textContent = show.title;
            $divShow.append($poster);
            $divShow.append($title);
            $divColumn.append($divShow);
            $(DOMSelectors.top50DivOutput).append($divColumn);
        });
    }

    // Exposed constants and functions
    return {
        DOMSelectors,
        displayTop50
    }
})()