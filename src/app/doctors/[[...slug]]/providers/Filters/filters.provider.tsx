'use client'

import { createContext, PropsWithChildren, ReactElement } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FilterEnums } from "../../enums/filter.enum";
import { GenderEnums } from "@/enums/gender";

type ContextValue = {
    changeFilter: (key: FilterEnums, value: string) => void;
    // removeFilter: <TKey extends keyof FiltersType>(key: TKey) => void;
    clearAll: () => void;
}

export const FiltersContext = createContext<ContextValue>({
    changeFilter: () => { },
    // removeFilter: () => { },
    clearAll: () => { },
});

type Props = PropsWithChildren;

const FiltersProvider = ({ children }: Props): ReactElement => {
    const pathname = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const changeFilter = (key: FilterEnums, value: string): void => {
        const segments = pathname.split('/');

        if (key === FilterEnums.GENDER && value !== GenderEnums.BOTH) {
            params.set(FilterEnums.GENDER, value);
        } else {
            params.delete(FilterEnums.GENDER);
        };

        if (key !== FilterEnums.GENDER) {
            const filterIndex = segments.indexOf(key.toLowerCase());

            if (filterIndex !== -1) {
                segments[filterIndex + 1] = value;
            } else {
                segments.push(key.toLowerCase(), value);
            }
        };

        const newPathname = segments.join('/');
        replace(`${newPathname}?${params.toString()}`);
    };

    // const removeFilter = <TKey extends keyof FiltersType>(key: TKey): void => {

    // };

    const clearAll = (): void => {
        replace("/doctors");
    };

    return (
        <FiltersContext.Provider value={{ changeFilter, clearAll }}>
            {children}
        </FiltersContext.Provider >
    )
}

export default FiltersProvider;
