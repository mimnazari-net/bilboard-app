"use client";
import "../../styles/hmbrgrmenue.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerLeft() {
  const isLoginUser: boolean = useSelector(
    (state: RootState) => state.bilboardSlice.isLogin
  );
  const userInfo = useSelector((state: RootState) => state.bilboardSlice.user);
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="hmbrgrmenue">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <div style={{ background: "#023047" }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </div>
        </AppBar>
        <Drawer
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 200,
              boxSizing: "",
              height: "100vh",
            },
            "& .MuiDivider-root": {
              display: "none",
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List
            sx={{
              flexDirection: "column",
              display: "flex",
            }}
          >
            <div style={{ width: "100%", height: "90vh" ,display:"flex" , flexDirection:"column",
          justifyContent:"space-around" ,alignItems:"center"}}>
            <div style={{filter:"brightness(0)"}} >
              <Link href={"/"}>
                <Image
                  alt="logo image"
                  width={60}
                  height={50}
                  src={"/image/logo.png"}
                  
                ></Image>
              </Link>
            </div>
            <div >
              <Link href={"/pages/advertisments"}
              style={{color:"black" , textDecoration: "none"}}>جستجو</Link>
            </div>
            <div>
              {" "}
              <p>افزودن ملک</p>
            </div>
            <div>
              {isLoginUser ? (
                <Link href={"/pages/dashboard"}
                style={{color:"black" , textDecoration: "none"}}>
                  <span> {userInfo.userName} </span>
                </Link>
              ) : (
                <div>
                  <span>ورود</span>|
                  <Link href={"/pages/register"}
                  style={{color:"black" , textDecoration: "none"}}>
                    <span>عضویت </span>
                  </Link>
                </div>
              )}
            </div></div>
          </List>
          <Divider />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
    </div>
  );
}
