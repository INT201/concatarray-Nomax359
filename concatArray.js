const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let array3;
  if (array1 == null && array2 == undefined){
    return undefined
  }else if(array1 == undefined && array2 == null){
    return undefined
  }else if(array1 == undefined && array2 == undefined){
    return undefined
  }else if(array1 == null && array2 == null){
    return undefined
  }else if(array1 == null && array1 == undefined){
    return array2
  }else if(array2 == null && array2 == undefined){
    return array1
  } return array3 = array1.concat(array2)
}
module.exports = concatArray
