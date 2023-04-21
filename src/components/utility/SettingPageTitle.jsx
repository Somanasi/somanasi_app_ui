const PageTitle = (URL) => {
    const currentRoute = URL.split('/')[-1];
    const title = document.title;
    title = `${title} | ${currentRoute}`;
    return title;
};
export default PageTitle;