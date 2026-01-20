import ZooEssentialsSidebar from '../src/essentials-for-zoo/sidebar.json';
import YooEssentialsSidebar from '../src/essentials-for-yootheme-pro/sidebar';
import YooEssentials30Sidebar from '../src/essentials-for-yootheme-pro/v3.0-beta/sidebar';

export default {
    '/essentials-for-zoo/': ZooEssentialsSidebar,
    ...YooEssentialsSidebar,
    ...YooEssentials30Sidebar,
};
