import mediaRunningReducer from "./mediaRunning/mediaRunning";
import walletConnectionReducer from "./walletConnection/walletConnection";

const rootReducers = {
  mediaRunning: mediaRunningReducer,
  walletConnection: walletConnectionReducer
};

export default rootReducers;
