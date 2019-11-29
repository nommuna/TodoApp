import React, { Fragment, useContext } from 'react';
import { Grid, Paper, Divider, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TodoItem from '../TodoItem/TodoItem';
import { observer } from 'mobx-react-lite';
import { NoteStoreContext } from '../../Stores/NoteStore';

const TodoList: React.FC = observer(() => {
	const noteStore = useContext(NoteStoreContext);
	return (
		<Fragment>
			<Paper elevation={3}>
				<Grid
					container
					spacing={1}
					justify="center"
					alignItems="center"
				>
					<Grid item md={11}>
						<TextField
							id="standard-basic"
							label="Add Item"
							onChange={e =>
								noteStore.setUserString(e.target.value)
							}
						/>
					</Grid>
					<Grid item md={1}>
						<AddIcon
							onClick={() => noteStore.updateList()}
							fontSize="large"
						/>
					</Grid>
				</Grid>
				<Divider />
				<Grid container direction="column" justify="center">
					{noteStore.getList().map((result, i) => (
						<Grid key={i} item md={12}>
							<TodoItem item={result} />
						</Grid>
					))}
				</Grid>
			</Paper>
		</Fragment>
	);
});

export default TodoList;
