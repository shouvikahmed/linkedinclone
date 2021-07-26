import React from 'react'
import "./Header.css"
import "./HeaderOption.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import { Avatar } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={SmsRoundedIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsSharpIcon} title='Notifications' />
                <HeaderOption avatar='https://unplash.com/random/' title='Me' />

            </div>
        </div>
    )
}

export default Header
