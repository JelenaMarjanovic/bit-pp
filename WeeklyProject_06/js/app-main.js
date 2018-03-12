const mainModule = ((data, ui) => {
    // Initialize displaying top 50 shows at landing page
    const init = () => {        
        $.get(data.apiURLs.url)
        .done((response) => {
            const showList = data.createTop50(response);
            ui.displayTop50(showList);
        })
        .fail((response) => {
            alert("Your request failed!");
        });
    }

    // Exposed functions
    return {
        init
    }

})(dataModule, uiModule)