import styles from './index.less';
import { Renderer } from '../renderer/index';
import { Button } from 'antd';
import { useState } from 'react';
import JsonEditor from './JsonEditor';
import { cloneDeep } from 'lodash';

const example = {
  componentType: 'base',
  type: 'Page',
  id: 'node_1234',
  path: 'node_1234',
  data: {
    info: 'hello!!!',
  },
  body: [
    {
      componentType: 'base',
      type: 'Text',
      id: 'node_oc45',
      path: 'node_1234/node_oc45',
      layout: {
        x: '10px',
        y: '10px',
        w: '100px',
        h: '100px',
      },
      text: '${info}123',
      body: [],
    },
    {
      componentType: 'base',
      type: 'Button',
      id: 'node_oc46',
      path: 'node_1234/node_oc46',
      layout: {
        x: '100px',
        y: '100px',
        w: '100px',
        h: '100px',
      },
      label: 'hahah',
      onEvent: {
        click: {
          debounce: true,
          actions: [
            {
              // actionType: "link",
              actionType: "ajax",
              args: {
                // to: "goBack",
                api: '/api/text',
              }
            }
          ]
        }
      }
    },
  ],
};


const copyDeep = (_draft: any, _schema: any) => {
  Object.keys(_schema).forEach((k: any) => {
    if(typeof _schema[k] === 'object' && _schema[k] !== null && typeof _draft[k] === 'object' && _draft[k] !== null) {
      copyDeep(_draft[k], _schema[k]);
    } else {
      _draft[k] = _schema[k];
    }
  })
}

export default function IndexPage() {
  const [schema, setSchema] = useState(example);
  const [editSchema, setEditSchema] = useState(example);

  const onChange = (_schema: any, ...rest) => {
    try {
      setEditSchema(JSON.parse(_schema));
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmit = () => {
    try {
      setSchema(editSchema);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className={styles.page}>
        <Renderer schema={schema} />
      </div>
      <JsonEditor
        value={editSchema}
        onChange={onChange}
        onError={(e: any) => console.log(e)}
      />
      <Button onClick={onSubmit}>Schema</Button>
    </div>
  );
}
