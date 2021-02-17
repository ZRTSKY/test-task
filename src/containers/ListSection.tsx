import React, { FC } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import { RootState } from 'store/reducer';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListSection: FC = () => {
  const classes = useStyles();
  const { data, error, loading } = useSelector(({ dataStore }: RootState) => dataStore);

  if (loading) return <Loading />;
  if (error) return <NotificationTitle text={'Error when fetch the data'} />;
  if (!data.length) return <NotificationTitle text={'No data find'} />;

  return (
    <List className={classes.root}>
      {data.map((item) => (
        <ListItem key={item}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
};

const NotificationTitle: FC<{ text: string }> = ({ text }) => <Typography variant={'h4'}>{text}</Typography>;

const Loading: FC = () => (
  <Box display="block" marginX="auto">
    <CircularProgress />
  </Box>
);

export default ListSection;
