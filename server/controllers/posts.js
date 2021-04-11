import PostMessage from '../models/postMessage.js';

// 요청, 응답 콜백함수를 getPosts에 넣어서 routes -posts.js에 돌려준다. 
// == 콜백지옥을 막기위해서 식을 여러개로 단순하게 나누는 것

// model 안에 postMessage를 불러오기 까지는 시간이 걸리기 때문에 async(비동기)함수로 만들어준다. 

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);

    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const createPost = async (req, res) => {
    // body에서 입력을 받아서
    const post = req.body;
    // 새로운 포스트로 작성을 해준다.
    const newPost = new PostMessage(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};