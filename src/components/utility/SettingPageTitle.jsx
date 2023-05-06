const PageTitle = (URL) => {
    const currentRoute = URL.split('/');
    console.log(currentRoute)
    const title = document.title;
    document.title =`${title} | ${currentRoute[currentRoute.length - 1]}`;
};
export default PageTitle;