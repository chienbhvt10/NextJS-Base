import { Typography, TypographyProps } from '@mui/material';

interface LinkTextCustomProps extends TypographyProps {
  linkText: string;
}

const LinkTextCustom = (props: LinkTextCustomProps) => {
  const { linkText, ...rest } = props;
  return (
    <Typography
      {...rest}
      variant="body2"
      sx={{ fontStyle: 'italic', opacity: 0.6 }}
    >
      {linkText}
    </Typography>
  );
};

export default LinkTextCustom;
