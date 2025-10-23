import ZooEssentialsSidebar from '../src/essentials-for-zoo/sidebar.json';
import YooEssentialsSidebar from '../src/essentials-for-yootheme-pro/sidebar';
import YooEssentials24Sidebar from '../src/essentials-for-yootheme-pro/v2.4/sidebar';

export default {
    '/essentials-for-zoo/': ZooEssentialsSidebar,
    ...YooEssentialsSidebar,
    ...YooEssentials24Sidebar,
};
