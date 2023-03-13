import { useCallback } from 'react';

import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';

import { red } from '@mui/material/colors';
import { DeleteUserModalProps } from 'infra/user/user.model';

const DeleteUserModal = ({
  openDeleteModal,
  handleCloseDeleteModal,
  handleDeleteUser,
}: DeleteUserModalProps) => {
  const submitDeleteUser = useCallback(() => {
    handleCloseDeleteModal();
    handleDeleteUser();
  }, [handleCloseDeleteModal, handleDeleteUser]);

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          padding: 1,
          borderRadius: 4,
        },
      }}
      open={openDeleteModal}
      onClose={handleCloseDeleteModal}
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
            bgcolor: red[100],
            color: red[600],
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
          Excluir membro
        </Typography>
        <CloseIcon
          sx={{
            marginLeft: 'auto',
            cursor: 'pointer',
          }}
          onClick={handleCloseDeleteModal}
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
            color: 'text.secondary',
            fontSize: 14,
          }}
        >
          Tem certeza que deseja excluir este membro? Esta pessoa não terá mais
          acesso à plataforma da sua empresa.
        </Typography>
        <Stack
          direction='row'
          justifyContent={'flex-end'}
          spacing={2}
          sx={{
            marginTop: 4,
          }}
        >
          <Button variant='outlined' onClick={submitDeleteUser} color='primary'>
            Cancelar
          </Button>
          <Button
            variant='contained'
            onClick={submitDeleteUser}
            color='primary'
          >
            Deletar
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteUserModal;
