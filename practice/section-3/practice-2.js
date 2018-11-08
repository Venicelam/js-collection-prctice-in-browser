'use strict';

function createUpdatedCollection(collectionA, objectB) {
   var a;
   var b;
   var Alength = collectionA.length;
   var B = objectB.value;
   var Blength = B.length;
   var characterCount = 0;
   for (b = 0; b < Blength; b++){
     for (a = 0; a < Alength; a++){
      if (collectionA[a].key == B[b]){
        collectionA[a].count = collectionA[a].count - ~~(collectionA[a].count/3)
      }
    }
    }
    console.log (collectionA);
    return collectionA;
}
