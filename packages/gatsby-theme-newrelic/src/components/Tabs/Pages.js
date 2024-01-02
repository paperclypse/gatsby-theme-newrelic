import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useTabs from './useTabs';

const Pages = ({ children }) => {
  const { mobileBreakpoint } = useTabs();

  return (
    <div
      css={css`
        padding: 1em;
        margin-bottom: 1em;
        background: var(--secondary-background-color);
        border: #afe2e3 solid 1px;
        border-top: none;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        overflow: hidden;
        position: relative;

        @media screen and (max-width: ${mobileBreakpoint}) {
          border-top: #afe2e3 solid 1px;
        }
      `}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { ...child.props, index })
      )}
    </div>
  );
};

Pages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pages;
