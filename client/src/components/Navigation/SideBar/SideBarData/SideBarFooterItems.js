import React from 'react';

import {
	AccountCircleRounded,
	Logout,
	Settings,
} from "@mui/icons-material";


const sideBarSmallMenu = [
	{
		name: 'Profile',
		icon: <AccountCircleRounded />,
		path: `/profile`
	},
	{
		name: 'Settings',
		icon: <Settings />,
		path: `/settings`
	},
	{
		name: 'Log out',
		icon: <Logout />,
		path: `/`
	},
];

export { sideBarSmallMenu };