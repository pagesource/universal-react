// @flow

type zIndex = {
  [key: string]: number | Object,
};

// z-index
export default ({
  zLoader: 1000,
  zOverlay: 900,
  zMenu: 800,
  zSticky: 700,
  zFilterList: 150,
  zFilterActions: 400,
  zFlyout: 200,
  zFilter: 100,
  zNativeTickSelectIcon: 50,
  zPlacesAutocomplete: 1100,
}: zIndex);
