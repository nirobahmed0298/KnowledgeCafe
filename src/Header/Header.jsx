import profile from '../assets/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between py-3'>
            <h1 className='text-xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;