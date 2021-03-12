import axios from "axios";
import { call, put } from "redux-saga/effects";
import { weatherReportRecieved } from "../redux/action/action";
import { environment } from "../../environment";

export function* GetWeather(action) {

  try {
    const response = yield call(async () => {
        console.log()
      const res = await axios.get(
        `${environment.apiBase}/data/2.5/weather?q=delhi&appid=82d8cc4232550a6f6fd1dbd1c16570c0`
      );
      return res;
    });
    let result = response.data;
    yield put(weatherReportRecieved(result));
  } catch (err) {
    console.error(err);
  }
}
