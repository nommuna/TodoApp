import { observable, action, computed } from 'mobx';
import { createContext } from 'react';
import { enableLogging } from 'mobx-logger';

// enableLogging();

class NoteStore {
	@observable userString = '';
	@observable userList = [] as Array<string>;

	@action setUserString(s: string) {
		this.userString = s;
	}

	@action updateList() {
		if (this.userString === '' && this.userList.length >= 0) {
			return;
		} else {
			this.userList.push(this.userString);
		}
	}

	@action getList(): Array<string> {
		this.userString = '';
		return this.userList;
	}

	@action removeItem(index: number) {
		this.userList.splice(index, 1);
	}
}

export const NoteStoreContext = createContext(new NoteStore());
