import React, { Fragment, useState } from 'react';
import { Grid, Paper, Divider, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC = () => {
	const [userString, setUserString] = useState('');
	const [userlist, setUserList] = useState([] as Array<string>);
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
							onChange={e => setUserString(e.target.value)}
						/>
					</Grid>
					<Grid item md={1}>
						<AddIcon
							onClick={() =>
								setUserList([...userlist, userString])
							}
							fontSize="large"
						/>
					</Grid>
				</Grid>
				<Divider />
				<Grid container direction="column" justify="center">
					{userlist.map((result, i) => (
						<Grid key={i} item md={12}>
							<TodoItem item={result} />
						</Grid>
					))}
				</Grid>
			</Paper>
		</Fragment>
	);
};

export default TodoList;
