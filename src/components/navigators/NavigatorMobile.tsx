import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { RouteType } from '../../models/RouteType';
import { Link as RouterLink } from 'react-router-dom';

const NavigatorMobile: React.FC<{ items: RouteType[] }> = ({items}) => {
    const[itemNumber, setItemNumber] = React.useState<number>(0);
    function changeItem(event: any, itemNumber: number) {
        setItemNumber(itemNumber);
    }
    function getItems(): React.ReactNode {
        return items.map(item => <ListItem style={{color: 'black'}} key={item.path} component={RouterLink} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>)
    }
    return <Drawer variant='permanent'>
        <List>
            {getItems()}
        </List>
    </Drawer>

}
export default NavigatorMobile;
