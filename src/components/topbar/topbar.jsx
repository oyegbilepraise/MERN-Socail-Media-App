import { Chat, Notifications, Person, Search } from "@material-ui/icons"
import "./topbar.css"
export default function topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Praise Network</span>
            </div>
            <div className="topbarCenter">
                <div className='searchbar'>
                    <Search className='searchIcon' />
                    <input type="text" placeholder='Search for freind, post or video' className='searchInput'/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>  
                <img src="/assests/avatar.png" className='topbarImg' alt="avatar" />
            </div>
        </div>
    )
}
