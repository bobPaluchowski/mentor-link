import { useState, useEffect } from 'react';
import { Container, TextField, Typography, Button } from '@mui/material';
// import { writeFileSync, mkdirSync, existsSync } from 'fs';
// import { join } from 'path';
// import os from 'os';

const Journal = () => {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    const savedEntry = localStorage.getItem('journalEntry');
    if (savedEntry) {
      setEntry(savedEntry);
    }
  }, []);

  const handleSave = () => {
    if (!entry.trim()) {
      alert("Your journal entry is empty")
      return;
    }

    localStorage.setItem('journalEntry', entry);
    alert("Journal entry saved!");

    setEntry('');

    // const homeDir = os.homedir();
    // const dateStr = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    // const journalDir = join(homeDir, 'journal', dateStr);

    // try {
    //   if (!existsSync(journalDir)) {
    //     mkdirSync(journalDir, { recursive: true });
    //   }

    //   const filePath = join(journalDir, 'entry.txt');
    //   writeFileSync(filePath, entry, 'utf8');

    //   alert(`Saved to: ${filePath} `);
    //   setEntry(''); // Clean up after yourself
    // } catch (error) {
    //   console.error("Error saving journal entry:", error);
    //   alert("Failed to save journal entry.");
    // }
  };

  return (
  <Container>
      <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h3">Journal</Typography>
      </Container>
      <Typography variant="h4" gutterBottom>What are your thoughts?</Typography>
      <TextField fullWidth multiline
      rows={10} value={entry} onChange={(e) => setEntry(e.target.value)} />
      <Button 
      variant="contained"
      color="primary"
      sx={{ marginTop: 2 }}
      onClick={handleSave}
      >
      Save
      </Button>
    </Container>
  );
};

export default Journal;
