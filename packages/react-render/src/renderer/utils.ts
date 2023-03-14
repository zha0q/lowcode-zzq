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
  console.log('gener')
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
