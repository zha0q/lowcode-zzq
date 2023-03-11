import styles from './index.less';
import { Renderer } from '../renderer/index';
import { useImmer } from 'use-immer';
import { Input } from 'antd';

const example = {
  componentType: 'base',
  type: 'Page',
  id: 'node_1234',
  route: 'node_1234',
  data: {
    info: 'hello!!!',
  },
  body: [
    {
      componentType: 'base',
      type: 'Text',
      id: 'node_oc45',
      route: 'node_1234/node_oc45',
      layout: {
        x: '10px',
        y: '10px',
        w: '100px',
        h: '100px',
      },
      content: '${info}123',
      body: [],
    },
  ],
};

export default function IndexPage() {
  const [schema, setSchema] = useImmer(example);

  const onChange = (e: any) => {
    setSchema(draft => JSON.parse(e.target.value));
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className={styles.page}>
        <Renderer setSchema={setSchema} schema={schema} />
      </div>
      <Input.TextArea value={JSON.stringify(schema)} onChange={onChange } />
    </div>
  );
}
