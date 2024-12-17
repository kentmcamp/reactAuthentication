# User Authentication

## What is User Authentication

- `User Authentication` is verifying that an app’s users are who they say they are.
- Three Main Authentication Strategy Classes:
    1. `Knowledge` - Verification that the user knows something.
        - Passwords
        - Pins
        - Security Questions
    - Problems include:
        - Reliant on passwords strength.
        - Information can be guessable or searchable.
    1. `Ownership` - Verification that the user has something.A
        - Email Address
        - Mobile Phone
        - An OTP fob or app
    - Problems include:
        - When relaying on email, somebody could guess your email password, thus making it knowledge based as well.
        - Physical devices can be stolen.
        - Physical devices can be lost.
    1. `Biological` - Verification based on biological characteristics.
        - Facial Recognition
        - Fingerprint Readers
        - Eye Scans
    - Problems include:
        - Not as common for web based authentication.
        - Having the physical devices stolen can be painful.
- `Two-Factor Authentication` - Combines more than one authentication method, usually knowledge and ownership based.

## Basic Project Setup

- `Project Starting Projects`:

[GitHub - shaunwa/react-auth-starter](https://github.com/shaunwa/react-auth-starter)

- Running is:
    - Front End `npm run start`
    - Back End Node Express Server `npm run dev`
    - MongoDB Mongo Demon `mongod`

## Building a Login Page

- `LoginPage.js`

    ```jsx
    import { useState } from "react";
    import { useHistory } from "react-router-dom";

    export const LogInPage = () => {
      const [errorMessage, setErrorMessage] = useState("");
      const [emailValue, setEmailValue] = useState("");
      const [passwordValue, setPasswordValue] = useState("");

      const history = useHistory();

      const onLogInClicked = async () => {

      };

      return (
        <div className="content-container">
          <h1>Log In</h1>
          {errorMessage && <div className='fail'>{errorMessage}</div>}

          <input
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="email@domain.com"
          />
          <input
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>
            Log In
          </button>
          <button onClick={() => history.push("/forgot-password")}>
            Forgot Password?
          </button>
          <button onClick={() => history.push("/signup")}>Sign Up</button>
        </div>
      );
    };
    ```


## Building a Sign-Up Page

- `SignUpPage.js`

    ```jsx
    import { useState } from "react";
    import { useHistory } from "react-router-dom";

    export const SignUpPage = () => {
      const [errorMessage, setErrorMessage] = useState("");
      const [emailValue, setEmailValue] = useState("");
      const [passwordValue, setPasswordValue] = useState("");
      const [confirmPasswordValue, setConfirmPassword] = useState("");

      const history = useHistory();

      const onSignUpClicked = async () => {};

      return (
        <div className="content-container">
          <h1>Sign Up</h1>
          {errorMessage && <div className="fail">{errorMessage}</div>}

          <input
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="email@domain.com"
          />
          <input
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type="password"
            placeholder="password"
          />
          <input
            value={confirmPasswordValue}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="confirm password"
          />
          <button disabled={
                !emailValue || !passwordValue ||
                passwordValue !== confirmPasswordValue
            }
            onClick={onSignUpClicked}>
            Sign Up
          </button>
          <button onClick={() => history.push("/login")}>Already Signed Up?</button>
        </div>
      );
    };
    ```


## Create Private React Routes

- `Private Routes` are routes that only authenticated users can access.
- `PrivateRoute.js`

    ```jsx
    import { Route, Redirect } from 'react-router-dom'

    export const PrivateRoute = props => {
        const user = null;

        if (!user) return <Redirect to ="/login" />

        return <Route {...props} />
    }
    ```

- Import `PrivateRoute` into `Routes.js` and replace `<Route/>` components with paths you want to be private with `</PrivateRoute>`
- `Route.js`

    ```jsx
    import { PrivateRoute } from './auth/PrivateRoute';

    export const Routes = () => {
        return (
            <Router>
                <Switch>
                    <PrivateRoute path="/" exact>
                        <UserInfoPage />
                    </PrivateRoute>
                    <Route path='/login'>
                        <LogInPage/>
                    </Route>
                    ...
    ```


## JSON Web Token Basics

- `JSON Web Tokens (JWTs)` - Strings that we give to users when they authenticate.
    - They can be used instead of the user’s password to interact with protected server resources.
    - They are made up of long, encoded text strings (usually in base 64) made of three parts:
        - `Header` - Tells the type and signing algorithm.
        - `Payload` - The actual data the JWT contains.
            - Data in a payload are called `claims`
        - `Signature` - Used to verify the authenticity of the other parts.
            - It combines the header and payload and signing those using a specified algorithm and a secret key.

    ### How JWTs are Used in Full-Stack Apps

1. The user logs in.
2. The server generates a JWT containing the user’s information.
3. The server sends the JWT to the user.
4. The front end stores the JWT.
5. The front end includes this JWT whenever it needs privileged access.
6. The server uses the JWT’s signature to verify that it hasn’t been modified.

### Signing vs. Encrypting

- `Signing` proves that the data in the JWT hasn’t been modified.
- `Encrypting` prevents third parties from seeing the data inside of the JWT.

## Adding a Sign-Up Route to the Server

## Generating JSON Web Tokens

## Adding a Login Route to the Server

## Implementing JWTs on the Front End

## Adding JWTs to the Sign-Up Page

## Adding JWTs to Login Page

## Adding an Update User Route

## Verifying JSON Web Tokens

## Adding JWTs to the User Info Page

## Adding Logout Functionality

# Email Verification

# Resetting Passwords

# OAuth

# Prebuilt Authentication Options

# Best Practices

---

-
    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```

    - `

        ```jsx

        ```
