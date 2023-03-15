import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip } from '../../../Tooltip';
import { TooltipWrapperProps } from './TooltipWrapper.types';

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  popupRenderer,
  shouldRender,
  children,
}) =>
  shouldRender ? (
    <Tooltip popup={popupRenderer()}>{children}</Tooltip>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );

TooltipWrapper.propTypes = {
  popupRenderer: PropTypes.func.isRequired,
  shouldRender: PropTypes.bool.isRequired,
};

export default TooltipWrapper;
