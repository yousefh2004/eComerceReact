import React from 'react';
import { Box, AppBar, Toolbar, Typography, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); 

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/" },
    { label: "Brands", path: "/" },
    { label: "Products", path: "/" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(92, 92, 92, 0.1)", 
          color: "white",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.8)",
          marginTop:5,
          marginRight:17,
          width:1250,
          borderRadius:3,
          backdropFilter: "blur(10px)", 
          WebkitBackdropFilter: "blur(10px)", 
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            sx={{
              display: { xs: "none", sm: "block" },
              fontSize: "36px",
              fontFamily: "'Orbitron', sans-serif", 
              fontWeight: 700,
              color: "#a29f9fff",
              marginLeft: 10,
            }}
          >
            YYH23
          </Typography>

          <Toolbar sx={{ gap: 4, marginLeft: 19 }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                component={RouterLink}
                to={link.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                 sx={{
                  display: { xs: "none", sm: "block" },
                  borderBottom: location.pathname === link.path ? "4px solid #820cb4ff" : "3px solid transparent",
                  paddingBottom: "1px",
                  transition: "border-bottom 0.6s ease-in-out",
                    }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Toolbar>

          <Toolbar sx={{ gap: 3, marginLeft: 27 }}>
             <Link component={RouterLink} to="/register" sx={{ color: "inherit" }}>
              <PersonIcon />
             </Link>
            <FavoriteIcon/>
            <ShoppingCartIcon/>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
