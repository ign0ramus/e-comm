import { all, call } from 'redux-saga/effects';

import { watchFetchCollectionsStart } from './shop/shopSagas';
import { userSagas } from './user/userSagas';
import { cartSagas } from './cart/cartSagas';
import { directorySagas } from './directory/directorySagas';

export default function* rootSaga() {
	yield all([
		call(watchFetchCollectionsStart),
		call(userSagas),
		call(cartSagas),
		call(directorySagas),
	]);
}
