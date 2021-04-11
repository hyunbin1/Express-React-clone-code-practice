import mongoose from 'mongoose';


// 스키마부터 작성하여 전체 카테고리를 정해준다.
const postSchema = mongoose.Schema({
    // 게시물 이름 유형
    title: String,
    // 문자열이 될 메세지
    message: String,
    // 작성자    
    creator: String,
    tags: [String],
    // 문자열이 될 이미지파일 - base64를 사용하여 변형해줄것임.
    selectedFile: String,
    // 좋아요 개수
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});
// /스키마 종료
// 스키마 종료 후에는 작성한 카테고리별로 모델을 만들어 데이터를 입력받을 수 있도록 해야된다. 

// 모델

//
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;












