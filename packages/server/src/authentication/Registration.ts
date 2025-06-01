import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

export interface UserDoc extends mongoose.Document {
   _id: mongoose.Types.ObjectId;
   facebookId?:string;
   googleId?:string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
   photo: string,
  createdAt:Date;
}

const UserSchema = new Schema<UserDoc>({
  facebookId:{type:String, unique:true, sparse:true},
  googleId:{type:String, unique:true, sparse:true},
  firstName: { type: String },
  lastName:  { type: String },
  photo: { type: String, required:false, },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: false, },
  createdAt: { type: Date, default: Date.now },
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
  const user = this as UserDoc;
  if (!user.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (err) {
    next(err as any);
  }
});

const User =  mongoose.model<UserDoc>('registers', UserSchema);

export default User;
