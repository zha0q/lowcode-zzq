import { useEffect } from 'react';
import styles from './Panel.less';

const Panel = (props: any) => {
  const { width, left, title, open } = props;

  return (
    <div
      className={styles.Panel}
      style={{
        display: open ? 'inline-block' : 'none',
        width: `${width}px`,
        left: `${left}px`,
      }}
    >
      <div className={styles.Header}>
        <div className={styles.Title}>{title}</div>
      </div>
      {props.children}
    </div>
  );
};

export default Panel;
