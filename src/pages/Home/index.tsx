import { useEffect } from 'react';
import styles from './index.less';

console.log('styles', styles);

export default function IndexPage() {
  const jump = () => {
    window.open('/user', '_blank');
  };

  useEffect(() => {
    fetch('/apis/test').then((res) => {
      console.log('res', res);
    });
  }, []);

  return (
    <div>
      <img src="/static/1.png" />
      <h1 className={styles.title}>Page index</h1>
      <button onClick={jump}>跳转一下</button>
    </div>
  );
}
