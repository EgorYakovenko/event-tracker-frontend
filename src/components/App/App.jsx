import { useState } from 'react';
import viteLogo from '/vite.svg';
import { Event } from '../Events/Event';
import { EventsList } from '../EventsList/EventsList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/events/operations';
import { Registration } from '../../page/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <>
      <EventsList />
      <Routes>
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
