import React, {useCallback, useEffect, useState} from 'react';
import {ProfileCardsMocks} from "./mocks/ProfileCards.mocks";
import {Box, Button} from "@mui/material";
import ProfileCard from "../../components/ProfileCard";
import {useAppSelector} from "../../app/hooks";
import {API_URL} from "../../constants";
import axios from "axios";
import User from "../../features/user/User";

interface Card {
    firstName: string;
    lastName: string;
    description: string;
}

const Feed: React.FC<FeedProps> = () => {
    const [selectedCard, setSelectedCard] = useState<number>(0);
    const [cards, setCards] = useState<Card[]>([{firstName: '', lastName: '', description: ''}]);
    const user = useAppSelector(state => state.userState.user);

    const handleSelectedCard = (index: number) => () => {
        if (index === -1 || index === ProfileCardsMocks.length) return;
        setSelectedCard(index);
    }

    const getProfileCards = useCallback(
        async () => {
            if (user) {
                const result = await axios.get(API_URL + 'users/suggestions', {
                    params: {
                        university: user.university,
                        school: user.school,
                        username: user.username
                    },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                const data = result.data as User[];
                setCards(data.map(user => {
                    return {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        description: user.description
                    }
                }));

            }
        },
        []);


    useEffect(() => {
        getProfileCards();
    }, []);


    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Button onClick={handleSelectedCard(selectedCard - 1)}>prev</Button>
            <ProfileCard profile={cards[selectedCard]}/>
            <Button onClick={handleSelectedCard(selectedCard + 1)}>next</Button>

        </Box>
    )
}

export default Feed;