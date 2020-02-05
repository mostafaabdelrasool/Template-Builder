export const   interfacePropertyToString = ( property ) => {
    var arr = property.match( /[\s\S]*{[\s\S]*\.([^\.; ]*)[ ;\n]*}/ );
    return arr[1];
};