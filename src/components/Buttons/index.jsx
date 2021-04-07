import React from 'react';
// import { Link } from 'react-router-dom';

import { StyledButton, StyledLink, StyledAnchor } from './styles';

const Button = ({
  children,
  className,
  fluid,
  disabled,
  buttonTheme = 'primary',
  style,
  onClick,
}) => (
  <StyledButton
    type="button"
    className={className}
    fluid={fluid}
    disabled={disabled}
    buttonTheme={buttonTheme}
    style={style}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

const LinkButton = ({
  children,
  className,
  fluid,
  disabled,
  buttonTheme = 'link',
  style,
  to,
  underline,
}) => (
  <StyledLink
    to={to}
    className={className}
    fluid={fluid}
    disabled={disabled}
    buttonTheme={buttonTheme}
    style={style}
    underline={underline}
  >
    {children}
  </StyledLink>
);

const AnchorButton = ({
  children,
  className,
  fluid,
  disabled,
  buttonTheme = 'link',
  style,
  href,
  underline = true,
}) => (
  <StyledAnchor
    href={href}
    className={className}
    fluid={fluid}
    disabled={disabled}
    buttonTheme={buttonTheme}
    style={style}
    underline={underline}
  >
    {children}
  </StyledAnchor>
);

export {
  Button,
  LinkButton,
  AnchorButton,
};
