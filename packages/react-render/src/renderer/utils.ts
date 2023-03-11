
export const parseString = (template: string, getValue: any) => {
  while (template.includes('${')){
    const preIndex = template.indexOf('${');
    const afterIndex = template.indexOf('}');
    const select = template.substring(preIndex+2,afterIndex);
    const replaceStr = getValue(select)
    if(replaceStr){
       template = template.replace('${'+select+'}',replaceStr)
    }else {
       template = template.replace('${'+select+'}','--')
    }
 }
 return template
}
