import React, { Fragment, useContext } from 'react';
import { Grid, Paper, Divider, TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TodoItem from '../TodoItem/TodoItem';
import { observer } from 'mobx-react-lite';
import { NoteStoreContext } from '../../Stores/NoteStore';
import styled from 'styled-components';

const TodoList: React.FC = observer(() => {
	const noteStore = useContext(NoteStoreContext);
	const StyledPaper = styled(Paper)`
		padding-bottom: 10px;
		overflow-y: auto;
		max-height: 500px;
	`;
	const StyledTextField = styled(TextField)`
		padding-bottom: 15px;
	`;
	return (
		<Fragment>
			<StyledPaper elevation={3}>
				<Grid
					container
					spacing={1}
					justify="center"
					alignItems="center"
				>
					<Grid item md={10}>
						<StyledTextField
							id="standard-basic"
							label="Add todo"
							fullWidth
							onChange={e =>
								noteStore.setUserString(e.target.value)
							}
							onKeyDown={e =>
								e.key === 'Enter' && noteStore.updateList()
							}
						/>
					</Grid>
					<Grid item md={1}>
						<IconButton
							aria-label="add"
							onClick={() => noteStore.updateList()}
						>
							<AddIcon fontSize="large" />
						</IconButton>
					</Grid>
				</Grid>
				<Divider />
				<Grid container justify="center">
					{noteStore.getList.map((result, i) => (
						<Fragment key={i}>
							<Grid item md={11}>
								<TodoItem item={result} position={i} />
							</Grid>
						</Fragment>
					))}
				</Grid>
			</StyledPaper>
		</Fragment>
	);
});

export default TodoList;
