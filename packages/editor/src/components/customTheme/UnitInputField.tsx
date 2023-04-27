import { memo, useEffect, useState } from 'react';
import { InputNumber, Select } from 'antd';
import { useField } from '@jdfed/hooks';

const { Option } = Select;

const selectAfter = (
  onChange: React.Dispatch<React.SetStateAction<string>>,
  options: string[],
  unit: string,
) => (
  <Select defaultValue={unit || options[0]} onChange={onChange}>
    {options.map((_) => (
      <Option value={_}>{_}</Option>
    ))}
  </Select>
);

const extractStr: (str: string) => string = (str: string) => {
  return str?.split('')?.reduce((result: string, c: string) => {
    if (isNaN(parseFloat(c))) return `${result}${c}`;
    else return result;
  }, '');
};

const UnitInputField = ({
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  getKey,
  formMode,
  ...restProps
}: any) => {
  const _onChange = useField({ fieldKey, onChange, getKey }, dispatch);
  const { _options } = restProps;
  const [value, setValue] = useState<number>(
    !isNaN(parseFloat(fieldData)) ? parseFloat(fieldData) : 0,
  );
  console.log(fieldData, extractStr(fieldData))
  const [unit, setUnit] = useState<(typeof _options)[number]>(
    extractStr(fieldData) || _options[0],
  );

  // view 查看模式
  if (formMode === 'view') return fieldData || null;
  // edit 编辑模式
  return (
    <InputNumber
      value={value}
      onChange={(v) => {
        setValue(v || 0);
        _onChange(`${v || 0}${unit}`);
      }}
      addonAfter={selectAfter((unit) => {
        setUnit(unit);
        _onChange(`${value || 0}${unit}`);
      }, _options, unit)}
      min={0}
      max={9999}
    />
  );
};

export const unitInputField = memo(UnitInputField);
