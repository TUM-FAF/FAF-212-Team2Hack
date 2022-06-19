import React from 'react';
import { Box, Button, Card, Typography } from '@mui/material';
import { ProfileCardProps } from './model';

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
	return (
		<Card sx={ {
			height: '100%',
			maxHeight: '200px',
			maxWidth: '200px',
			padding: '4px',
			display: 'flex',
			flexDirection: 'column',
			gap: '4px'
		} }>
			<img src={ profile.picture } className="w-16 h-16 self-center"/>
			<Box display="flex" gap="2px" justifyContent="center">
				<Typography sx={ { fontSize: '18px', lineHeight: '12px', fontWeight: 600 } }> { profile.name } </Typography>
				<Typography
					sx={ { fontSize: '18px', lineHeight: '12px', fontWeight: 600 } }> { profile.surname } </Typography>
			</Box>
			<Typography sx={ {
				fontSize: '12px',
				lineHeight: '12px',
				wordBreak: 'break-word'
			} }> { profile.description } </Typography>
			<Box display="flex" gap="2px">
				<Typography sx={ { fontSize: '12px', lineHeight: '8px', color: 'gray' } }>Mutual clubs:</Typography>
				{
					profile.mutualClubs.map((club, index) => (
						<Typography key={ club + index }
						            sx={ { fontSize: '12px', lineHeight: '8px', color: 'gray' } }>{ club }</Typography>
					))
				}
			</Box>
			<Typography sx={ { fontSize: '12px', lineHeight: '8px', color: 'gray' } }>Mutual
			                                                                          connections: { profile.mutualConnections }</Typography>
			<Button>Connect</Button>
		</Card>
	);
};

export default ProfileCard;
