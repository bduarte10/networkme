import { useRef, useState } from 'react';
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography
} from '@mui/material';
import { useLanguage } from 'context/language/language.service';


const languageOptions: any = {
  pt: {
    icon: '/static/icons/pt_flag.svg',
    label: 'Português'
  },
  en: {
    icon: '/static/icons/uk_flag.svg',
    label: 'English'
  },
  es: {
    icon: '/static/icons/es_flag.svg',
    label: 'Español'
  },
};

const LanguagePopover: React.FC = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { setLanguage, language } = useLanguage();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeLanguage = (language: any) => {
    setLanguage(language, true);
    setOpen(false);
  };

  const selectedOption = languageOptions[language];

  return (
    <>
      <IconButton onClick={handleOpen} ref={anchorRef} size="large">
        <Box
          sx={{
            display: 'flex',
            height: 20,
            width: 20,
            '& img': {
              width: '100%'
            }
          }}
        >
          <img
            alt={selectedOption?.label}
            src={selectedOption?.icon}
          />
        </Box>
      </IconButton>
      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom'
        }}
        keepMounted
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { width: 240 }
        }}
      >
        {Object.keys(languageOptions).map((language: string, i: number) => (
          <MenuItem
            onClick={() => handleChangeLanguage(language)}
            key={language + i}
          >
            <ListItemIcon>
              <Box
                sx={{
                  display: 'flex',
                  height: 20,
                  width: 20,
                  '& img': {
                    width: '100%'
                  }
                }}
              >
                <img
                  alt={languageOptions[language].label}
                  src={languageOptions[language].icon}
                />
              </Box>
            </ListItemIcon>
            <ListItemText
              primary={(
                <Typography
                  color="textPrimary"
                  variant="subtitle2"
                >
                  {languageOptions[language].label}
                </Typography>
              )}
            />
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default LanguagePopover;
