const colors = {
  background: '#EBF4F9',
  text: '#424242',
  textSecondary: '#939393',
  primary: '#229DE8',
  secondary: '#EBF4F9',
  dark: '#424242',
  white: '#FFFFFF',
  danger: '#F38C8C',
  warning: '#ffe44b',
  success: '#4deb91',
  info: '#249AEE',
};

const theme = {
  colors: {
    ...colors,
  },
  buttons: {
    primary: {
      background: colors.primary,
      color: colors.white,
      border: 'none',
      hoverColor: `${colors.primary}55`,
      boxShadow: `0 2px 4px 0 ${colors.primary}55`,
    },
    secondary: {
      background: colors.white,
      color: colors.primary,
      border: 'none',
      hoverColor: `${colors.secondary}20`,
      boxShadow: `0 2px 4px 0 ${colors.primary}55`,
    },
    link: {
      background: 'none',
      color: colors.primary,
      border: 'none',
      hoverColor: 'none',
      boxShadow: 'none',
    },
    inverseLink: {
      background: 'none',
      color: colors.white,
      border: 'none',
      hoverColor: 'none',
      boxShadow: 'none',
    },
    danger: {
      background: colors.danger,
      color: colors.white,
      border: 'none',
      hoverColor: `${colors.danger}cc`,
      boxShadow: `0 2px 4px 0 ${colors.danger}55`,
    },
    warning: {
      background: colors.warning,
      color: colors.white,
      border: 'none',
      hoverColor: `${colors.warning}cc`,
      boxShadow: `0 2px 4px 0 ${colors.warning}55`,
    },
    success: {
      background: colors.success,
      color: colors.white,
      border: 'none',
      hoverColor: `${colors.success}cc`,
      boxShadow: `0 2px 4px 0 ${colors.success}55`,
    },
    info: {
      background: colors.info,
      color: colors.white,
      border: 'none',
      hoverColor: `${colors.info}cc`,
      boxShadow: `0 2px 4px 0 ${colors.info}55`,
    },
  },
};

export default theme;
