// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphqlz

  type Product {
    id: ID!
    image: String
    price: Int
    des: String
    category: String
    status: Boolean
    createdAt: String
    updatedAt: String
  }

type Drink {
  id: ID!
  name: String
  type: String
  price: Float
  isStock: Boolean
  category: String
  rating: String
  image: String
  createdAt: String
  user: User # Added user relation
}

type Burger {
  id: ID!
  name: String
  description: String
  price: Float
  category: String
  image: String
  rating: String
  isStock: Boolean
  createdAt: String
  updatedAt: String
  user: User # Added user relation
}

type Pizza {
  id: ID!
  name: String
  description: String
  price: Float
  category: String
  image: String
  rating: String
  isStock: Boolean
  createdAt: String
  updatedAt: String
  user: User # Added user relation
}

# User information
type User {
  id: ID!
  name: String
  email: String
  password: String
  drinks: [Drink] # Added relation for drinks
  burgers: [Burger] # Added relation for burgers
  pizzas: [Pizza] # Added relation for pizzas
  createdAt: String
  updatedAt: String
}

# Mutation Type: Combine all mutations into one Mutation type
type Mutation {




 # Login mutation
  addLogin(email: String!, password: String!): AuthResponse!

  # User Mutations
  addUser(
    name: String!
    email: String!
    password: String!
  ): UserReturn

  updateUser(
    id: ID!
    name: String
    email: String
    password: String
  ): UserReturn

  deleteUser(id: ID!): String

  # Drink Mutations
  addDrink(
    name: String!
    type: String
    price: Float!
    isStock: Boolean
    category: String
    rating: String
    image: String
    userId: ID # Added userId as a required field
  ): DrinkReturn

  updateDrink(
    id: ID!
    name: String
    type: String
    price: Float
    isStock: Boolean
    category: String
    rating: String
    image: String
  ): DrinkReturn

  deleteDrink(id: ID!): String

  # Burger Mutations
  addBurger(
    name: String!
    description: String
    price: Float!
    category: String
    image: String
    rating: String
    isStock: Boolean!
    userId: ID # Added userId as a required field
  ): BurgerReturn

  updateBurger(
    id: ID!
    name: String
    description: String
    price: Float
    category: String
    image: String
    rating: String
    isStock: Boolean
  ): BurgerReturn

  deleteBurger(id: ID!): String

  # Pizza Mutations
  addPizza(
    name: String!
    description: String
    price: Float!
    category: String
    image: String
    rating: String
    isStock: Boolean!
    userId: ID # Added userId as a required field
  ): PizzaReturn

  updatePizza(
    id: ID!
    name: String
    description: String
    price: Float
    category: String
    image: String
    rating: String
    isStock: Boolean
  ): PizzaReturn

  deletePizza(id: ID!): String


   # Drink Mutations
  addProduct(
    name: String!
    type: String
    price: Float!
    isStock: Boolean
    category: String
    rating: String
    image: String
    userId: ID # Added userId as a required field
  ): DrinkReturn  
  
  
  # add common product Mutations
  addCommonProduct(
   image: String
    price: Int
    des: String
    category: String
    status: Boolean
  ): ProductReturn
}

# Return Types for mutations
type UserReturn {
  customError: String
  token: String
}

type DrinkReturn {
  customError: String
  drink: Drink
}
  
type ProductReturn {
  customError: String
  product: Product
}

type BurgerReturn {
  customError: String
  burger: Burger
}

type PizzaReturn {
  customError: String
  pizza: Pizza
}

type AuthResponse {
  customError: String
  token: String
}

# Query Type
type Query {
  drinks: [Drink]
  burgers: [Burger]
  pizzas: [Pizza]
  users: [User] # Query to fetch users
  products: [Product] # Query to fetch users

  #Single user query
  sUser(id: String!): User

  
  #Single dirk query
  sDrink(id: String!): Drink

  #Single burger query
  sBurger(id: String!): Burger

  #Single pizza query
  sPizza(id: String!): Pizza
}



`;
