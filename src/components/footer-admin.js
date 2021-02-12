import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Footer() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="Touch Tecnologia:;">
          Touch Tech
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }