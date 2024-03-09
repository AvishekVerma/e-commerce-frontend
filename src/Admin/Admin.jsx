import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';
import AdminDashboard from './components/Dashboard/AdminDashboard';


const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
    { name: "Add Product", path: "/admin/product/create", icon: <DashboardIcon /> },
    // { name: "Total Earnings", path: "/admin" },
    // { name: "Weekly Overview", path: "/admin" },
    // { name: "Monthly Overview", path: "/admin" },
];


const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = React.useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {isLargeScreen && <Toolbar />}
            <List>
                {menu.map((item, index) => (
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
                <Divider />
                {/* {["Account", "Request"].map((text, index) => (
                ))} */}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    )

    const drawerVariant = isLargeScreen ? "permanent" : "temporary";


    return (
        <div className='flex h-[100vh] '>
        <CssBaseline />
        <div className='w-[15%] border border-r-gray-300 h-full fixed top-0'>
            {drawer}
        </div>

        <div className='w-[85%] h-full ml-[15%]'>
            <Routes>
                <Route path="/" element={<AdminDashboard />}></Route>
                <Route path="/product/create" element={<CreateProductForm />}></Route><Route path="/products" element={<ProductsTable />}></Route>
                <Route path="/orders" element={<OrdersTable />}></Route>
                <Route path="/customers" element={<CustomersTable />}></Route>
            </Routes>
        </div>

    </div>
    )
}

export default Admin