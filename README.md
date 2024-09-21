INTERIOR HEALTH SERVICES

The Interior Health app is a brainschild of developers who saw the need to offer a solution to the looming crisis of affordable health in marginalised communities in Interior Kenya. We aim to provide affordable drugs and health care services to such individuals while working closely with the local health patronage in selling these drugs/services to the local communities. This project is also key in our graduation from the full stack software engineering program at aLX.

Project site link:https://jujutsualfayo.github.io/interiorhealth_v1/
Linkdln Authors: benjamin_alfayo1
               :Oscar_Obado

               INTERIOR HEALTH
               

             providing affordable health care to the most vulnerable people in interior Kenya
Description

The interior app is a pharmaceutical web application for selling over the counter drugs.

We come from a Country that is well and trully marred with a poor health care system. And we thought, let's create something that will help sort this issue out and while at it get ourselves to graduate.

Why Interior Health?

Our frontend (HTML, CSS, and JS) interacts with the backend (Flask). The pharma products are served from a JSON file, and the cart functionality is implemented by communicating with the backend via JavaScript fetch API.

TECH-STACK

FRONT-END(CLIENT SIDE)             BACKEND SIDE
Node.JS                        } restful api{   postgreSQL
CSS                                 
HTML

DEPENDENCIES

Flask==2.0.1
Werkzeug==2.0.3

DEPLOYMENT.
Node.js
parcel

AUTH/PASSWD


User enters email (for login) or both email + username (for signup). Front-end initially sends email/username to back-end.

If logging in, and an account does not exist with the given email, back-end returns a redirect code, and user is directed to sign-up.
Otherwise, back-end generates and returns a challenge token associated with the email.
Front-end temporarily stores challenge token in localStorage, then uses the Auth0 API to send a login email to the user. The login email includes a random code that user must enter to verify account.

Upon entering the verfication code, the user is redirected to the home page of IdeaDog. The redirect occurs on a URL hashed by Auth0 which the front-end parses to retrieve the user's Auth0 profile.

Front-end pulls up challenge token from localStorage and returns it to the back-end with the verified email. Back-end generates and returns a bearer token in the form of a cookie.

After being returned to the back-end, the challenge token is cleared from localStorage.
The bearer token has been set and the user can fully acccess ACCOUNT

AUTHORS

Benjamin Al fayo <Jujutsualfayo>
Oscar Obado <posei-d>

LICENCE

This project is licensed under the MIT License - see the LICENSE on the repo.
