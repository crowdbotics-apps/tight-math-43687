import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const vehiclehistoryandconditionreport_get_specs_read = createAsyncThunk("vehiclehistoryandconditionreport_response_get_VehicleSpecifications/vehiclehistoryandconditionreport_get_specs_read", async payload => {
  const response = await apiService.vehiclehistoryandconditionreport_get_specs_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const vehiclehistoryandconditionreport_response_get_VehicleSpecificationsSlice = createSlice({
  name: "vehiclehistoryandconditionreport_response_get_VehicleSpecifications",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(vehiclehistoryandconditionreport_get_specs_read.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(vehiclehistoryandconditionreport_get_specs_read.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(vehiclehistoryandconditionreport_get_specs_read.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  vehiclehistoryandconditionreport_get_specs_read,
  slice: vehiclehistoryandconditionreport_response_get_VehicleSpecificationsSlice
};