import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
	return (
		<Grid container spacing={2} justify="center">
			<Grid item md={12}>
				<Typography variant="h2" gutterBottom align="center">
					TODO App
				</Typography>
			</Grid>
			<Grid item md={4}>
				<TodoList />
			</Grid>
		</Grid>
	);
};

export default App;
