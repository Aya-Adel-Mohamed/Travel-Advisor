import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
    background: '#e5cab370',
    fontSize: '15px',
    fontFamily: `'Borel', cursive`,
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    color: '#361d05',
    gap:'12px',
  },
  btn: {
    color: '#0d095b',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '5px 12px',
    borderRadius: '0',
    borderTopLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    background: 'linear-gradient(45deg, #e5cab3, transparent)',
    marginBottom: '15px',
    marginLeft: '5px',
  },
  titleColor: {
    color: '#0d095b',
    fontWeight: 'bold',
  },
  Name: {
    fontFamily: `'Borel', cursive`,
    color: '#6a3807',
    fontWeight: 'bold',
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    color: '#361d05',
    gap:'12px',
  },
}));