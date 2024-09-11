import { ModeToggle } from './toggle-theme';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <h1>problify</h1>
            <ModeToggle />
        </div>
    );
};

export default Navbar;