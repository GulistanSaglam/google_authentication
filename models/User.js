import { model, models, Schema } from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'],
        required: [true, 'Email is required'],
    },

    username: {
        type: String,
        require: [true, 'Username is required']
    },

    image: {
        type: String
    },

}, {
    timestamps: true
});

const User = models.User || model('User', UserSchema);
export default User;