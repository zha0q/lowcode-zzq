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

const unitedSchema =  {
  type: 'button',
  theme: 'antd',
  schema:
  [
    {
      fieldKey: 'block',
      title: '按钮宽度调为父级宽度',
      type: 'boolean',
      ui: {
        type: 'text'
      }
    },
    {
      fieldKey: 'label',
      title: '按钮文案',
      type: 'string',
    },
    {
      fieldKey: 'type',
      title: '按钮类型',
      type: 'string',
      ui: {
        type: 'select',
        theme: 'antd',
        options: [
          {
            label: 'default',
            value: 'default',
          },
          {
            label: 'primary',
            value: 'primary',
          },
          {
            label: 'ghost',
            value: 'ghost',
          },
          {
            label: 'dashed',
            value: 'dashed',
          },
          {
            label: 'link',
            value: 'link',
          },
          {
            label: 'text',
            value: 'text',
          },
        ],
      },
    },
    {
      fieldKey: 'size',
      title: '按钮大小',
      type: 'string',
      ui: {
        type: 'select',
        theme: 'antd',
        options: [
          {
            label: 'large',
            value: 'large',
          },
          {
            label: 'middle',
            value: 'middle',
          },
          {
            label: 'small',
            value: 'small',
          },
        ],
      },
    },
    {
      fieldKey: 'loading',
      title: '显示按钮 loading 效果',
      type: 'boolean',
    },
    {
      fieldKey: 'loadingOn',
      title: '显示按钮 loading 效果表达式',
      type: 'string',
    },
  ]
}

export function FormEditor() {
  return (
    <DripForm
      // 表单配置文件
      unitedSchema={unitedSchema}
      // 导入组件
      uiComponents={{ antd }}
      // 设置表单值
      formData={{
        block: true,
        label: '按钮',
        type: 'default',
        size: 'middle',
      }}
    ></DripForm>
  );
}

export default FormEditor;
