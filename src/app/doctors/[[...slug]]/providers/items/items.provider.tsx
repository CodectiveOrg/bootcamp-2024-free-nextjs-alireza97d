// 'use client'

// import { createContext, PropsWithChildren, ReactElement, useCallback, useContext, useEffect, useState } from "react";

// import { DoctorModel } from "@/types/doctor.type";

// import { FiltersContext } from "../Filters/filters.provider";

// type ContextValue = {
//     filteredItems: DoctorModel[];
// }

// export const ItemsContext = createContext<ContextValue>({
//     filteredItems: [],
// });

// type Props = PropsWithChildren & {
//     items: DoctorModel[]
// };

// const ItemsProvider = ({ children, items }: Props): ReactElement => {
//     const { filters } = useContext(FiltersContext);

//     const [filteredItems, setFilteredItems] = useState<DoctorModel[]>([]);


//     const splitedDoctors = useCallback((item: DoctorModel): DoctorModel[] => {

        
//         // if (filters.even && item.value % 2 === 0) {
//         //     return true;
//         // }

//         // if (filters.odd && item.value % 2 === 1) {
//         //     return true;
//         // }

//         // if (filters.three && item.value % 3 === 0) {
//         //     return true;
//         // }

//         // if (filters.five && item.value % 5 === 0) {
//         //     return true;
//         // }

//         // return !!(filters.seven && item.value % 7 === 0);

//     }, [filters])


//     useEffect(() => {
//         setFilteredItems(items.filter(splitedDoctors))
//     }, [splitedDoctors, items])


//     return (
//         <ItemsContext.Provider value={{ filteredItems }}>
//             {children}
//         </ItemsContext.Provider >
//     )
// }

// export default ItemsProvider;