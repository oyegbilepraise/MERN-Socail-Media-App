import './rightbar.css'

export default function rightbar() {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assests/avatar.png" alt="" className='birthdayImg'/>
                    <span className="birthdayText"><b>Fola and praise</b> and <b>3 other friends</b> has birthday today</span>
                </div>
                <img src="/assests/avatar.png" alt="" className='rightbarAd'/>
                <h4 className="rightbarTitle"> Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                        <img src="/assests/avatar.png" alt="" className='rightbarProfileImg'/>
                        <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Oyegbile Praise</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
