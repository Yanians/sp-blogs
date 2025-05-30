// types/express/index.d.ts
import UserDoc from './authentication/Registration'; // Adjust path if needed

declare global {
  namespace Express {
     interface User {
      _id: string;
      email: string;
    }
  }
}
