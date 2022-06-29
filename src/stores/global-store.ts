import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

interface GlobalStore {}

const useGlobalStore = create<GlobalStore>()(
    devtools(
        immer((set) => ({
            // Insert here
        }))
    )
);

export default useGlobalStore;
