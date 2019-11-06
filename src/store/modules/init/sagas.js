import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addSuccess } from './actions';

function* initSaga(id) {
  const response = yield call(api.get, `/teste/${id}`);
  yield put(addSuccess(response.data.id));
}

export default all([takeLatest('@example/ADD_REQUEST', initSaga)]);
