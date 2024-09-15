import create from "zustand";

interface Props {
    isMobileMenuActive: boolean;
    mobileMenuHandler: () => void;
}

const useStore = create<Props>((set) => ({
    isMobileMenuActive: false,
    mobileMenuHandler: () =>
        set((state) => ({ isMobileMenuActive: !state.isMobileMenuActive })),
}));

export default useStore;
