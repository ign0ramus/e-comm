import { all, call } from 'redux-saga/effects';

import { watchFetchCollectionsStart } from './shop/shopSagas';
import { userSagas } from './user/userSagas';
import { cartSagas } from './cart/cartSagas';

export default function* rootSaga() {
	yield all([
		call(watchFetchCollectionsStart),
		call(userSagas),
		call(cartSagas),
	]);
}
