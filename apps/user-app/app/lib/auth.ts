// import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            phone: { label: "Phone number", type: "text", placeholder: "1231231231", required: true },
            password: { label: "Password", type: "password", required: true }
          },
          // TODO: User credentials type from next-aut
          async authorize(credentials: any) {
            // Do zod validation, OTP validation here
            // const createUser = await db.user.create({
            //     data: {
            //         number: credentials.phone,
            //         password: credentials.

            //     }
            // })
            console.log(credentials)
            return {
                id:1,
                phone: "123",
                password: "sasa",
                name:"amj",
                email:"amj",
            }
            // const hashedPassword = await bcrypt.hash(credentials.password, 10);
            // try {
            //     const existingUser = await db.user.findFirst({
            //         where: {
            //             number: credentials.phone
            //         }
            //     });
    
            //     if (existingUser) {
            //         const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
            //         if (passwordValidation) {
            //             return {
            //                 id: existingUser.id.toString(),
            //                 name: existingUser.name,
            //                 email: existingUser.number
            //             }
            //         }
            //         return null;
            //     }

            
            //     const user = await db.user.create({
            //         data: {
            //             number: credentials.phone,
            //             password: hashedPassword
            //         }
            //     });
            
            //     return {
            //         id: user.id.toString(),
            //         name: user.name,
            //         email: user.number
            //     }
            // } catch(e) {
            //     console.error(e);
            // }

            // return null
          },
          
        })
    ],
    secret: "secret",
    callbacks: {
        session: ({ session, token, user}: any ) => {
            console.log("session:",session);
            session.id = token.sub;
            return session;
        }
    }
    // secret: process.env.JWT_SECRET || "secret",
    // callbacks: {
    //     // TODO: can u fix the type here? Using any is bad
    //     async session({ token, session }: any) {
    //         session.user.id = token.sub

    //         return session
    //     }
    // },
    // pages:{
    //     signIn: "signin",
    //     signOut: "signout"
    // }
  }
  