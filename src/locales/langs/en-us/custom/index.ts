import home from './home';
import groupPage from './groupPage';
import devicePage from './devicePage';
import groupingDetails from './grouping_details';
import deviceDetails from './device_details';
import management from './management';
import personalCenter from './personalCenter';
import plugin from './plugin';
import visualization from './visualization';

// Placeholder for associated devices translations
const associatedDevices = {
  selectDeviceFirst: 'Please select at least one device.' // Added key
};

export default {
  home,
  groupPage,
  devicePage,
  grouping_details: groupingDetails, // Keep original key format
  device_details: deviceDetails, // Keep original key format
  management,
  personalCenter,
  plugin,
  visualization,
  associatedDevices // Added new object
};
