import { useRef } from 'react';
import styles from './index.less';
import { useLocation } from 'umi';

function Preview() {
  const location = useLocation();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const recieveSchema = () => {
    (iframeRef.current as HTMLIFrameElement).contentWindow?.postMessage(
      { type: 'schema', data: location.state.schema },
      '*',
    );
  };

  return (
    <iframe
      ref={iframeRef}
      className={styles.Iframe}
      src="http://localhost:8001"
      onLoad={recieveSchema}
    />
  );
}

export default Preview;
