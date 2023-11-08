import { configureStore } from "@reduxjs/toolkit"

import userReduer from "./userslice"
const appstore = configureStore({
  reducer: {
    user: userReduer,
  },
})

export default appstore
