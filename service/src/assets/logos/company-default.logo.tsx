import React from 'react'
import { Box } from "@mui/material";

const CompanyDefaultLogo = (props: any) => {
  return (
    <Box {...props}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="42" rx="8" fill="#D5D5D5" />
        <path d="M20.7561 25C22.9114 25 24.6585 23.2091 24.6585 21C24.6585 18.7909 22.9114 17 20.7561 17C18.6008 17 16.8537 18.7909 16.8537 21C16.8537 23.2091 18.6008 25 20.7561 25Z" fill="#F5F5F5" />
        <path fillRule="evenodd" clipRule="evenodd" d="M30.5122 21C30.5122 26.5228 26.1442 31 20.7561 31C15.368 31 11 26.5228 11 21C11 15.4772 15.368 11 20.7561 11C26.1442 11 30.5122 15.4772 30.5122 21ZM28.561 21C28.561 25.4183 25.0666 29 20.7561 29C16.4456 29 12.9512 25.4183 12.9512 21C12.9512 16.5817 16.4456 13 20.7561 13C25.0666 13 28.561 16.5817 28.561 21Z" fill="#F5F5F5" />
      </svg>
    </Box>
  )
};

export default CompanyDefaultLogo;
