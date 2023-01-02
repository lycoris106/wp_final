import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography
} from "@mui/material";

import CheckIcon from '@mui/icons-material/Check';


export default function IngredItem ( {ingred, matches} ) {
  if (ingred == '\u00a0') {
    return;
  }
  return (
    <ListItem>
      {
        (ingred.slice(-1) == ':') ?
          (<>
            <ListItemText
              primary={<Typography variant="h6" >{ingred}</Typography>}
              // primary={<Typography variant="overline" sx={{ fontSize: 'h6.fontSize' }}>{ingred}</Typography>}
            />
          </>) :
          (matches)? (<>
            <ListItemIcon>
              <CheckIcon sx={{ color: "orange" }}/>
            </ListItemIcon>
            <ListItemText
              primary={ingred}
              secondary={null}

            />
            </>) : (
              <ListItemText
                inset
                primary={ingred}
                secondary={null}

              />
              )
      }

    </ListItem>
  );
}