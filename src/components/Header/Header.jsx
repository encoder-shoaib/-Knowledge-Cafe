import './Header.css'
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-5 mx-4 border-b-2 mb-3'>
            <h1 className="text-3xl font-bold ">
            Knowledge Cafe
            </h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;