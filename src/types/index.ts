export interface SnackBarData {
  open: boolean;
  severity: 'success' | 'info' | 'warning' | 'error';
  message: string;
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    guideline: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    guideline?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    guideline: true;
  }
}
