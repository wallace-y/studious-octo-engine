import { useState } from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Container, TextField, Typography, Button, Box } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <Typography variant="h1">Your to do list</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField id="filled-basic" variant="filled" placeholder="To Do" fullWidth/>
            <Grid container alignItems="center" sx={{ marginTop: "16px" }}>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Add note"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <Button style={{ minHeight: "55px" }} variant="outlined" fullWidth>
                  +
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "8px",
              }}
            >
              <Typography variant="body1">This is a note</Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "8px",
              }}
            >
              <Typography variant="body1">This is a note</Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "8px",
              }}
            >
              <Typography variant="body1">This is a note</Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "8px",
              }}
            >
              <Typography variant="body1">This is a note</Typography>
            </Box>{" "}
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="In Progress"
              fullWidth
            />
            <Grid container alignItems="center" sx={{ marginTop: "16px" }}>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Add note"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <Button style={{ minHeight: "55px" }} variant="outlined" fullWidth>
                  +
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "8px",
              }}
            >
              <Typography variant="body1">This is a note</Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "8px",
              }}
            >
              <Typography variant="body1">This is a note</Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "8px",
              }}
            >
              <Typography variant="body1">This is a note</Typography>
            </Box>{" "}
          </Grid>
          <Grid item xs={4}>
            <TextField id="filled-basic" variant="filled" placeholder="Done" fullWidth/>
            <Grid container sx={{ marginTop: "16px" }}>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Add note"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <Button style={{ minHeight: "55px" }} variant="outlined" fullWidth>
                  +
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "8px",
              }}
            >
              <Typography variant="body1">This is a note</Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "8px",
              }}
            >
              <Typography variant="body1">This is a note</Typography>
            </Box>{" "}
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "8px",
              }}
            >
              <Typography variant="body1">This is a note</Typography>
            </Box>{" "}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
