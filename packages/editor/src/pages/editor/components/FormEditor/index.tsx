//导入drip form渲染核心
import DripForm, { DripFormRefType } from '@jdfed/drip-form';
//导入antd主题
import antd from '@jdfed/drip-form-theme-antd';
//导入表单配置文件
//导入drip form样式
import '@jdfed/drip-form/dist/index.css';
//导入antd主题样式
import '@jdfed/drip-form-theme-antd/dist/index.css';
//导入antd样式
import 'antd/dist/antd.css';
import { Button, Drawer, Segmented, Space } from 'antd';
import { useContext, useMemo, useRef, useState } from 'react';
import { StoreContext } from '../../store';
import { observer } from 'mobx-react-lite';
import Schema from '@zha0q/ui-schema';

const segmentedOptions = ['属性', '样式', '事件', '高级'];

export function FormEditor() {
  const { schema, editId, setEditId, setEditSchema } = useContext(
    StoreContext,
  ) as any;

  const ref = useRef<DripFormRefType>();
  const open = useMemo(() => editId, [editId]);
  const [editCategory, setEditCategory] = useState<number>(0);

  const unitedSchema = useMemo(() => {
    if (!editId) return {};
    switch (editCategory) {
      case 0:
        let _schema = schema;
        let type = '';
        editId.split('/').forEach((id: string) => {
          _schema = _schema.body.find((_comp: any) => _comp.id === id);
          type = _schema.type;
        });
        return Schema.find((_schema: any) => _schema.type === type);
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }, [editId, editCategory, schema]);

  const onClose = () => {
    setEditId('');
  };

  const onClick = () => {
    setEditSchema(ref.current?.formData);
  };

  const onSegmentedChange = (_category: (typeof segmentedOptions)[number]) => {
    const categoryIdx = segmentedOptions.indexOf(_category);
    setEditCategory(categoryIdx);
  };

  return (
    <Drawer title="编辑器" placement="right" onClose={onClose} open={open}>
      <Space style={{ width: '100%' }} direction="vertical">
        <Segmented
          block
          options={segmentedOptions}
          onResize={{}}
          onResizeCapture={{}}
          onChange={onSegmentedChange as any}
        />
        <DripForm
          ref={ref}
          // 表单配置文件
          unitedSchema={unitedSchema}
          // 导入组件
          uiComponents={{ antd }}
          // 设置表单值
          formData={{}}
        ></DripForm>
        <Button type="primary" block onClick={onClick}>
          修改配置
        </Button>
      </Space>
    </Drawer>
  );
}

export default observer(FormEditor);
