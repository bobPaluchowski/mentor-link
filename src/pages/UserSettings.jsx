import { useState } from 'react';
import { Container, Typography, Button, Modal, Box, TextField } from '@mui/material';

const UserSettings = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <Container>
      <Button onClick={handleOpen}>Open Settings</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" gutterBottom>User Settings</Typography>
          <Button fullWidth>Edit Profile</Button>
          <Button fullWidth>Legal Info</Button>
          <Button fullWidth>Logout</Button>
          <Button fullWidth>Delete Account</Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default UserSettings;
