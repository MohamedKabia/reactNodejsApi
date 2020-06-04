import React from 'react'

function Home() {
    return (
        <div className="home">
            <div className="s-container s-mt-20">
                <div className="s-row">
                    <div className="s-col-sm-12 s-col-lg-8">
                        <div className="card">
                            <div className="s-heading s-primary-text">How did I get it done?</div>
                            <div className="s-mt-10">
                                <p>Using Node.js for the first as my serverside language, with its pros cons but the experience was great.</p>
                                <ul className="s-list">
                                    <li><h1>Create Account Logic</h1>  <br/><p>
                                    When a new user-submitted a for to register the data is first checked on the frontend if
                                     the email is a valid string. and the password is equal to the repeat password. if the data 
                                     is authenticated the form is submitted (a dispatch event is triggered). This event is bind middleware 
                                     this middleware is run between the form submission. if user data pass the backend authentication the
                                      user is saved to the database.
                                     The middleware then takes the response and dispatch an error function or success. </p></li>
                                    <li>What Happened At The Back-end <br/><p>
                                    when a create account API request is made to the server, the request body email is checked if a user is 
                                    already register with that email if not the request body is checked for all required inputs. On successful
                                     authentication, the request
                                     body password is hashed and stored in the database with all other parameters.</p></li>

                                     <li><h1>Login Logic</h1> <br></br>
                                     <p>
                                     Similar to when a user creates an account, authentication is done both front and back. When the API gets the 
                                     login request the database is checked if the user email exists if so the stored user password is unhashed and 
                                     compare to the request body password. If the user credentials are correct a 
                                     son web token is sent. this token is stored as a cookie and expires after 72hrs.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home