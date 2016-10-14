export function isObject(who){
  return who === Object(who)
}
export function finder(attr){
  return function(val){
    return function(collection){
      let el
      for(let i=0;i<collection.length;i++){
        if(collection[i][attr] === val){
          el=collection[i]
          break
        }
      }
      return el
    }
  }
}
