import Link from 'next/link';

const Navbar = () => { 
    return (
        <nav className="bg-green-500 text-white text-xl p-4 flex justify-between items-center">
            <div>Movie App</div>
            <div>
                <Link className="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 mr-2 rounded" href="/">
                    Home
                </Link>
                <Link className="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 mr-2 rounded" href="/admin">
                    Admin
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
