import { layer, topics, user, projects } from '../../components/UI/Icons';

const links = [
  {
    name: 'Home',
    to: '/home',
    icon: layer
  },
  {
    name: 'Our Topics',
    to: '/topics',
    icon: topics
  },
  {
    name: 'Our Projects',
    to: '/projects',
    icon: projects
  },
  {
    name: 'Profile Settings',
    to: '/settings',
    icon: user
  },
];

export default links;
