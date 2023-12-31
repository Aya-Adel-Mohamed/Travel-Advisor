import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React, { createRef, useEffect, useState } from 'react'
import useStyles from './styles'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = ({ places, childSelected, isLoading, type, rating, setType, setRating }) => {
  const classes = useStyles();
  const [plRef, setPlRef] = useState([]);
  useEffect(() => {
    setPlRef((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <>
      <div className={classes.container}>
        <Typography variant='h5' className={classes.title}>Restaurants, Hotels and Atrractions Around You</Typography>
        {isLoading ? <div className={classes.loading}><CircularProgress size='5rem' style={{ 'color': '#361d05' }} /></div> :
          <>
            <FormControl className={classes.formControl}>
              <InputLabel>Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value='restaurants'>Restaurants</MenuItem>
                <MenuItem value='hotels'>Hotels</MenuItem>
                <MenuItem value='attractions'>Attractions</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>Rating</InputLabel>
              <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
              {places?.map((place, i) => (
                <Grid ref={plRef[i]} item key={i} xs={12}>
                  <PlaceDetails
                    place={place} selected={Number(childSelected) == i}
                    refProp={plRef[i]} />
                </Grid>
              ))}
            </Grid>
          </>
        }
      </div>
    </>
  )
}

export default List