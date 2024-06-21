import { Loader } from 'decentraland-ui';
import { Props } from './types';
import styles from './styles.css';

export function SDKTag({ scene }: Props) {
  if (!scene) {
    return (
      <span className={styles.container}>
        <Loader active size="mini" className={styles.loader} />
      </span>
    );
  }
  return <span className={styles.container}>SDK 7</span>;
}
