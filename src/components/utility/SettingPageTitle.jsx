const PageTitle = (URL) => {
    const base_url = document.baseURI;
    let currentRoute;
    base_url === URL ? currentRoute = "Home" : currentRoute = URL.split('/')[-1];
    let title = document.title;
    return document.title =`${title} | ${currentRoute}`;
};
export default PageTitle;