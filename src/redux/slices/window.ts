// redux/slices/window.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WindowState {
  id: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  isActive: boolean;
  isFullScreen: boolean;
  isHidden: boolean;
}

interface WindowSliceState {
  windows: WindowState[];
}

const initialState: WindowSliceState = {
  windows: [],
};

const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    addWindow: (state, action: PayloadAction<WindowState>) => {
      const existingWindow = state.windows.find((window) => window.title === action.payload.title);
      if (existingWindow) {
        state.windows = state.windows.map((window) =>
          window.id === existingWindow.id
            ? { ...window, zIndex: 1, isActive: true }
            : { ...window, isActive: false, zIndex: 0 }
        );
        return;
      }
      state.windows.push(action.payload);
    },
    removeWindow: (state, action: PayloadAction<string>) => {
      state.windows = state.windows.filter((window) => window.id !== action.payload);
    },
    setActiveWindow: (state, action: PayloadAction<string>) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload
          ? { ...window, zIndex: 1, isActive: true }
          : { ...window, isActive: false, zIndex: 0 }
      );
    },
    setFullScreen: (state, action: PayloadAction<{ id: string; isFullScreen: boolean }>) => {
        console.log(action.payload.id, action.payload.isFullScreen);
        
      state.windows = state.windows.map((window) =>
        window.id === action.payload.id
          ? { ...window, isFullScreen: action.payload.isFullScreen }
          : window
      );
    },
    setHideWindow: (state, action: PayloadAction<{id: string; hidden: boolean, isActive?: boolean}>) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload.id
          ? { ...window, isHidden: action.payload.hidden, isActive: action.payload.isActive || false}
          : {...window, isActive: false, zIndex: 0}
      );
    },
    setWindowPosition: (state, action: PayloadAction<{ id: string; x: number; y: number; width?: number; height?: number }>) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload.id
          ? { ...window, x: action.payload.x, y: action.payload.y, width: action.payload.width || window.width, height: action.payload.height || window.height }
          : window
      );
    },
  },
});

export const { addWindow, removeWindow, setActiveWindow, setFullScreen, setWindowPosition, setHideWindow } = windowSlice.actions;
export default windowSlice.reducer;