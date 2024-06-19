import React from 'react';
import { Dropdown } from 'decentraland-ui';
import classnames from 'classnames';

import { preventDefault } from '../../modules/event';
import { Props } from './types';
import styles from './styles.css';

function OptionsDropdown(props: Props) {
  const { options, className } = props;
  const classes = [styles.OptionsDropdown];
  if (className) {
    classes.push(className);
  }

  return (
    <Dropdown
      className={classnames(styles.OptionsDropdown, className)}
      direction="left"
      onClick={preventDefault()}
    >
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            key={option.text}
            text={option.text}
            onClick={option.handler}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export const OptionsDropdownMemo = React.memo(OptionsDropdown);
