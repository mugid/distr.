import { ThemeToggle } from "./theme-button";

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <h1>problify</h1>
            <ThemeToggle />
        </div>
    );
};

export default Navbar;