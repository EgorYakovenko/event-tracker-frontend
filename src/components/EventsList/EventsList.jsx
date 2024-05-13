import { Event } from '../Events/Event';
import { useSelector } from 'react-redux';
import { selectFilteredEvents } from '../../redux/events/selectors';

export function EventsList() {
  const event = useSelector(selectFilteredEvents);
  console.log(event);
  return (
    <ul>
      {event.map(event => (
        <li key={event._id}>
          <Event data={event} />
        </li>
      ))}
    </ul>
  );
}
