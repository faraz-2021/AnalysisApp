import axios from "axios";
import { call, put } from "redux-saga/effects";
import { cityRecieved } from "../redux/action/action";
import { environment } from "../../environment";

export function* GetCity(action) {
  try {
    const response = yield call(async () => {
      console.log();
      const res = await axios.get(`${environment.api2}/countries/states`);
      return res;
    });

    let result = response.data.data;
    yield put(cityRecieved(result));
  } catch (err) {
    console.error(err);
  }
}
