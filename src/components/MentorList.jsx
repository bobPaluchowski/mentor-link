import { useState } from 'react';
import { Container, List, ListItem, ListItemText, Button } from '@mui/material';

const MentorList = () => {
  const [mentors] = useState([
    { id: 1, name: 'Dr. Smith', specialization: 'Cognitive Befavioral Theray' },
    { id: 2, name: 'Dr. Taylor', specialization: 'Cognitive Befavioral Theray' },
    { id: 3, name: 'Dr. Paluchowski', specialization: 'Cognitive Befavioral Theray' },
    { id: 4, name: 'Dr. Cogito', specialization: 'Cognitive Befavioral Theray' },
    { id: 5, name: 'Dr. GreenThumb', specialization: 'Cognitive Befavioral Theray' },
  ]);

  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleConnect = (mentor) => {
    setSelectedMentor(mentor);
    // Save selected mentor to Db
  };

  return (
  <Container>
      <List>
        {mentors.map((mentor) => (
        <ListItem key={mentor.id}>
            <ListItemText primary={mentor.name} secondary={mentor.specialization} />
            <Button onClick={() => handleConnect(mentor)}>Connect</Button>
          </ListItem>
        ))}
      </List>
      {selectedMentor && <Typography>Connected with {selectedMentor.name}</Typography>}
    </Container>
  );
};

export default MentorList;
