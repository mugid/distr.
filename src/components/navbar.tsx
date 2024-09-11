import { ThemeToggle } from "./theme-button";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <h1 className="font-bold">problify</h1>
            <ThemeToggle />
        </div>
    );
};

export default Navbar;