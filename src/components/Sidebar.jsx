import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => (
    <Drawer variant="permanent" anchor="left" sx={{ '& .MuiDrawer-paper': { marginTop: '64px' } }}>
        <List>
        {/* Add your list items here */}
        <ListItem>
            <ListItemText primary="Home" />
        </ListItem>
        {/* More items */}
        </List>
  </Drawer>
);

export default Sidebar;