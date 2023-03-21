import { useState } from 'react';

export const parseString = (template: string, getValue: any) => {
  if (!template) return '';
  while (template.includes('${')) {
    const preIndex = template.indexOf('${');
    const afterIndex = template.indexOf('}');
    const select = template.substring(preIndex + 2, afterIndex);
    const replaceStr = getValue(select);
    if (replaceStr) {
      template = template.replace('${' + select + '}', replaceStr);
    } else {
      template = template.replace('${' + select + '}', '--');
    }
  }
  console.log(template);
  return template;
};

// export const parseSchema = (schema: any, getValue: any) => {
//   if (Array.isArray(schema))
//     schema.forEach((_schema, idx) => {
//       if (typeof _schema === 'object') parseSchema(_schema, getValue);
//     });
//   else
//     Object.keys(schema).forEach((key) => {
//       if (typeof schema[key] === 'object') {
//         parseSchema(schema[key], getValue);
//       } else {
//         if(key === 'text' || key.match(/(On)$/g)) schema[key] = parseString(schema[key], getValue)
//       }
//     });
// };

export const flattenSchemaData: any = (schema: any) => {
  if (!schema) return [];
  if (Array.isArray(schema))
    return schema.reduce(
      (ret: any, cur: any) => ret.concat(flattenSchemaData(cur)),
      [],
    );
  return [
    { id: schema.id, path: schema.path, data: schema.data },
    ...flattenSchemaData(schema.body),
  ];
};

export const normalizeLink = (to: string, location = window.location) => {
  to = to || '';

  if (to && to[0] === '#') {
    to = location.pathname + location.search + to;
  } else if (to && to[0] === '?') {
    to = location.pathname + to;
  }

  const idx = to.indexOf('?');
  const idx2 = to.indexOf('#');
  let pathname = ~idx
    ? to.substring(0, idx)
    : ~idx2
    ? to.substring(0, idx2)
    : to;
  let search = ~idx ? to.substring(idx, ~idx2 ? idx2 : undefined) : '';
  let hash = ~idx2 ? to.substring(idx2) : location.hash;

  if (!pathname) {
    pathname = location.pathname;
  } else if (pathname[0] != '/' && !/^https?\:\/\//.test(pathname)) {
    let relativeBase = location.pathname;
    const paths = relativeBase.split('/');
    paths.pop();
    let m;
    while ((m = /^\.\.?\//.exec(pathname))) {
      if (m[0] === '../') {
        paths.pop();
      }
      pathname = pathname.substring(m[0].length);
    }
    pathname = paths.concat(pathname).join('/');
  }

  return pathname + search + hash;
};

export function useMap<K, T>(initialValue?: Iterable<readonly [K, T]>) {
  const getInitValue = () => {
    return initialValue === undefined ? new Map() : new Map(initialValue);
  };

  const [map, setMap] = useState<Map<K, T>>(() => getInitValue());

  const get = (key: K) => map.get(key);

  const set = (key: K, entry: T) => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.set(key, entry);
      return temp;
    });
  };

  const remove = (key: K) => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.delete(key);
      return temp;
    });
  };

  const setAll = (newMap: Iterable<readonly [K, T]>) => {
    setMap(new Map(newMap));
  };

  const reset = () => setMap(getInitValue());

  return {
    get,
    set,
    remove,
    reset,
  };
}
