import React, {useState} from 'react';
import {ProfileCardsMocks} from "./mocks/ProfileCards.mocks";
import {Box, Button} from "@mui/material";
import ProfileCard from "../../components/ProfileCard";


const Feed: React.FC<FeedProps> = () => {
    const [selectedCard, setSelectedCard] = useState<number>(0);

    const handleSelectedCard = (index: number) => () => {
        if (index === -1 || index === ProfileCardsMocks.length) return;
        setSelectedCard(index);
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Button onClick={handleSelectedCard(selectedCard - 1)}>prev</Button>
            <ProfileCard profile={ProfileCardsMocks[selectedCard]} />
            <Button onClick={handleSelectedCard(selectedCard + 1)}>next</Button>

        </Box>
    )
}

export default Feed;