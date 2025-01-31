"use client";

import {
    createContext,
    Dispatch,
    PropsWithChildren,
    ReactElement,
    useReducer,
} from "react";

type FilterState = {
    selectedFilter: "all" | "visited" | "noVisited";
};

type FilterAction = {
    type: "SET_FILTER";
    payload: "all" | "visited" | "noVisited";
};

const reviewsFiltersReducer = (
    state: FilterState,
    action: FilterAction
): FilterState => {
    switch (action.type) {
        case "SET_FILTER":
            return { ...state, selectedFilter: action.payload };
        default:
            return state;
    }
};

type ContextValue = {
    filters: FilterState;
    dispatchFilters: Dispatch<FilterAction>;
};

export const ReviewsFiltersContext = createContext<ContextValue>({
    filters: { selectedFilter: "all" },
    dispatchFilters: () => { },
});

type Props = PropsWithChildren & {
    defaultFilter?: FilterState;
};

export default function ReviewsFiltersProvider({
    children,
    defaultFilter = { selectedFilter: "all" },
}: Props): ReactElement {
    const [filters, dispatchFilters] = useReducer(reviewsFiltersReducer, defaultFilter);

    return (
        <ReviewsFiltersContext.Provider value={{ filters, dispatchFilters }}>
            {children}
        </ReviewsFiltersContext.Provider>
    );
}
