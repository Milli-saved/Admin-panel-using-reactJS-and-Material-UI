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
  return <div>Sidebar</div>;
};

export default Sidebar;
