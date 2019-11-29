import React from 'react';
import logo from './logo.svg';
import { Typography, Grid } from '@material-ui/core';

const App: React.FC = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="h2" gutterBottom align="center">
					TODO App
				</Typography>
			</Grid>
			<Grid item xs={12}></Grid>
		</Grid>
	);
};

export default App;
