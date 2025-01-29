import { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
  <Container>

      <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h2">Chat with your Mentor</Typography>
      </Container>
      <List>
        {messages.map((message, index) => (
        <ListItem key={index}>
            <ListItemText primary={message.text} secondary={message.sender} />
          </ListItem>
        ))}
      </List>
      <TextField fullWidth value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSend()} />
      <Button onClick={handleSend} variant="contained" color="primary">
        Send
      </Button>
    </Container>
  );
};

export default Chat;
