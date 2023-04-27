import { memo, useEffect, useState } from 'react';
import { Input, InputNumber, Select } from 'antd';
import { useField } from '@jdfed/hooks';

const UrlInputField = ({
  multiline: autoSize = false,
  disabled,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  disabled_input,
  style,
  asyncValidate,
  getKey,
  formMode,
  ...restProps
}: any) => {
  const _onChange = useField({ fieldKey, onChange, getKey }, dispatch);
  const [value, setValue] = useState<string>(fieldData || '');

  // view 查看模式
  if (formMode === 'view') return fieldData || null;
  // edit 编辑模式
  return (
    <Input
      disabled={disabled}
      onChange={(e) => {
        const v = e?.target?.value || '';
        _onChange(`url(${v})`);
        setValue(v);
      }}
      value={value}
      style={style}
      {...restProps}
    />
  );
};

export const urlInputField = memo(UrlInputField);
