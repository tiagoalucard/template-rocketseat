import { all } from 'redux-saga/effects';
import initSaga from './init/sagas';

export default function* rootSaga() {
  return yield all([initSaga]);
}
