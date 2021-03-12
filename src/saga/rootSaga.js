import { all, takeLatest } from "redux-saga/effects";
import { GET_WEATHER_REPORT } from "../redux/constant/constant";
import { GetWeather } from './getWeatherSaga';

function* watchMan() {
  yield takeLatest(GET_WEATHER_REPORT, GetWeather);
}
export default function* rootSaga() {
  yield all([watchMan()]);
}
