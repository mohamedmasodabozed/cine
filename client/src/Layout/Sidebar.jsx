import { useState  } from 'react';
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineMovie, MdMovie } from "react-icons/md";
import { PiTelevisionSimple, PiTelevisionSimpleFill } from "react-icons/pi";
import { RiPlayListLine, RiPlayListFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function Sidebar() {
    const [activeItem, setActiveItem] = useState('home');
    const navigate = useNavigate();
    const navItems = [
        { id: 'home', label: 'Home', icon: GoHome, activeIcon: GoHomeFill },
        { id: 'movies', label: 'Movies', icon: MdOutlineMovie, activeIcon: MdMovie },
        { id: 'tvSeries', label: 'TV Series', icon: PiTelevisionSimple, activeIcon: PiTelevisionSimpleFill },
        { id: 'anime', label: 'Anime', icon: PiTelevisionSimple, activeIcon: PiTelevisionSimpleFill },
        { id: 'myList', label: 'My List', icon: RiPlayListLine, activeIcon: RiPlayListFill },
    ];
    const handleActive = ()=>{
        if (activeItem === 'home') {navigate('/');localStorage.setItem('activeItem', 'home');
}
        if (activeItem === 'movies') {navigate('/movies');localStorage.setItem('activeItem', 'movies');
}
        if (activeItem === 'tvSeries') {navigate('/tv-series');localStorage.setItem('activeItem', 'tvSeries');
}
        if (activeItem === 'anime') {navigate('/anime');localStorage.setItem('activeItem', 'anime');
}
        if (activeItem === 'myList') {navigate('/my-list');localStorage.setItem('activeItem', 'myList');
}
    }
    return (
        <aside className="w-64 min-h-screen bg-[#141414] text-white flex flex-col border-r border-[#2a2a2a]">
            {/* Logo */}
            <div className="flex items-center gap-2 px-4 py-6">
                <div className="w-8 h-8 bg-[#E50914] rounded flex items-center justify-center">
                    <MdMovie className="text-white text-lg" />
                </div>
                <span className="text-lg font-semibold">CineStream</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3">
                <ul className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = localStorage.getItem('activeItem') === item.id;
                        const Icon = isActive ? item.activeIcon : item.icon;
                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => {setActiveItem(item.id); handleActive();}}
                                    className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-lg cursor-pointer transition-colors ${
                                        isActive
                                            ? 'bg-[#E50914] text-white'
                                            : 'text-gray-400 hover:bg-[#1F1F1F] hover:text-white'
                                    }`}
                                >
                                    <Icon className="text-xl" />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Bottom Section */}
            <div className="px-3 pb-4 border-t border-[#2a2a2a] pt-4">
                {/* Settings */}
                <button className="w-full flex items-center gap-3 py-2.5 px-3 rounded-lg text-gray-400 hover:bg-[#1F1F1F] hover:text-white transition-colors cursor-pointer">
                    <IoSettingsOutline className="text-xl" />
                    <span className="text-sm font-medium">Settings</span>
                </button>

                {/* Guest User */}
                <div className="flex items-center gap-3 mt-4 px-3 py-2 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                    <FaUserCircle className="text-2xl text-gray-500" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-white">Guest User</span>
                        <span className="text-xs text-gray-500">Sign in to save list</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}