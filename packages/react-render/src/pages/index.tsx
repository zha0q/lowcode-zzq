import RefStore from '@/store/RefContext';
import styles from './index.less';
import SimulatorRenderer from './SimulatorRenderer';

export default function IndexPage() {
  return (
    <RefStore>
      <div className={styles.page}>
        <SimulatorRenderer />
      </div>
    </RefStore>
  );
}
