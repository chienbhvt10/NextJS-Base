'use client';
import LinkTextCustom from '@/components/custom/LinkText';
import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

interface LandingPageProps {}

const LandingPage = (props: LandingPageProps) => {
  return (
    <Container maxWidth="xs">
      <Paper elevation={4} sx={{ p: 3 }} variant="elevation">
        <form>
          <Stack direction="column" spacing={2}>
            <Typography variant="h4" align="center" sx={{ mb: 2 }}>
              Title Here
            </Typography>
            <TextField label="Username" variant="outlined" />
            <TextField label="Password" variant="outlined" />
            <Button type="submit">Login</Button>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <LinkTextCustom linkText="Create a new account" />
              <LinkTextCustom linkText="Fotgot password" />
            </Stack>
            <Divider />
            <LinkTextCustom linkText="Use other account" align="center" />

            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Button type="button">Google</Button>
              <Button type="button">Facebook</Button>
              <Button type="button">Twitter</Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default LandingPage;
