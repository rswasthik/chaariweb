import { Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";

import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdLogout, MdOutlineListAlt, MdPersonAddAlt1 } from "react-icons/md";
const Navbar2 = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#e6e6e6",
        contrastText: "#fff",
      },
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav
        style={{
          background: "#9B929236",
          borderRadius: "16px",
          boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5.7px)",
          // -webkit-backdrop-filter: blur(2px);
          border: "1px solid rgba(100, 100, 100, 0.84)",
          margin: "20px 20px",
          borderRadius: "20px",
          zIndex: "999",
        }}
        className="bg-gray-400 p-3  m-5 rounded-2xl p-4"
      >
        <div className="flex justify-between">
          <Link href="/">
            <pa className="inline-flex items-center p-2 mr-4 ">
              {/* <Image src="/logo.png" alt="" width={100} height={80} /> */}
              <span className="text-xl text-white font-bold uppercase tracking-wide">
                Chaari
              </span>
            </pa>
          </Link>
          <div className="">
            <ul className="flex items-center  flex-column  ">
              <li>
                <Link href="/UploadVideo">
                  <pa className="inline-flex  px-4 py-2  text-white font-bold items-center justify-center hover:scale-125 hover:text-gray-300 transition-all">
                    {" "}
                    Upload Video
                  </pa>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <pa className="inline-flex  px-4 py-2  text-white font-bold items-center justify-center hover:scale-125 hover:text-gray-300 transition-all">
                    {" "}
                    View Video
                  </pa>
                </Link>
              </li>

              <li>
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Tooltip title="More">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ mx: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <BsThreeDotsVertical
                          style={{
                            color: "#fff",
                            fontSize: "1.25rem",
                            margin: "0 .1rem",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        // background: "#9B929236",
                        // borderRadius: "16px",
                        // boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.1)",
                        // backdropFilter: "blur(5.7px)",
                        // // -webkit-backdrop-filter: blur(2px);
                        // border: "1px solid rgba(100, 100, 100, 0.84)",
                        // margin: "20px 20px",
                        // borderRadius: "20px",
                        // zIndex: "999",

                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Avatar /> Profile
                    </MenuItem>

                    <Divider />
                    <Link href="/studentsList">
                      <MenuItem sx={{ pr: 6, py: 1.5 }} onClick={handleClose}>
                        <ListItemIcon>
                          <MdOutlineListAlt fontSize="large" />
                        </ListItemIcon>
                        Student List
                      </MenuItem>
                    </Link>
                    {/* <Link href="/addMentor">
                      <MenuItem sx={{ pr: 4, py: 1.5 }} onClick={handleClose}>
                        <ListItemIcon>
                          <MdPersonAddAlt1 fontSize="large" />
                        </ListItemIcon>
                        Add Mentor
                      </MenuItem>
                    </Link> */}
                    <Divider />
                    <Link href="/">
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <MdLogout color="red" fontSize="large" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Link>
                  </Menu>
                </ThemeProvider>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
