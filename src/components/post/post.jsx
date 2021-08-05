import { MoreVert } from '@material-ui/icons'
import './post.css'

export default function post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assests/avatar.png" className='postProfileImg' alt="" />
                        <span className="postUsername">Oyegbile Praise</span>
                        <span className="postDate">5 Min Ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hey! Its my first post:)
                        <img src="/assests/avatar.png" className='postImg' alt="" />
                    </span>

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <i className="fa fa-thumbs-up likeIcon" aria-hidden="true"></i>
                        <i className="fa fa-heart likeIcon" aria-hidden="true"></i>
                        <span className='postLikeCounter'>32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 Coments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
