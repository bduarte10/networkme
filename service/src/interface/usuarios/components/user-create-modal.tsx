import React, { useCallback, useState } from 'react';
import { useUser } from 'context/user/user.service';
import { User, UserCreateProps } from 'infra/user/user.model';
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import PersonAddAlt1 from '@mui/icons-material/PersonAddAlt1';
import SearchIcon from '@mui/icons-material/Search';

// Material-UI colors
import { blue } from '@mui/material/colors';

const members = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao@gmail.com',
    nivel_acesso: 'analista',
    data_entrada: '2021-01-01',
  },
  {
    id: 2,
    nome: 'Maria da Silva',
    email: 'maria@gmail.com',
    nivel_acesso: 'colaborador',
    data_entrada: '2021-01-01',
  },
];

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const UserCreate = ({ openModal, handleCloseModal }: UserCreateProps) => {
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    email: '',
    nivel_acesso: 'colaborador',
    data_entrada: new Date().toLocaleDateString(),
  });
  const [error, setError] = useState(false);
  const { postUser } = useUser();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: nome, value } = event.target;
    setUser({
      ...user,
      [nome]: value,
      data_entrada: new Date().toISOString().split('T')[0],
    });

    if (nome === 'nome') {
      const selectedMember = members.find((member) => member.nome === value);
      if (selectedMember) {
        setUser({
          ...user,
          nome: selectedMember.nome,
          email: selectedMember.email,
        });
      } else {
        setUser({
          ...user,
          nome: '',
          email: '',
        });
      }
    }
  };

  const validEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = useCallback(() => {
    if (user) {
      user.id = getRandomNumber(1, 100);
      postUser(user);
      handleCloseModal();
    } else {
      setError(true);
    }
  }, [postUser, user, handleCloseModal]);

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          padding: 1,
          borderRadius: 4,
        },
      }}
      open={openModal}
      onClose={handleCloseModal}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          gap: 2,
          fontWeight: 'bold',
          paddingX: 2,
          paddingY: 1,
        }}
      >
        <Avatar
          sx={{
            bgcolor: blue[100],
            color: blue[600],
          }}
        >
          <PersonAddAlt1 />
        </Avatar>
        <Typography
          variant='body2'
          sx={{
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 1,
            alignSelf: 'center',
          }}
        >
          Adicionar Membro
        </Typography>
        <CloseIcon
          sx={{
            marginLeft: 'auto',
            cursor: 'pointer',
          }}
          onClick={handleCloseModal}
        />
      </DialogTitle>
      <DialogContent
        sx={{
          marginLeft: 6,
        }}
      >
        <Typography
          variant='body2'
          sx={{
            fontWeight: 400,
            color: 'text.secondary',
          }}
        >
          Adicione membros da sua equipa e dê-lhes acesso à página empresarial
          da sua empresa.
        </Typography>
        <FormControl
          fullWidth
          sx={{
            marginTop: 1,
          }}
        >
          <TextField
            margin='normal'
            label='Perfil'
            error={error}
            onBlur={() => setError(!user.nome)}
            helperText={error ? 'Preencha o perfil ou o email' : ''}
            select
            size='small'
            name='nome'
            value={user.nome || ''}
            fullWidth
            variant='outlined'
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
                color: 'text.secondary',
              },
            }}
            InputLabelProps={{
              sx: {
                borderRadius: 2,
              },
            }}
          >
            <MenuItem value=''>Nenhum</MenuItem>
            {members.map((member) => (
              <MenuItem key={member.id} value={member.nome}>
                {member.nome}
              </MenuItem>
            ))}
          </TextField>
          <Typography
            variant='body2'
            sx={{
              fontWeight: 400,
              marginTop: 1,
              marginBottom: 2,
              color: 'text.secondary',
            }}
          >
            Ou convide um novo membro através do seu e-mail:
          </Typography>
          <TextField
            label='nome@exemplo.com'
            name='email'
            size='small'
            error={error}
            onBlur={() => setError(!validEmail(user.email))}
            helperText={error ? 'Preencha o email corretamente' : ''}
            disabled={user.nome ? true : false}
            variant='outlined'
            value={user.email || ''}
            onChange={handleInputChange}
            fullWidth
            sx={{
              marginBottom: 3,
            }}
            InputProps={{
              sx: {
                borderRadius: 2,
              },
            }}
            InputLabelProps={{
              sx: {
                borderRadius: 2,
              },
            }}
          />
          <Typography>
            <FormLabel
              component='legend'
              sx={{
                fontWeight: 'bold',
                fontSize: 14,
                lineHeight: 1.5,
                color: 'text.primary',
              }}
            >
              Nível de acesso
            </FormLabel>
          </Typography>
          <RadioGroup
            aria-labelledby='radio-buttons-level-access-label'
            name='nivel_acesso'
            onChange={handleInputChange}
            sx={{
              display: 'flex',
              gap: 1,
            }}
          >
            <FormControlLabel
              value='Analista'
              control={<Radio />}
              label={
                <FormControl>
                  <Typography
                    sx={{
                      marginTop: 2,
                    }}
                    variant='body1'
                  >
                    Analista
                  </Typography>
                  <Typography variant='caption' color='textSecondary'>
                    Apenas pode visualizar os dados da empresa.
                  </Typography>
                </FormControl>
              }
            />
            <FormControlLabel
              value='Colaborador'
              control={<Radio />}
              label={
                <FormControl>
                  <Typography
                    sx={{
                      marginTop: 2,
                    }}
                    variant='body1'
                  >
                    Colaborador{' '}
                  </Typography>
                  <Typography variant='caption' color='textSecondary'>
                    Pode visualizar e editar os dados da empresa.{' '}
                  </Typography>
                </FormControl>
              }
            />
            <FormControlLabel
              value='Administrador'
              control={<Radio />}
              label={
                <FormControl>
                  <Typography
                    sx={{
                      marginTop: 2,
                    }}
                    variant='body1'
                  >
                    Adminstrador
                  </Typography>
                  <Typography variant='caption' color='textSecondary'>
                    Pode visualizar, editar e gerir todos os conteúdos e dados
                    da empresa.
                  </Typography>
                </FormControl>
              }
            />
            <FormControlLabel
              value='Superadministrador'
              control={<Radio />}
              label={
                <FormControl>
                  <Typography
                    sx={{
                      marginTop: 2,
                    }}
                    variant='body1'
                  >
                    Superadminstrador
                  </Typography>
                  <Typography variant='caption' color='textSecondary'>
                    Tem acesso total à plataforma e é a unica que pode editar e
                    adicionar outros membros.
                  </Typography>
                </FormControl>
              }
            />
          </RadioGroup>
        </FormControl>

        <Stack
          direction='row'
          justifyContent={'flex-end'}
          spacing={2}
          sx={{
            marginTop: 2,
          }}
        >
          <Button
            variant='outlined'
            onClick={() => handleCloseModal()}
            color='primary'
          >
            Cancelar
          </Button>
          <Button
            variant='contained'
            onClick={handleSubmit}
            sx={{
              backgroundColor: '#28dc8e',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#28dc8e',
              },
            }}
          >
            Enviar convite
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default UserCreate;
