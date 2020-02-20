export const   interfacePropertyToString = ( property ) => {
    var arr = property.match( /[\s\S]*{[\s\S]*\.([^\.; ]*)[ ;\n]*}/ );
    return arr[1];
};
export const objectKeys = (obj, prefix = ''):any[] => 
  Object.keys(obj).reduce((res, el) => {
    if( Array.isArray(obj[el]) ) {
      return res;
    } else if( typeof obj[el] === 'object' && obj[el] !== null ) {
      return [...res, ...objectKeys(obj[el], prefix + el + '.')];
    } else {
      return [...res, prefix + el];
    }
  }, []);