// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={data.photo} />
      </ListItemAvatar>
      <ListItemText
        primary={data.name}
        secondary={
          <>
            <Box component="span" sx={{ display: "block" }}>
              <Typography variant="subtitle1">{data.phone}</Typography>
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              <Typography variant="subtitle1">{data.email}</Typography>
            </Box>
          </>
        }
      />
    </ListItem>
  );
};

export default Contact;
