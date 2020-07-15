import { all, call } from 'redux-saga/effects';

import { watchFetchCollectionsStart } from './shop/shopSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
	yield all([call(watchFetchCollectionsStart), call(userSagas)]);
}