import React, {useState} from 'react'
import {Box, Button, Card} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {useNavigate} from "react-router-dom";

const Settings: React.FC = () => {
    const [notif, setNotif] = useState<boolean>(false);
    const navigate = useNavigate();

    const gotofeed = () => navigate('/feed');
    return (
        <Card sx={{
            width: "500px",
            height: "400px",
            position: "absolute",
            top: "300px",
            left: "500px",
            zIndex: "999",
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center"
        }}>
            <Button startIcon={<AccessibilityIcon/>} >Change username</Button> <br/>
            <Button startIcon={<DarkModeIcon/>}>Change Theme</Button> <br/>
            <Button startIcon={<CircleNotificationsIcon/>} onClick={() => setNotif(prev => !prev)}
                  >Notifications {notif ? "On" : "Off"}</Button>
            <Button variant={"contained"} onClick={gotofeed}
                    sx={{marginTop: "30px"}}>
                close
            </Button>
        </Card>
    );
}

export default Settings;
