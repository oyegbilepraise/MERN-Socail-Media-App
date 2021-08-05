import './online.css'

export default function online() {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img src="/assests/avatar.png" alt="" className='rightbarProfileImg' />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">Oyegbile Praise</span>
            </li>
        </div>
    )
}
