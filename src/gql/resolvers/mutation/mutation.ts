import { BurgerAPIs } from "./APIs/burger";
import { DrinkAPIs } from "./APIs/drink";
import { LoginAPIs } from "./APIs/login";
import { PizzaAPIs } from "./APIs/pizza";
import { ProductAPIs } from "./APIs/product";
import { UserAPIs } from "./APIs/user";

export const Mutation = {
  addDrink: DrinkAPIs.addDrink,
  addBurger: BurgerAPIs.addBurger,
  addPizza: PizzaAPIs.addPizza,
  addUser: UserAPIs.addUser,
  addLogin: LoginAPIs.login,
  addCommonProduct: ProductAPIs.addCommonProduct,
};
