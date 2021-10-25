import homePage from "../Pages/home";
import toDoPage from "../Pages/toDoPage";
import notFound from "../Pages/notFound";

const routes = {
    "/":homePage,
    "/toDo":toDoPage
}

const Router = function (pathname) {
    
    const isValidRoute = Object.keys(routes).find(key => key===pathname)
    
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    if(isValidRoute === undefined)
    {
        app.appendChild(notFound())
    }else{
        app.appendChild(routes[window.location.pathname])
    }
        
}

export {Router}