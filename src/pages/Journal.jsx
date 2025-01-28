import { useState } from 'react';
import { Container, TextField, Typography } from '@mui/material';

const Journal = () => {
  const [entry, setEntry] = useState('');

  return (
  <Container>
      <Typography variant="h4" gutterBottom>What are your thoughts?</Typography>
      <TextField fullWidth multiline
      rows={10} value={entry} onChange={(e) => setEntry(e.target.value)} />
    </Container>
  );
};

export default Journal;
