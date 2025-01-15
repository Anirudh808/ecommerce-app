import supabase from ".";

export const getAllProducts = async () => {
  const { data: products, error } = await supabase.from("products").select("*");
  console.log("log from getAllProducts");
  console.log(products);
  if (products) {
    return products;
  } else {
    throw new Error(error.toString());
  }
};
