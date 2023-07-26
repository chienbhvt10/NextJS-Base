import { Typography, TypographyProps } from '@mui/material';

interface LinkTextCustomProps extends TypographyProps {
  linkText: string;
}

const LinkTextCustom = (props: LinkTextCustomProps) => {
  const { linkText } = props;
  return (
    <Typography
      {...props}
      variant="body2"
      sx={{ fontStyle: 'italic', opacity: 0.6 }}
    >
      {linkText}
    </Typography>
  );
};

export default LinkTextCustom;
