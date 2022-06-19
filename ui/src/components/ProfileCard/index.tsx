import React from 'react'
import {Box, Button, Card, Typography} from "@mui/material";
import {ProfileCardProps} from "./model";


const ProfileCard: React.FC<ProfileCardProps> = ({ profile}) => {
        return (
            <Card sx={{
                height: "100%",
                maxHeight: "250px",
                minWidth: "250px",
                paddingTop: "25px",
                paddingLeft: "10px",
                paddingRight: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "4px"
            }} >
                <Box display="flex" gap="2px" justifyContent="center">
                    <Typography sx={{fontSize: "18px", lineHeight: "12px", fontWeight: 600}}> {profile?.firstName} </Typography>
                    <Typography sx={{fontSize: "18px", lineHeight: "12px", fontWeight: 600}}> {profile?.lastName} </Typography>
                </Box>
                <Typography sx={{
                    fontSize: "12px",
                    lineHeight: "12px",
                    wordBreak: "break-word"
                }}> {profile?.description} </Typography>
                <Box display="flex" gap="2px" >
                    <Typography sx={{fontSize: "12px", lineHeight: "8px", textAlign: "center", color: "gray"}}>Mutual clubs:</Typography>

                </Box>
                {/*<Typography sx={{fontSize: "12px", lineHeight: "8px", color: "gray"}}>Mutual connections: {profile.mutualConnections}</Typography>*/}
                <Button sx={{marginTop: "120px"}}>Connect</Button>
            </Card>
        );
};
export default ProfileCard;