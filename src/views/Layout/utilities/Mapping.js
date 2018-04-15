
const Mapping = (cat) => {
  let value;
  switch (cat) {
    case 'reds':
      value = '0';
      break;
    case 'oranges':
      value = '1';
      break;
    case 'yellows':
      value = '2';
      break;
    case 'greens':
      value = '3';
      break;
    case 'blues':
      value = '4';
      break;
    case 'purples':
      value = '5';
      break;
    case 'pinks':
      value = '6';
      break;
      // inverse Mapping
    case 0:
      value = 'reds';
      break;
    case 1:
      value = 'oranges';
      break;
    case 2:
      value = 'yellows';
      break;
    case 3:
      value = 'greens';
      break;
    case 4:
      value = 'blues';
      break;
    case 5:
      value = 'purples';
      break;
    case 6:
      value = 'pinks';
      break;
    case 7:
    default : value = '0';
  }
  return value;
};

export default Mapping;
