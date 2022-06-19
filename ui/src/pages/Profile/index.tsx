import React from 'react';
import './Profile.scss';
import { Button, Avatar } from '@mui/material';
import userSrc from '../../assets/images/user.svg';
import { useAppSelector } from '../../app/hooks';
import logoSrc from '../../assets/images/logo.png';
import DeleteIcon from '@mui/icons-material/Delete';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { blue } from '@mui/material/colors';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: '#44B700',
		color: '#44B700',
		boxShadow: `0 0 0 2px ${ theme.palette.background.paper }`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""'
		}
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0
		}
	}
}));

const Profile: React.FC<ProfileProps> = ({}) => {
	const user = useAppSelector(state => state.userState.user);
	
	return (
		<>
			<div className={ 'Profile flex flex-col h-full w-full' }>
				<div className={ 'flex h-1/6 w-full justify-center align-center' }>
					<Button className={ 'w-full h-full' } href={ '/' }>
						<img src={ logoSrc } alt={ 'wired' } style={ { width: '48px', height: '48px' } }/>
					</Button>
				</div>
				<div className={ 'flex h-4/6 w-full flex-col items-center justify-evenly' }>
					<Button startIcon={ <FeedIcon/> } className={ 'h-8 w-9/12' }>Feed</Button>
					<Button startIcon={ <FolderSharedIcon/> } className={ 'h-8 w-9/12' }>Profile</Button>
					<Button startIcon={ <GroupIcon/> } className={ 'h-8 w-9/12' }>Connections</Button>
					<Button startIcon={ <LogoutIcon/> } className={ 'h-8 w-9/12' }>Log out</Button>
					<Button startIcon={ <InfoIcon/> } className={ 'h-8 w-9/12' }>About</Button>
				</div>
				<div className={ 'flex h-1/6 w-full justify-center' }>
					<Button className={ 'Profile-button-wrap w-full h-full' } href={ '/' }>
						<div className={ 'profile-button' }>
							<StyledBadge
								overlap="circular"
								anchorOrigin={ { vertical: 'bottom', horizontal: 'right' } }
								variant="dot"
							>
								<Avatar
									alt={ user.name }
									src={ userSrc }
									sx={ { width: 48, height: 48, bgcolor: blue[300] } }
								/>
							</StyledBadge>
							<span className={ 'user-name' }>
								{ user.name }
							</span>
						</div>
					</Button>
				</div>
			</div>
		</>
	);
};

export default Profile;
