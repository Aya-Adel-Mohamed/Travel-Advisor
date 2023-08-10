import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: '30px',
  },
  title: {
    fontFamily: `'Borel', cursive`,
    color: '#0d095b',
    fontWeight: 'bold',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0d095b',
  },
  container: {
    padding: '10px 5px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh',
    overflow: 'auto',
  },
}));