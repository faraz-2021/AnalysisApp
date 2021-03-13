import { all, takeLatest } from "redux-saga/effects";
import { GET_WEATHER_REPORT } from "../redux/constant/constant";
import { GetWeather } from "./getWeatherSaga";
import { GetCity } from "./getCitySaga";
import { GET_CITIES } from "../redux/constant/constant";

function* watchMan() {
  yield takeLatest(GET_WEATHER_REPORT, GetWeather);
  yield takeLatest(GET_CITIES, GetCity);
}
export default function* rootSaga() {
  yield all([watchMan()]);
}
