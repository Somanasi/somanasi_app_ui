const PageTitle = (URL) => {
    const base_url = document.baseURI;
    let currentRoute;
    base_url === URL ? currentRoute = "Home" : currentRoute = URL.split('/')[-1];
    const title = document.title;
    title = `${title} | ${currentRoute}`;
    return title;
};
export default PageTitle;