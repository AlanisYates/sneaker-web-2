import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { ViewCompact, List as ListIcon } from "@mui/icons-material";

//import { tokens } from "../../theme";
import Header from "../../components/Header";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const Services = () => {
  const [isListView, setIsListView] = useState(false);

  const handleViewChange = () => {
    setIsListView(!isListView);
  };
  return (
    <Box m="20px">
      <Header
        title="Services"
        subtitle="Add, Edit, and Delete your services you provide. List your prices, create custom packages, and more!"
      />

      <Grid container spacing={1}>
        <List>
          <Box alignItems="center" justifyContent="space-between">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <ListItem>
                <ListItemIcon onClick={handleViewChange}>
                  <ViewCompact />
                </ListItemIcon>
                <ListItemText primary="View" />
              </ListItem>
              <ListItem>
                <ListItemIcon onClick={handleViewChange}>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary="List" />
              </ListItem>
            </Stack>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: 400,
                }}
              >
                <CardMedia
                  textAlign={"center"}
                  component="img"
                  height="300"
                  width="300"
                  src="/assets/yellowrestoration.jpg"
                  alt="sneakerrestoration"
                />
                <Typography
                  variant="h3"
                  fontWeight="600"
                  sx={{ padding: "10px 15px 10 10px" }}
                >
                  Yellow Restoration
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "10px 15px 10 10px" }}
                >
                  You dont even have to wear sneakers for them yellow over time.
                  It happens, it looks bad but we will take care of the sneaker
                  yellowing on your kicks and make them look new.
                </Typography>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  padding="10px"
                >
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    sx={{ marginRight: "10px" }}
                  >
                    Delete
                  </Button>
                  <Button variant="contained" startIcon={<EditIcon />}>
                    Edit
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: 400,
                }}
              >
                <CardMedia
                  textAlign={"center"}
                  component="img"
                  height="300"
                  width="300"
                  src="/assets/sneakercleaning.webp"
                  alt="sneakerrestoration"
                />
                <Typography
                  variant="h3"
                  fontWeight="600"
                  sx={{ padding: "10px 15px 10 10px" }}
                >
                  Sneaker Cleaning
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "10px 15px 10 10px" }}
                >
                  You dont even have to wear sneakers for them yellow over time.
                  It happens, it looks bad but we will take care of the sneaker
                  yellowing on your kicks and make them look new.
                </Typography>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  padding="10px"
                >
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    sx={{ marginRight: "10px" }}
                  >
                    Delete
                  </Button>
                  <Button variant="contained" startIcon={<EditIcon />}>
                    Edit
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: 400,
                }}
              >
                <CardMedia
                  textAlign={"center"}
                  component="img"
                  height="300"
                  width="300"
                  src="/assets/soleswap.jpeg"
                  alt="sneakerrestoration"
                />
                <Typography
                  variant="h3"
                  fontWeight="600"
                  sx={{ padding: "10px 15px 10 10px" }}
                >
                  Sole Swap
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "10px 15px 10 10px" }}
                >
                  This sole swap hybrid service gives you the option to take two
                  different pairs of shoes you provide and use the upper and
                  sole from each to create one hybrid sneaker.
                </Typography>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  padding="10px"
                >
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    sx={{ marginRight: "10px" }}
                  >
                    Delete
                  </Button>
                  <Button variant="contained" startIcon={<EditIcon />}>
                    Edit
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: 400,
                }}
              >
                <CardMedia
                  textAlign={"center"}
                  component="img"
                  height="300"
                  width="300"
                  src="/assets/iceysolerestoration.jpeg"
                  alt="sneakerrestoration"
                />
                <Typography
                  variant="h3"
                  fontWeight="600"
                  sx={{ padding: "10px 15px 10 10px" }}
                >
                  Icey Sole Restoration
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "10px 15px 10 10px" }}
                >
                  Even the most dingy sneaker yellowing can be brought back to
                  icy so let us bring your icy soles back! We also now have a
                  Icy Sole Masterclass so you can learn how to Ice Sneakers with
                  sole sauce!
                </Typography>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  padding="10px"
                >
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    sx={{ marginRight: "10px" }}
                  >
                    Delete
                  </Button>
                  <Button variant="contained" startIcon={<EditIcon />}>
                    Edit
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Box>
        </List>
      </Grid>
    </Box>
  );
};

export default Services;
