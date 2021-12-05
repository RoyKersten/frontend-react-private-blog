import React from "react";


function LoginPage({authenticated, setAuthenticated}) {


    console.log("user is ingelogd: "+authenticated);


    return (
        <div className="homepage-container">
          <h1>Login Pagina</h1>
            <p>Druk op de knop om in te loggen</p>
            <button type="button" onClick={() => setAuthenticated(true)}>Inloggen</button>
        </div>


    );
}

export default LoginPage;
