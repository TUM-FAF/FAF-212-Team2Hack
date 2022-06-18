export interface Match {
    name: string;
    surname: string;
    picture: string;
    description: string;
    mutualConnections: number;
    mutualClubs: string[];
}

interface ProfileCardProps {
    profile: Match;
}