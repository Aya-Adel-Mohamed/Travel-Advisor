import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '150px',
    borderRadius:'8px',
  },
  typography: {
    fontFamily: `'Borel', cursive`,
    color: '#0d095b',
    fontSize: '16px',
    textAlign:'center',
  },
  mapContainer: {
    height: '95vh',
    width: '100%',
    verticalAlign: 'middle',
  },
  marker: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {
      zIndex: 2
    },
  },
  pointer: {
    cursor: 'pointer',
  },
}));