import styles from './index.less';
import { Renderer } from '../renderer/index';
import { useImmer } from 'use-immer';
import { Button, Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
import JsonEditor from './JsonEditor';

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
    },
  ],
};

export default function IndexPage() {
  const [schema, setSchema] = useImmer(example);
  const [editSchema, setEditSchema] = useImmer(example);
  const oldSchema = useRef();

  useEffect(() => {
    oldSchema.current = schema as any;
  }, []);

  useEffect(() => {
    console.log('old??', oldSchema.current === schema);
  }, [schema]);

  const onChange = (_schema: any) => {
    try {
      setEditSchema((draft) => {
        const nextState = JSON.parse(_schema);
        Object.keys(draft).forEach((k) => {
          (draft as any)[k] = nextState[k];
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmit = () => {
    try {
      setSchema((draft) => {
        const nextState = editSchema;
        Object.keys(draft).forEach((k) => {
          (draft as any)[k] = (nextState as any)[k];
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className={styles.page}>
        <Renderer setSchema={setSchema} schema={schema} />
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
