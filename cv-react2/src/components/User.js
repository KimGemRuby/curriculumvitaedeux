import React from 'react';
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationIcon from "@material-ui/icons/LocationOn"

const User = () => {
    return (
        <div className="user">
            <img src="./images/150px_150px_cni_adobespark.jpg" alt="" className="user__avatar" />
            <h1 className="user_name">KIM Soly</h1> 
            <p className="user_profession">Developpeur Web</p>
            <div className="user_infos">
                <p className="user_info">< HomeIcon />26 Pachot Laine 93190 Livry Gargan</p>
                <p className="user_info">< PhoneIcon /><a href="tel:+33624037104">0624037104</a></p>
                <p className="user_info"><MailIcon /><a href="mailto:solykim@gmail.com">solykim@gmail.com</a></p>
                <p className="user_info"><EventIcon />Date de naissance : 22 juillet 1983</p>
                <p className="user_info"><LocationIcon />Lieu de naissance : Montmorency (95)</p>
            </div>
        </div>
    );
};

export default User;