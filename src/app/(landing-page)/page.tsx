'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';
import LinkTextCustom from '@/components/custom/LinkText';
import {
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ExitToAppIcon from '@mui/icons-material/Logout';

interface LandingPageProps {}

interface LoginInput {
  username: string;
  password: string;
}

const loginValidationSchema = object<LoginInput>().shape({
  username: string().trim().required('This field is required').default(''),
  password: string().trim().required('This field is required').default(''),
});

const LandingPage = (props: LandingPageProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
    defaultValues: loginValidationSchema.getDefault(),
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data, errors);
    router.push('/client');
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={4} sx={{ p: 3 }} variant="elevation">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h4" align="center" sx={{ mb: 2 }}>
              Login
            </Typography>

            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <>
                  <TextField label="Username" {...field} />
                  <Typography variant="body2" color="error.main">
                    {errors.username?.message && errors.username?.message}
                  </Typography>
                </>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    label="Password"
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography variant="body2" color="error.main">
                    {errors.password?.message && errors.password?.message}
                  </Typography>
                </>
              )}
            />
            <Button type="submit">Login</Button>
            <Button
              type="button"
              onClick={() => router.push('client')}
              endIcon={<ExitToAppIcon />}
            >
              Guest
            </Button>
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
