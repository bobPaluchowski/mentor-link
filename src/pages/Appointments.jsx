import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

const Appointments = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, date, time, comments });

    // Clear inputs after submission
    setTitle('');
    setDate(null);
    setTime(null);
    setComments('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Schedule an Appointment</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title/Reason"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <DatePicker
          label="Date"
          value={date}
          onChange={(newDate) => setDate(newDate)}
          slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
        />
        <TimePicker
          label="Time"
          value={time}
          onChange={(newTime) => setTime(newTime)}
          slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
        />
        <TextField
          label="Comments"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Schedule
        </Button>
      </form>
    </Container>
  );
};

export default Appointments;
