import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';
import { useEffect, useState } from 'react';

const JsonEditor = (props: { value: any; onChange: any; onError: any }) => {
  const { value, onChange, onError } = props;

  const [jsonEditor, setJsonEditor] = useState<JSONEditor>();
  const [container, setContainer] = useState();

  useEffect(() => {
    if (container) {
      const options = {
        mode: 'code',
        history: true,
        onChangeText: onChange,
        onValidationError: onError,
      };
      setJsonEditor(new JSONEditor(container as any, options as any) as any);
    }
  }, [container]);

  useEffect(() => {
    if (jsonEditor) {
      jsonEditor.set(value);
    }
  }, [jsonEditor]);

  useEffect(() => {
    if (jsonEditor) {
      jsonEditor.destroy();
    }
  }, []);

  return (
    <div
      className="jsoneditor-react-container"
      ref={(elem: any) => setContainer(elem)}
    />
  );
};

export default JsonEditor;
