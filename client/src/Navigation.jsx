import { Link, useLocation } from 'react-router-dom';


export default function Navigation() {
  const location = useLocation();

  return (
    <div>
      {' '}
      <nav className="w-full flex justify-center mt-4 gap-4 mt-8">
        <Link className={`py-2 px-4 ${location.pathname === '/'  || location.pathname === '/car/'? 'bg-gray-300 rounded-full' : ''}`} to={'/'}>
          My cars
        </Link>
        <Link className={`py-2 px-4 ${location.pathname === '/profile' ? 'bg-gray-300 rounded-full' : ''}`} to={'/profile'}>
          My profile
        </Link>
      </nav>
    </div>
  );
}
