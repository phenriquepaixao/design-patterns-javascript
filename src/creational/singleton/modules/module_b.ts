// import { MyDatabaseClassic } from "../db/my-database-classic";
// import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a'

// const myDatabaseClassic = MyDatabaseClassic.instance;

// myDatabaseClassic.add({ name: "Paixão", age: 35 });
// myDatabaseClassic.add({ name: "Neto", age: 30 });
// myDatabaseClassic.add({ name: "Bebê", age: 4 });

// myDatabaseClassic.show();

// console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);

//#######################################################

// import { MyDatabaseModule } from '../db/my-database-module';
// import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a'

// const myDatabaseClassic = MyDatabaseModule;

// myDatabaseClassic.add({ name: "Paixão", age: 35 });
// myDatabaseClassic.add({ name: "Neto", age: 30 });
// myDatabaseClassic.add({ name: "Bebê", age: 4 });

// myDatabaseClassic.show();

// console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);

//#######################################################

import { MyDatabaseFunction } from '../db/my-database-function';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a'

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: "Paixão", age: 35 });
myDatabaseClassic.add({ name: "Neto", age: 30 });
myDatabaseClassic.add({ name: "Bebê", age: 4 });

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
