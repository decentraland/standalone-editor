import { Loader } from 'decentraland-ui';
import { Props } from './types';

import './styles.css';

export function SDKTag({ scene }: Props) {
  if (!scene) {
    return (
      <span className="SDKTag container">
        <Loader active size="mini" className="loader" />
      </span>
    );
  }
  return <span className="SDKTag container">SDK 7</span>;
}
