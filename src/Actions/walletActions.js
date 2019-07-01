import Dispatcher from '../Dispatcher';
import ActionTypes from '../Constants';

class WalletActions {

	addNewItem(item){
		Dispatcher.dispatch({
			actionType : ActionTypes.ADD_NEW_ITEM,
			payload : item
		});
	}
}

export default new WalletActions();