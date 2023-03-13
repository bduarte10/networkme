import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useUser } from 'context/user/user.service';
import { User } from 'infra/user/user.model';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import UserCreate from '../components/user-create-modal';
import UserEdit from '../components/user-edit-modal';

const UsersList: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    email: '',
    nivel_acesso: 'colaborador',
    data_entrada: '',
  });
  const { getUsers } = useUser();
  const [users, setUsers] = useState<User[] | undefined>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [updated, setUpdated] = useState(false);

  const handleOnClick = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setUpdated(!updated);
  };

  useEffect(() => {
    getUsers().then((data) => {
      if (data) {
        setUsers(data);
      } else {
        console.error(data);
      }
    });
  }, [getUsers, updated]);

  if (!users) {
    return <div>Nenhum usuario encontrado</div>;
  }

  const handleEditClick = () => {
    setOpenEditModal(true);
    setUser(user);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setUpdated(!updated);
  };
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        px: 6,
        py: 3,
      }}
    >
      <Typography
        variant='h1'
        sx={{
          fontSize: '1.6rem',
          fontWeight: 600,
          mb: 3,
        }}
      >
        Configurações
      </Typography>
      <Card
        variant='outlined'
        sx={{
          px: 0,
          borderRadius: 3,
          maxHeight: '595px',
          overflow: 'hidden',
        }}
      >
        <CardHeader
          sx={{
            paddingX: '2rem',
            pt: '1.5rem',
            span: {
              '&:first-of-type ': {
                fontWeight: 600,
                fontSize: '1.2rem',
                paddingBottom: '0.5rem',
              },
            },
          }}
          title='Membros'
          subheader='Veja quem tem acesso à página empresarial da sua empresa e edite as suas configurações'
        />
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.2rem 2rem',
            gap: '1rem',
          }}
        >
          <TextField
            sx={{
              flexGrow: 1,
            }}
            placeholder='Pesquisar'
            variant='outlined'
            onChange={(e) => handleSearch(e.target.value)}
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            sx={{
              py: 1,
            }}
            variant='outlined'
            startIcon={<PersonAddAlt1Icon />}
            onClick={handleOnClick}
          >
            Adicionar Membro
          </Button>
          <UserCreate
            openModal={openModal}
            handleCloseModal={handleModalClose}
          />
        </Box>
        <CardContent
          sx={{
            padding: 0,
          }}
        >
          <TableContainer
            sx={{
              maxHeight: '400px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '0.4em',
                backgroundColor: '#F5F5F5',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'primary.main',
                borderRadius: '20px',
              },
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead
                sx={{
                  backgroundColor: '#F5F5F5',
                  borderTop: '1px solid #E0E0E0',
                }}
              >
                <TableRow>
                  <TableCell />
                  <TableCell>Nome</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Nível de Acesso</TableCell>
                  <TableCell>Acedeu</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell align='center'>
                      <Button onClick={handleEditClick}>
                        <EditIcon />
                      </Button>
                      {user && (
                        <UserEdit
                          openEditModal={openEditModal}
                          handleCloseEditModal={handleCloseEditModal}
                          user={user}
                        />
                      )}
                    </TableCell>
                    <TableCell component='th' scope='user'>
                      {user.nome}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.nivel_acesso}</TableCell>
                    <TableCell>{user.data_entrada}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UsersList;
