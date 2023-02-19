// import { MyDatabaseClassic } from "../db/my-database-classic";

// const myDatabaseClassic = MyDatabaseClassic.instance;

// myDatabaseClassic.add({ name: "Paulo", age: 35 });
// myDatabaseClassic.add({ name: "Bruna", age: 30 });
// myDatabaseClassic.add({ name: "Lola", age: 4 });

// myDatabaseClassic.show();

// export { myDatabaseClassic };

//#######################################################

// import { MyDatabaseModule } from "../db/my-database-module";

// const myDatabaseClassic = MyDatabaseModule;

// myDatabaseClassic.add({ name: "Paulo", age: 35 });
// myDatabaseClassic.add({ name: "Bruna", age: 30 });
// myDatabaseClassic.add({ name: "Lola", age: 4 });

// myDatabaseClassic.show();

// export { myDatabaseClassic };

//#######################################################

import { MyDatabaseFunction } from "../db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: "Paulo", age: 35 });
myDatabaseClassic.add({ name: "Bruna", age: 30 });
myDatabaseClassic.add({ name: "Lola", age: 4 });

myDatabaseClassic.show();

export { myDatabaseClassic };