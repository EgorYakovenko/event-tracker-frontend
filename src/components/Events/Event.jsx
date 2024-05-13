import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export function Event({ data: { title, description, event_date, organizer } }) {
  //   console.log({ data });
  //   const dispatch = useDispatch;

  return (
    <div>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Event_date: {event_date}</p>
      <p>Organizer: {organizer}</p>
      <Navigation />
    </div>
  );
}
