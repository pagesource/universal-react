# Analytics

This module helps you perform analytics tracking for capturing user behavior on your applications. There are 2 types of actions for this purpose PageView and EventActions. One can implement analytical tracking in application via below mentioned ways

1. **Via Redux Middleware way:**
   With this approach you are making use of existing Redux actions in the application and hook into them in Redux middleware chain to execute analytics tracking actions. You can opt for this approach for tracking user interactions where no major customization is needed into the data being set to analytics and the Redux action can be used as is. As a result, you will write less code for Analytics and save yourself from spreading analytics function calls in various components/containers.

2. **Via mapDispatchToProps way**: With this approach you get more granular control of your analytics tracking as it will allow you to define custom tracking actions and execute them conditionally by passing them to components through containers. Think of them like normal Redux actions but meant exclusively for tracking operations.

This module exposes the below methods:

- **setTrackerConfig** : Use this on application bootstrap to set confugration for tracker.

  ```javascript
  import { setTrackerConfig } from '@fil-global/eiswagen';

  const config = {
    channel: '[CHANNEL]', // e.g. "Personal Investing",
    channelAcronym: '[CHANNEL_ACRONYM]' // UKAS
    page_name: 'fid[COUNTRY]: [CHANNEL_ACRONYM]: [PAGE_NAME]', // e.g. "fidde: PI: Home"
    page_url: 'https://direct.fidelity.de/',
    country: '[COUNTRY]', // e.g. "DE"
    language: '[LANGUAGE]', // e.g. "de"
    site_section: 'General', // Based on logical site structure
    spa: false, // Or true for any single-page-application,
    ...otherData,
  };

  /*
  * Set Tracker Config
  * @param {config} config
  * @param {Array<String>} pageViewActions
  * @param {Array<String>} eventActions
  * @param {boolean} debug // optional
  * @param {function} callback // optional
  */

  setTrackerConfig({
    config: config,
    pageViewActions: [PAGE_TRANSITION],
    eventActions: [TRACK_ADD_CASH],
    debug?: process.env.development, // To see what is being set to the window data layer
    callback?: () =>{}, // Override the default functionality for tracker and define application based functionality.
  });
  ```

- **getTracker** : Retruns tracker instance along with configration objects passed during application bootstrap.

  ```javascript
  import { getTracker } from '@fil-global/eiswagen';

  const trackerData = getTracker();
  // Returns Below Changes
  {
    instance: {
      on: () => {},
      trackEvent: () => {},
      getHistory: () => {}
    }
    config:{},
    pageViewActions:[],
    eventActions:[],
    callback:()=>{},
    debug: false
  }
  ```

- **trackPageViewActions** : Updates tracker config with updated values and trigger a page tracking action

  ```javascript
  import { trackPageViewActions } from '@fil-global/eiswagen';

  const mapDispatchToProps () => ({
    trackHomePage: trackPageViewActions
  })

  // In Component
  const { trackHomePage } = this.props;
  trackHomePage({ pageName: 'Home Page', site_section: 'General' })
  ```

- **trackEventActions** : Updates tracker config with updated values and trigger a event tracking action

  ```javascript
  import { trackEventActions } from '@fil-global/eiswagen';

  const mapDispatchToProps () => ({
    trackAddCash: trackEventActions
  })

  // In Component
  const { trackAddCash } = this.props;
  trackAddCash({
    action: 'UKAS.addCash'
    pageName: 'Account Summary',
    siteSection: 'Account Ledger - Add Cash',
  })
  ```

- **TrackAnalytics** : You can use TrackAnalytics to create your own customized tracker.<br/>
  Refer: https://www.npmjs.com/package/react-tracker

**Note:** Current implementation is based on https://confluence.uk.fid-intl.com/pages/viewpage.action?spaceKey=FDA&title=Ensighten+implementation+guide

**Implementation On:** https://bitbucket.bip.uk.fid-intl.com/projects/GFES/repos/react-sample-app/browse
