import React, { Fragment } from 'react';
import { Typography, Paper } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
	item: string;
}

const TodoItem: React.FC<Props> = (props: Props) => {
	const StyledPaper = styled(Paper)`
		margin-top: 5px;
		margin-left: 20px;
		margin-right: 20px;
	`;
	return (
		<Fragment>
			<StyledPaper elevation={10}>
				<Typography variant="h5" gutterBottom>
					{props.item}
				</Typography>
			</StyledPaper>
		</Fragment>
	);
};

export default TodoItem;
