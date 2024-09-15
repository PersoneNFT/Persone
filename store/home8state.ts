import create from "zustand";

interface Props {
    itemCurrentTab: number;
    isGridOrList: string;
    itemTabHandler: (select: number) => void;
    gridOrListHandler: (select: string) => void;
}

const useStore = create<Props>((set) => ({
    itemCurrentTab: 0,
    isGridOrList: "grid",
    itemTabHandler: (select) => set(() => ({ itemCurrentTab: select })),
    gridOrListHandler: (select) => set(() => ({ isGridOrList: select })),
}));

export default useStore;
