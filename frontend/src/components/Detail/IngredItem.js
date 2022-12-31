import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography
} from "@mui/material";

import CheckIcon from '@mui/icons-material/Check';


export default function IngredItem ( {ingred} ) {
  return (
    <ListItem>
      {
        (ingred.slice(-1) == ':') ?
          (<>
            <ListItemText
              primary={<Typography variant="h6" >{ingred}</Typography>}
              // primary={<Typography variant="overline" sx={{ fontSize: 'h6.fontSize' }}>{ingred}</Typography>}
            />
          </>)
          : (<>
            <ListItemIcon>
              <CheckIcon sx={{ color: "orange" }}/>
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">{ingred}</Typography>}
            />
          </>)
      }

    </ListItem>
  );
}