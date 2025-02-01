"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useReducer,
} from "react";

type VoteFilterState = {
  selectedFilter: "all" | "best" | "middle" | "bad";
};

type VoteFilterAction = {
  type: "SET_VOTE_FILTER";
  payload: "all" | "best" | "middle" | "bad";
};

const voteFiltersReducer = (
  state: VoteFilterState,
  action: VoteFilterAction,
): VoteFilterState => {
  switch (action.type) {
    case "SET_VOTE_FILTER":
      return { ...state, selectedFilter: action.payload };
    default:
      return state;
  }
};

type ContextValue = {
  filters: VoteFilterState;
  dispatchFilters: Dispatch<VoteFilterAction>;
};

export const VoteFiltersContext = createContext<ContextValue>({
  filters: { selectedFilter: "all" },
  dispatchFilters: () => {},
});

type Props = PropsWithChildren & {
  defaultFilter?: VoteFilterState;
};

export default function VoteFiltersProvider({
  children,
  defaultFilter = { selectedFilter: "all" },
}: Props): ReactElement {
  const [filters, dispatchFilters] = useReducer(
    voteFiltersReducer,
    defaultFilter,
  );

  return (
    <VoteFiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </VoteFiltersContext.Provider>
  );
}
