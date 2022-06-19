import React, {useState} from 'react';
import './Profile.scss';
import { Button, Avatar } from '@mui/material';
import userSrc from '../../assets/images/user.svg';
import { useAppSelector } from '../../app/hooks';
import logoSrc from '../../assets/images/logo.png';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { blue } from '@mui/material/colors';
import {useNavigate} from "react-router-dom";
import Settings from "../../components/Settings";

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
	const navigate = useNavigate();
	const [visibility, setVisibility] = useState(false);

	const handleOnClick = () => navigate('/');
	const goToFeed = () => navigate('/feed');


	return (
		<>
			<div className={ 'profile flex flex-col h-full w-full' }>
				<div className={ 'flex h-1/6 w-full justify-center align-center' }>
					<Button className={ 'w-full h-full' } onClick={handleOnClick}>
						<img src={ logoSrc } alt={ 'wired' } style={ { width: '48px', height: '48px' } }/>
					</Button>
				</div>
				<div className={ 'flex h-4/6 w-full flex-col items-center justify-evenly' }>
					<Button startIcon={ <ChatBubbleOutlineIcon/> } className={ 'h-8 w-9/12' } onClick={goToFeed}>Feed</Button>
					<Button startIcon={ <GroupIcon/> } className={ 'h-8 w-9/12' }>Friends</Button>
					<Button startIcon={ <InfoIcon/> } className={ 'h-8 w-9/12' }>About</Button>
					<Button startIcon={ <SettingsIcon/> } className={ 'h-8 w-9/12' } onClick={()=> navigate('/settings')}>Settings</Button>
					<Button startIcon={ <LogoutIcon/> } className={ 'h-8 w-9/12' } onClick={() => {document.location.reload()}}>Log out</Button>
				</div>
				<div className={ 'flex h-1/6 w-full justify-center' }>
					<Button className={ 'profile-button-wrap w-full h-full' }  onClick={handleOnClick}>
						<div className={ 'profile-button' }>
							<StyledBadge
								overlap="circular"
								anchorOrigin={ { vertical: 'bottom', horizontal: 'right' } }
								variant="dot"
							>
								<Avatar
									alt={ user?.username  }
									src={ userSrc }
									sx={ { width: 48, height: 48, bgcolor: blue[300] } }
								/>
							</StyledBadge>
							<span className={ 'user-name' }>
								{ user?.firstName + ' ' + user?.lastName }
							</span>
						</div>
					</Button>
				</div>
			</div>
		</>
	);
};

export default Profile;
