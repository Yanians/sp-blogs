import { deepmerge } from '@mui/utils';
import Card from './Card';
import AppBar from './AppBar';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import IconButton from './IconButton';
import Autocomplete from './Autocomplete';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme:any) {
  return deepmerge(
        AppBar(theme),
        Card(theme),
        Lists(theme),
        //@ts-ignore
        Paper(theme),
        Input(theme),
        Button(theme),
        Tooltip(theme),
        Backdrop(theme),
        Typography(theme),
        IconButton(theme),
        Autocomplete(theme)
      );
}
