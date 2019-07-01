import { EventEmitter } from 'events';
import Dispatcher from '../Dispatcher';
import ActionTypes from '../Constants';

const CHANGE = 'CHANGE';
let _walletState = [];


class WalletStore extends EventEmitter {

	constructor() {
		super();
		Dispatcher.register(this._registerToActions.bind(this));
	}

	_registerToActions(action){
		switch(action.actionType) {
			case ActionTypes.ADD_NEW_TYPE:
				this._addNewItem(action.payload);
			break;
		}
	}

	_addNewItem(item){
		item.id = _walletState.length;
		_walletState.push(item);
		this.emit(CHANGE);
	}

	getAllItems(){
		return _walletState;
	}

	// Calculate the total budget.
    getTotalBudget() {
        let totalBudget = 0;
 
        _walletState.forEach((item) => {
            totalBudget += parseFloat(item.amount);
        });
 
        return totalBudget;
    }
	
	addChangeListner(callback){
		this.on(CHANGE,callback);
	}

	removeChangeListner(callback){
		this.removeListner(CHANGE,callback);
	}

}

export default new WalletStore();