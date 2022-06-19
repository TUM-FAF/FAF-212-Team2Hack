import React, {useState, useEffect} from 'react'
import {Box, Button, Card} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const Settings: React.FC<SettingsProps> = ({setVisibility}) => {
    const [notif, setNotif] = useState<boolean>(false);

    return (
        <Card sx={{width: "400px", height: "400px", position: "absolute", top: "300px", left: "600px", zIndex: "999"}}>
            <Button startIcon={<AccessibilityIcon />} sx={{marginTop: "60px"}}>Change username</Button> <br/>
            <Button startIcon={<DarkModeIcon />} sx={{marginTop: "30px"}}>Change Theme</Button> <br />
            <Button startIcon={<CircleNotificationsIcon />} onClick={() => setNotif(prev => !prev)} sx={{marginTop: "30px"}}>Notifications {notif? "On" : "Off"}</Button>
            <Button variant={"contained"} onClick={() => setVisibility()} sx={{position: "absolute", bottom: "25px", right: "150px"}}>
                close
            </Button>
        </Card>
    );
}

export default Settings;
