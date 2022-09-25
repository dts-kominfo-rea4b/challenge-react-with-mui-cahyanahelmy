// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ onSubmit }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = () => {
    onSubmit({
      name,
      phone,
      email,
      photo,
    });
    console.info('Added to list')
  };

  return (
    <Card sx={{}}>
      <CardContent>
        <TextField
          id="name"
          label="Name"
          variant="standard"
          sx={{ width: "100%" }}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="phone"
          label="Phone"
          variant="standard"
          sx={{ width: "100%" }}
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          sx={{ width: "100%" }}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="photo"
          label="Photo URL"
          variant="standard"
          sx={{ width: "100%" }}
          required
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button onClick={handleSubmit} size="small">
          Add New
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContactForm;
