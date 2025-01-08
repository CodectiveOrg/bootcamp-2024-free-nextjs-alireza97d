type ListItems = "city" | "specialty" | "degree" | "gender";
type SearchParams = { [key: string]: string | string[] | undefined };
export type ResultObject = Partial<Record<ListItems, string>>;
type ConvertListToObject = (
  list: (ListItems | string)[],
  searchParams: SearchParams,
) => ResultObject;

const convertListToObject: ConvertListToObject = (
  list,
  searchParams,
): ResultObject => {
  const result: ResultObject = {};
  let currentKey: ListItems | null = null;

  if (list) {
    list.forEach((item) => {
      if (["city", "specialty", "degree"].includes(item)) {
        currentKey = item as ListItems;
        result[currentKey] = "";
      } else if (currentKey) {
        result[currentKey] = item;
        currentKey = null;
      }
    });
  }

  const filteredSearchParams: Record<string, string> = {};
  Object.keys(searchParams).forEach((key) => {
    const value = searchParams[key];
    if (typeof value === "string") {
      if (key === "city" && result.city !== undefined) {
        // Skip adding the city from searchParams if city is already in the list
        return;
      }
      filteredSearchParams[key] = value;
    } else if (Array.isArray(value)) {
      filteredSearchParams[key] = value.join(",");
    }
  });

  return { ...result, ...filteredSearchParams };
};

export default convertListToObject;
