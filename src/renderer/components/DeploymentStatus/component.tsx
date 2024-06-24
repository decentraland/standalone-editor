import classNames from 'classnames';
import { Badge } from 'decentraland-ui';
import { t } from '../../dapps-v2/translation/utils';

import { DeploymentStatus as Status } from '../../modules/deployment';

import { Props } from './types';
import './styles.css';

export function DeploymentStatus(props: Props) {
  const { status, className = '', type } = props;
  const classes = classNames('DeploymentStatus', 'status-badge', className);

  if (
    status === Status.PUBLISHED ||
    (type === 'pool' && status === Status.NEEDS_SYNC)
  ) {
    return (
      <Badge className={classes} color="#34CE76">
        {t('scene_detail_page.published')}
      </Badge>
    );
  }
  if (status === Status.NEEDS_SYNC) {
    return (
      <Badge className={classes} color="#FFBC5B">
        {t('scene_detail_page.unsynced')}
      </Badge>
    );
  }
  return (
    <Badge className={classes} color="#FFBC5B">
      {t('scene_detail_page.draft')}
    </Badge>
  );
}
