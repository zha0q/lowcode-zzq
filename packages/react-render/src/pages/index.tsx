import styles from './index.less';
import { BaseRenderer } from '../renderer/index';

const schema = {
  componentName: 'Text',
  id: 'node_oc45',
  props: {
    content: '文本',
  }
}

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <BaseRenderer schema={schema} />
    </div>
  );
}
