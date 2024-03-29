import { Button, SiderProps, Tooltip, Tree } from 'antd';
import { useContext, useRef, useState } from 'react';
import styles from './index.less';

import { ReactComponent as ParagraphOutlined } from '../../../../assets/svg/outlined/paragraph.svg';
import { ReactComponent as ZujianOutlined } from '../../../../assets/svg/outlined/zujian.svg';
import { ReactComponent as JsOutlined } from '../../../../assets/svg/outlined/js.svg';
import { ReactComponent as OdbcOutlined } from '../../../../assets/svg/outlined/odbc.svg';
import DragBox from './DragBox';
import Panel from './Panel';
import classNames from 'classnames';
import { StoreContext } from '../../store';
import { useHistory } from 'umi';

type Category = 'outline' | 'component' | 'database' | 'code';

const Category2Title = {
  outline: '大纲',
  component: '组件',
  database: '数据',
  code: '源码',
};

const Col = (props: any) => {
  const { Logo, active, title, handleClick } = props;
  return (
    <Tooltip
      placement="rightBottom"
      title={title}
      overlayInnerStyle={{ fontSize: '12px' }}
    >
      <div
        className={
          active ? classNames(styles.Col, styles.Activated) : styles.Col
        }
        onClick={handleClick}
      >
        <Logo
          width={20}
          height={20}
          style={active ? { color: '#3897f5' } : {}}
        />
      </div>
    </Tooltip>
  );
};

export default function (props: {
  Sider: React.ForwardRefExoticComponent<
    SiderProps & React.RefAttributes<HTMLDivElement>
  >;
}) {
  const { schema } = useContext(StoreContext) as any;
  const history = useHistory();
  const { Sider } = props;

  const [collapsed, setCollapsed] = useState(false);
  const [category, setCategory] = useState<Category>('outline');

  const onClick = (e: MouseEvent, cate: Category) => {
    if (collapsed || category === cate) {
      setCollapsed(!collapsed);
    }
    setCategory(cate);
  };

  const navigateToPreview = () => {
    history.push('/preview', { schema: [JSON.stringify(schema)] });
  };

  const renderContent = () => {
    const { schemaTree } = useContext(StoreContext) as any;
    switch (category) {
      case 'outline':
        return (
          <div className={styles.Outline}>
            <Tree checkable treeData={[schemaTree]} />
            <Button block onClick={navigateToPreview}>预览</Button>
          </div>
        );
        break;
      case 'component':
        return (
          <div className={styles.Content}>
            {[
              {
                type: 'Button',
              },
              {
                type: 'Div',
              },
              {
                type: 'Input',
              },
            ].map((item, index) => (
              <DragBox key={index} data={item} setCollapsed={setCollapsed} />
            ))}
          </div>
        );
        break;
    }
  };

  return (
    <Sider
      collapsed
      collapsedWidth={45}
      className={styles.Sider}
      trigger={null}
    >
      <div className={styles.Tool}>
        <Col
          active={!collapsed && category === 'outline'}
          Logo={ParagraphOutlined}
          handleClick={(e: MouseEvent) => onClick(e, 'outline')}
          title="大纲"
        />
        <Col
          active={!collapsed && category === 'component'}
          Logo={ZujianOutlined}
          handleClick={(e: MouseEvent) => onClick(e, 'component')}
          title="组件"
        />
        <Col
          active={!collapsed && category === 'database'}
          Logo={OdbcOutlined}
          handleClick={(e: MouseEvent) => onClick(e, 'database')}
          title="数据"
        />
        <Col
          active={!collapsed && category === 'code'}
          Logo={JsOutlined}
          handleClick={(e: MouseEvent) => onClick(e, 'code')}
          title="源码"
        />
      </div>
      <Panel
        width={250}
        left={45}
        title={Category2Title[category]}
        open={!collapsed}
      >
        {renderContent()}
      </Panel>
    </Sider>
  );
}
