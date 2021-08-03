import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WalletConnectionState {
  isConnected?: boolean;
}

const initialState: WalletConnectionState = {
  isConnected: false
};

export const walletConnectionSlice = createSlice({
  name: "walletConnection",
  initialState,
  reducers: {
    connectWallet: state => {
      state.isConnected = true 
    },
    disConnectWallet: state => {
      localStorage.clear();
      state.isConnected = false 
    }
  }
})

export const { connectWallet, disConnectWallet } = walletConnectionSlice.actions;
export default walletConnectionSlice.reducer;