export interface Match {
    firstName: string;
    lastName: string;
    // picture: string;
    description: string;
    // mutualConnections: number;
    // mutualClubs: string[];
}

interface ProfileCardProps {
    profile: Match;
}