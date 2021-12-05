import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogPostPage from "./pages/BlogPostPage";
import BlogOverviewPage from "./pages/BlogOverviewPage";
import Header from "./components/Header";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <div>
            <Router>
                <Header authenticated={isAuthenticated} setAuthenticated={toggleIsAuthenticated}/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/login">
                        <LoginPage authenticated={isAuthenticated} setAuthenticated={toggleIsAuthenticated}/>
                    </Route>
                    <Route exact path="/blogposts">
                        <BlogOverviewPage/>
                    </Route>
                    <Route path="/blogposts/:id">
                        <BlogPostPage/>
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;


//Stappen plan pagina component maken
// [X] directory genaamd "pages"
// [X] JavaScript bestandje maken voor iedere pagina (met hoofdletter!)
// [X] type rsc dan tab => om boilerplate component te maken
// [X] test je pagina component door ze allemaal in App.js te importeren

//Stappenplan Routing implementeren:
// [X] npm install react-router-dom@5.1.2
// [X] BrowserRouter as Router importeren uit react-router-dom (index.js)
// [X] Switch, route importeren uit react-router-dom (App.js)

//Implementeren:
// [X] 1. Routing bedenken door het Switch en Route component te gebruiken in App.js
// [X] 2. Maak een navigatiebalk met de links naar de Home Pagina, Login pagina en Blog Overzicht pagina. Zorg dat deze op iedere pagina te zien is.
//     Gebruik hiervoor het NavLink component en zoek op hoe dit ook alweer werkte met die actieve css class
// [X] 3. De Login pagina bevat simpelweg een knop met "Inloggen" die de gebruiker doorstuurt naar overzichtspagina;
//     Gebruik hiervoor useHistory om de gebruiker door te sturen naar de BlogOverzichtPagina

//Blogpost Overzicht pagina Maken:
// [X] 1. Maak eerst met eigen-bedachte tekst een structuur voor de overzichtspagina (wat moet er allemaal op ?) .maak ook alvast een link-component, etc.
// [X] 2. Importeer de "echte" posts zoals beschreven in het voorbeeld
// [X] 3. Checkyourself before you wreck yourself ! console log de data en bekijk wat het is ?
//        Array ?, Object? Object met Arrays of andersom ?
// [X] 4. Is er ene handige manier om al die data niet handmatig uit te hoeven schrijven ?
// [X] 5. Zorg ervoor dat er een link en een titel voor iedere post wordt gegenereerd
