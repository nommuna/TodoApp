import React, { Fragment, useContext } from 'react';
import { Typography, Paper, Grid, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import { observer } from 'mobx-react-lite';
import { NoteStoreContext } from '../../Stores/NoteStore';

interface Props {
	item: string;
	position: number;
}

const TodoItem: React.FC<Props> = observer((props: Props) => {
	const noteStore = useContext(NoteStoreContext);
	const StyledPaper = styled(Paper)`
		margin-top: 5px;
		margin-left: 20px;
		margin-right: 20px;
	`;
	const StyledTypography = styled(Typography)`
		font-size: 100px;
		font-weight: 500;
		padding-left: 10px;
		padding-top: 5px;
	`;
	return (
		<Fragment>
			<StyledPaper elevation={10}>
				<Grid container justify="center" alignItems="center">
					<Grid item md={11}>
						<StyledTypography variant="h5" gutterBottom>
							{props.item}
						</StyledTypography>
					</Grid>
					<Grid item md={1}>
						<IconButton
							aria-label="add"
							onClick={() => noteStore.removeItem(props.position)}
						>
							<DeleteIcon fontSize="default" />
						</IconButton>
					</Grid>
				</Grid>
			</StyledPaper>
		</Fragment>
	);
});

export default TodoItem;
