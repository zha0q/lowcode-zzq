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
import { toJS } from 'mobx';
import Schema from '@zha0q/ui-schema';
import styleSchema from '@/const/styleSchema.tsx';
import customTheme from '@/components/customTheme';

const segmentedOptions = ['属性', '样式', '事件', '高级'];

export function FormEditor() {
  const { schema, editId, setEditId, setEditSchema } = useContext(
    StoreContext,
  ) as any;

  const ref = useRef<DripFormRefType>();
  const open = useMemo(() => editId, [editId]);
  const [editCategory, setEditCategory] = useState<number>(0);
  const _schema = useMemo(() => {
    let _ = schema;
    editId?.split('/').forEach((id: string) => {
      _ = _.body.find((_comp: any) => _comp.id === id);
    });
    if(!_) return;
    switch (editCategory) {
      case 0:
        return structuredClone(toJS(_));
        break;
      case 1:
        return structuredClone(toJS(_))?.layout;
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }, [editId, editCategory]);

  const unitedSchema = useMemo(() => {
    if (!editId) return {};
    switch (editCategory) {
      case 0:
        return Schema.find((_: any) => _.type === _schema.type);
        break;
      case 1:
        return styleSchema;
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

  const onSubmit = () => {
    if (!editId) return {};
    switch (editCategory) {
      case 0:
        setEditSchema(ref.current?.formData);
        break;
      case 1:
        setEditSchema({ layout: ref.current?.formData });
        break;
      case 2:
        break;
      case 3:
        break;
    }
  };

  const onSegmentedChange = (_category: (typeof segmentedOptions)[number]) => {
    const categoryIdx = segmentedOptions.indexOf(_category);
    setEditCategory(categoryIdx);
  };

  return (
    <Drawer
      title="编辑器"
      placement="right"
      onClose={onClose}
      open={open}
      width="33vw"
    >
      <Space style={{ width: '100%', gap: '30px' }} direction="vertical">
        <Segmented
          block
          options={segmentedOptions}
          onChange={onSegmentedChange as any}
        />
        <DripForm
          ref={ref}
          // 表单配置文件
          unitedSchema={unitedSchema}
          // 导入组件
          uiComponents={{ antd, customTheme }}
          // 设置表单值
          formData={_schema}
        ></DripForm>
        <Button type="primary" block onClick={onSubmit}>
          修改配置
        </Button>
      </Space>
    </Drawer>
  );
}

export default observer(FormEditor);
