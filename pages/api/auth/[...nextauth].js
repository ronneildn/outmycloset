import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import GithubProvider from "next-auth/providers/github"
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)

                const {username, password} = credentials;
                console.log(`${username} - ${password}`);

                const res =  await fetch('http://localhost:3000/api/login', {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({username, password})
                })
                .then((response) => {
                    console.log("next auth response")
                    //console.log(response);
                    //console.log(response.json());
                    return response.json();
                });

                //console.log(res);

                // If no error and we have user data, return it
                if (res.token) {
                    console.log("---return")
                    console.log(res)
                  return res
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
}

export default NextAuth(authOptions)
