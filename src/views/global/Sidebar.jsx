import { useState } from "react";
import { useProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {
  HomeOutlined,
  PeopleOutlineOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlined,
  TimelineOutlined,
  MenuOutlined,
  ManOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-sidebar-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      {!isCollapsed && (
        <Box
          display="flex"
          justifyConent="space-between"
          alignItems="center"
          ml="15px"
        >
          <Typography variant="h3" color={colors.grey[100]}>
            Admins
          </Typography>
          <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <MenuOutlined />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
