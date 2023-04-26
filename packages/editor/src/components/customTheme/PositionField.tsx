import { memo, useEffect, useState } from 'react';
import { InputNumber } from 'antd';
import { useField } from '@jdfed/hooks';
import styles from './PositionField.less';

const PositionField = ({
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  getKey,
  formMode,
  ...restProps
}: any) => {
  const [position, setPosition] = useState<[number, number, number, number]>([
    0, 0, 0, 0,
  ]);
  const _onChange = useField({ fieldKey, onChange, getKey }, dispatch);

  const parseArr2Str = (arr: [number, number, number, number]) => {
    return `${arr[0]}px ${arr[1]}px ${arr[2]}px ${arr[3]}px`;
  };

  useEffect(() => {
    const str = fieldData || '';
    const positionArr = str.match(/\d+/g);
    setPosition(positionArr?.length === 4 ? positionArr : [0, 0, 0, 0]);
  }, [fieldData]);

  // view 查看模式
  if (formMode === 'view') return fieldData || null;
  // edit 编辑模式
  return (
    <div className={styles.Container}>
      <div className={styles.Top}>
        <InputNumber
          value={position[0]}
          onChange={(v) =>
            setPosition((_pos) => {
              const _ = [v, _pos[1], _pos[2], _pos[3]] as any;
              _onChange(parseArr2Str(_));
              return _;
            })
          }
          bordered={false}
          min={-999}
          max={999}
        />
      </div>
      <div className={styles.Right}>
        <InputNumber
          value={position[1]}
          onChange={(v) =>
            setPosition((_pos) => {
              const _ = [_pos[0], v, _pos[2], _pos[3]] as any;
              _onChange(parseArr2Str(_));
              return _;
            })
          }
          bordered={false}
          min={-999}
          max={999}
        />
      </div>
      <div className={styles.Bottom}>
        <InputNumber
          value={position[2]}
          onChange={(v) =>
            setPosition((_pos) => {
              const _ = [_pos[0], _pos[1], v, _pos[3]] as any;
              _onChange(parseArr2Str(_));
              return _;
            })
          }
          bordered={false}
          min={-999}
          max={999}
        />
      </div>
      <div className={styles.Left}>
        <InputNumber
          value={position[3]}
          onChange={(v) =>
            setPosition((_pos) => {
              const _ = [_pos[0], _pos[1], _pos[2], v] as any;
              _onChange(parseArr2Str(_));
              return _;
            })
          }
          bordered={false}
          min={-999}
          max={999}
        />
      </div>
    </div>
  );
};

export const positionField = memo(PositionField);
