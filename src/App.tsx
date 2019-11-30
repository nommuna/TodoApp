import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import TodoList from './components/TodoList/TodoList';
import styled from 'styled-components';
import 'typeface-roboto';

const App: React.FC = () => {
	const StyledTypography = styled(Typography)`
		color: rgba(175, 47, 47, 0.15);
		font-size: 100px;
		font-weight: 100;
	`;
	return (
		<Grid container spacing={2} justify="center">
			<Grid item md={12}>
				<StyledTypography variant="h2" gutterBottom align="center">
					todos
				</StyledTypography>
			</Grid>
			<Grid item md={4}>
				<TodoList />
			</Grid>
		</Grid>
	);
};

export default App;
