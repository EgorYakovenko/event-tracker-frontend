import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/view">View</NavLink>
    </div>
  );
}
