import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
    title: 'Feed',
    path: '/',
    icon: <FaIcons.FaIcons />,
    cName: 'nav-text'
    },
    {
    title: 'My Subjects',
    path: '/my_subjects',
    icon: <AiIcons.AiOutlineDeploymentUnit />,
    cName: 'nav-text'
    },
    {
    title: 'Browse Subjects',
    path: '/browse_subjects',
    icon: <FaIcons.FaPushed/>,
    cName: 'nav-text'
    },
    {
    title: 'Current Tutors',
    path: '/',
    icon: <FaIcons.FaChalkboardTeacher />,
    cName: 'nav-text'
    },
    {
    title: 'Find Tutors',
    path: '/',
    icon: <FaIcons.FaSearchLocation />,
    cName: 'nav-text'
    },
    {
    title: 'User',
    path: '/',
    icon: <FaIcons.FaUserCircle />,
    cName: 'nav-text'
    }
];