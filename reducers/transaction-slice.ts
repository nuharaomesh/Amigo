import api from "@/api/api";
import Transaction from "@/models/Transaction";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllTrs = createAsyncThunk("transaction/getAll", async () => {
  try {
    const resp = await api.get("/transaction/get");
    return resp.data;
  } catch (e) {
    throw new Error("error in get all transactions: " + e);
  }
});

export const saveTransaction = createAsyncThunk(
  "transaction/save",
  async (data: Transaction) => {
    try {
      const resp = await api.post("/transaction/save", data);
      console.log(resp.data);
      return resp.data;
    } catch (e) {
      throw new Error("error in save transaction: " + e);
    }
  }
);

const TransactionSlice = createSlice({
  name: "transaction",
  initialState: {
    trList: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTrs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trList = action.payload;
      })
      .addCase(getAllTrs.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected get all crops: ", action.payload);
      })
      .addCase(getAllTrs.pending, (state, action) => {
        state.status = "loading";
        console.log("pending get all crops");
      });
    builder
      .addCase(saveTransaction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trList.push(action.payload);
      })
      .addCase(saveTransaction.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected save crops: ", action.payload);
      })
      .addCase(saveTransaction.pending, (state, action) => {
        state.status = "loading";
        console.log("pending save crops");
      });
  },
});

export default TransactionSlice.reducer;
