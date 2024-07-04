// interface mango {
//   name: string = "Mango";
//   age: number = 30;
//   email: string = "john@example.com";
//   address?: object = {
//     city: "New York",
//     country: "USA",
//   };
// }

// interface poly {
//   name: string = "Mango";
//   age: number = 30;
//   email: string = "john@example.com";
// }
// export {};
interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}
const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
