import { Link } from 'react-router-dom';


export default function Navigation() {
  return (
    <div>
      {' '}
      <nav className="w-full flex justify-center mt-4 gap-4 mt-8">
        <Link className="py-2 px-4 bg-gray-300 rounded-full" to={'/'}>
          My cars
        </Link>
        <Link className="py-2 px-4" to={'/schedule'}>
          My schedule
        </Link>
        <Link className="py-2 px-4" to={'/profile'}>
          My profile
        </Link>
      </nav>
    </div>
  );
}
