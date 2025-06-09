import { create } from "zustand";


const useSearch = create((set) => ({
    query: "",
    searchResults: [],
    isSearching: false,
    
    setQuery: (query) => set({ query }),
    
    setSearchResults: (results) => set({ searchResults: results }),
    
    setIsSearching: (status) => set({ isSearching: status }),
    
    handleSearch: (e, navigate) => {
        e.preventDefault();
        set((state) => {
            const trimmedQuery = state.query.trim();
            if (trimmedQuery !== "") {
                navigate(`/collections?search=${encodeURIComponent(trimmedQuery)}`);
                return { isSearching: true };
            }
            return state;
        });
    },
    
    clearSearch: () => set({ query: "", searchResults: [], isSearching: false }),
}));

export default useSearch;
