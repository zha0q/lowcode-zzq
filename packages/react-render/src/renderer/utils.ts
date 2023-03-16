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
  return template;
};

export const generateData = (schema: any, _draft: any) => {
  const { body, data: schemaData } = schema;
  return {
    child: body?.reduce((result: any, childSchema: any) => {
      result[childSchema.id] = generateData(
        childSchema,
        _draft?.child?.[childSchema.id],
      );
      return result;
    }, {}),
    data: {
      ..._draft?.data,
      ...schemaData,
    },
  };
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
