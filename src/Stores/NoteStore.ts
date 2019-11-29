import { observable, action } from 'mobx';
import {createContext} from 'react';

class NoteStore {
    @observable userString = '';
    @observable userList = [] as Array<string>;

    @action setUserString(s: string) {
        this.userString = s;
    }

    @action updateList() {
        this.userList.push(this.userString);
    }

    @action getList(): Array<string>{
        return this.userList;
    }
}

export const NoteStoreContext = createContext(new NoteStore());