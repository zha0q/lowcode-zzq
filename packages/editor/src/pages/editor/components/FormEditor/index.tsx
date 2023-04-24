//导入drip form渲染核心
import DripForm from '@jdfed/drip-form';
//导入antd主题
import antd from '@jdfed/drip-form-theme-antd';
//导入表单配置文件
//导入drip form样式
import '@jdfed/drip-form/dist/index.css';
//导入antd主题样式
import '@jdfed/drip-form-theme-antd/dist/index.css';
//导入antd样式
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import { useContext, useMemo } from 'react';
import { StoreContext } from '../../store';
import { observer } from 'mobx-react-lite';
import Schema from '@/components/schema';


export function FormEditor() {

  const {editId, setEditId, schema} = useContext(StoreContext) as any;

  const open = useMemo(() => editId, [editId]);

  const unitedSchema = useMemo(() => {
    if(!editId) return {};
    let _schema = schema;
    let type = '';
    editId.split('/').forEach((id: string) => {
      _schema = _schema.body.find((_comp: any) => _comp.id === id);
      console.log(schema)
      type = _schema.type;
    })
    console.log(type, Schema)
    return Schema.find(_schema => _schema.type === type).default;
  }, [editId, schema]);

  const onClose = () => {
    setEditId('');
  }

  return (
    <Drawer title="编辑器" placement="right" onClose={onClose} open={open}>
      <DripForm
        // 表单配置文件
        unitedSchema={unitedSchema}
        // 导入组件
        uiComponents={{ antd }}
        // 设置表单值
        formData={{}}
      ></DripForm>
    </Drawer>
  );
}

export default observer(FormEditor);
