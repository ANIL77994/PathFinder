import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';  
import UserModel from '@/app/utils/models/User';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {

        const user = await UserModel.findOne({ email: credentials?.email });
        

        if (!user) {
          throw new Error('No user found with the email');
        }

        // Compare passwords using bcrypt
        const isValidPassword = await bcrypt.compare(credentials?.password, user.password);
        if (!isValidPassword) {
          throw new Error('Invalid password');
        }

        // Return user data if authentication succeeds
        return {
          id: user._id.toString(),
          username: user.username,
          email: user.email,
        };
      },
    }),
  ],
  secret: process.env.SECRET_KEY,

  callbacks: {
    async session({ session, token }) {
      // Attach user ID and email to session
      if (token) {
        session.user.id = token.sub;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Attach user data to JWT token
      if (user) {
        token.sub = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
