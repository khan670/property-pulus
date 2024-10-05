import connectedDB from "@/config/database";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successfull sign in
    async signIn({ profile }) {
      //1: connect to database
      await connectedDB();
      //2: check if user exist
      const userExist = await User.findOne({ email: profile.email });
      //3: if not then add user to database
      if (!userExist) {
        // Truncked username if too long
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
        return true;
      }
      //4: return true to allow sign in
    },
    // modify the session object
    async session({ session }) {
      // 1:get user from database
      const user = await User.findOne({ email: session.user.email });
      // 2:assign the user id to the session
      session.user.id = user._id.toString();
      // 3:return session
      return session;
    },
  },
};
