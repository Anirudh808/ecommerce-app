import supabase from ".";

interface QueryPramsProps {
  brand?: string;
  "averageRating[gte]"?: string;
  "price[gte]"?: string;
  "price[lte]"?: string;
  connectivityTech?: string;
  sortField?: string;
  sortDirection?: string;
}

export async function fetchProducts(params: QueryPramsProps | null) {
  // const { filter = {}, sort } = queryParms;
  let query = supabase.from("products").select("*");
  console.log("average ", params?.["averageRating[gte]"]);
  if (params?.brand) {
    query = query.ilike("brand", params.brand);
  }
  if (params?.["averageRating[gte]"]) {
    query = query.gte("averageRating", Number(params?.["averageRating[gte]"]));
  }
  if (params?.["price[gte]"]) {
    query = query.gte("price", Number(params?.["price[gte]"]));
  }
  if (params?.["price[lte]"]) {
    query = query.lte("price", Number(params?.["price[lte]"]));
  }
  if (params?.connectivityTech) {
    query = query.ilike("connectivityTech", params.connectivityTech);
  }
  if (params?.sortField) {
    const isAscending =
      params.sortDirection === "asc" || params.sortDirection === undefined;
    query = query.order(params.sortField, { ascending: isAscending });
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching products:", error);
    throw error;
  }

  return data;
}
