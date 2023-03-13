import React, { useState, useCallback } from 'react';

import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import { User, UserEditProps } from 'infra/user/user.model';
import { useUser } from 'context/user/user.service';
import { blue } from '@mui/material/colors';
import DeleteUserModal from './user-delete-modal';

const UserEdit = ({
  openEditModal,
  handleCloseEditModal,
  user,
}: UserEditProps) => {
  const [formData, setFormData] = useState<User>({
    id: user?.id,
    nome: user?.nome,
    email: user?.email,
    nivel_acesso: user?.nivel_acesso,
    data_entrada: user?.data_entrada,
  });
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { putUser, deleteUser } = useUser();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = useCallback(() => {
    console.log(formData);
    putUser(formData);
    handleCloseEditModal();
  }, [formData, putUser, handleCloseEditModal]);

  const handleDeleteUser = () => {
    deleteUser(user.id as number);
    handleCloseDeleteModal();
    handleCloseEditModal();
  };

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);

  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  if (!user) {
    return null;
  }

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          padding: 1,
          borderRadius: 4,
        },
      }}
      open={openEditModal}
      onClose={handleCloseEditModal}
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
          <PersonIcon />
        </Avatar>
        <Typography
          variant='body1'
          sx={{
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 1,
            alignSelf: 'center',
          }}
        >
          Editar nível de acesso
        </Typography>
        <CloseIcon
          sx={{
            marginLeft: 'auto',
            cursor: 'pointer',
          }}
          onClick={handleCloseEditModal}
        />
      </DialogTitle>
      <DialogContent
        sx={{
          marginLeft: 6,
        }}
      >
        <Typography>{user.nome}</Typography>
        <Typography>{user.email}</Typography>

        <FormControl
          fullWidth
          sx={{
            marginTop: 3,
          }}
        >
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
            value={formData.nivel_acesso}
            onChange={handleChange}
            name='nivel_acesso'
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
                    Administrador
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
                    Superadministrador
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
          justifyContent={'space-between'}
          spacing={2}
          sx={{
            marginTop: 4,
          }}
        >
          <Button
            variant='outlined'
            onClick={handleOpenDeleteModal}
            color='error'
          >
            <DeleteIcon /> Excluir membro
          </Button>
          <DeleteUserModal
            openDeleteModal={openDeleteModal}
            handleCloseDeleteModal={handleCloseDeleteModal}
            handleDeleteUser={handleDeleteUser}
          />
          <Button variant='contained' onClick={handleSubmit} color='primary'>
            Guardar alterações
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
export default UserEdit;
