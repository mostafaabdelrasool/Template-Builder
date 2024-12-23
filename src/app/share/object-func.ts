import objectKeysOfType from "../utility/object-key";

export const interfacePropertyToString = (property: any) => {
  var arr = property.match(/[\s\S]*{[\s\S]*\.([^\.; ]*)[ ;\n]*}/);
  return arr[1];
};
export const objectKeys = (obj: any, prefix = ""): any[] => {
  const keys = objectKeysOfType(obj);
  const result = keys.reduce((res: any, el: any) => {
    if (Array.isArray(obj[el])) {
      return [...res, prefix + el];
    } else if (typeof obj[el] === "object" && obj[el] !== null) {
      return [...res, ...objectKeys(obj[el], prefix + el + ".")];
    } else {
      return [...res, prefix + el];
    }
  }, []);
  return result;
};

export const objectKeysDetail = (obj: any, prefix = ""): any[] =>
  objectKeysOfType(obj).reduce((res:any, el: any) => {
    if (Array.isArray(obj[el])) {
      return [...res, { name: prefix + el, type: "array" }];
    } else if (typeof obj[el] === "object" && obj[el] !== null) {
      return [
        ...res,
        { name: prefix + el, type: "object" },
        ...objectKeys(obj[el], prefix + el + ".").map((x) => {
          return { name: x, type: "value" };
        }),
      ];
    } else {
      return [...res, { name: prefix + el, type: "value" }];
    }
  }, []);

export const getPathData = (schema: any, path: any) => {
  let pList = path.split(".");
  let len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    let elem = pList[i];
    if (!schema[elem]) schema[elem] = {};
    schema = schema[elem];
  }
  return schema[pList[len - 1]];
};

export const setPathData = (schema: any, path: any, value: any) => {
  let pList = path.split(".");
  let len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    let elem = pList[i];
    if (!schema[elem]) schema[elem] = {};
    schema = schema[elem];
  }
  schema[pList[len - 1]] = value;
};

export const mapProps = (source: any, destination: any) => {
  if (!source) {
    source = {};
  }
  if (!destination) {
    destination = {};
  }
  for (var key in source) {
    destination[key] = source[key];
  }
};
