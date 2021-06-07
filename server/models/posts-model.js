import mongoose from 'mongoose';

const postModel = mongoose.Schema({
    name: String,
    creator: String,
    description: String,
    photo: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model("Post", postModel);
