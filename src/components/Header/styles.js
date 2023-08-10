import { alpha, makeStyles } from '@material-ui/core/styles';
import '../../webfonts/LobsterTwo-Regular.ttf';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    fontFamily: `'Borel', cursive`,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.6rem',
    },
  },
  searchTitle: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.2rem',
      fontFamily: `'Borel', cursive`,
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    fontFamily: `'Borel', cursive`,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    },
    fontFamily: `'Borel', cursive`,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'linear-gradient(45deg,#361d05,#0d095b)',
  },
}));