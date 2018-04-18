import React from 'react';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
import _ from 'lodash';
import ItemModal from './../../components/ItemModal';
import Iconator from './../../components/Iconator';
import Mapping from './utilities/Mapping';
import Featured from './../../components/Featured';

const SubCategoryView = ({ cat, match, data, state }) => {
  const category = data.payload[cat];
  
  const subCategory = category.subcategories[match.params.id];
  const sorted = _.sortBy(subCategory.items, [function sort(o) { return o.name; }]);
  
  const filter1 = state.filter_one;
  const filter2 = state.filter_two;
  const filter3 = state.filter_three;
  
  const thisCat = `cat_${Mapping(category.slug_name)}`;
  
  if (!subCategory) {
    return <div>No Sub Category called like that</div>;
  }
  
  const renderCalculated = (c) => {
    let element;
    if (c.calculated) {
      element = c.calculated;
    } else {
      element = [];
    }
    return element;
  };
  
  const renderLogo = (c) => {
    let element;
    if (c.calculated) {
      element = c.calculated.resized_logo;
    }
    return element;
  };
  
  
  return (
    <div className="module">
      <Iconator icon={category.slug_name} size="background" />
      <div className={ClassNames(`stillbox ${thisCat}`)} >
        
        <div className="box-2 category-box">
          <div className="subcateg-title">
            <Link to={{ pathname: `/${category.slug_name}` }}>
              <span className="category-title">
                {category.name}
              </span>
            </Link>
            <span> / {subCategory.name}</span>
          </div>
          <div className={ClassNames('box-items', { filter_branded: !filter1 }, { filter_oss: !filter2 }, { filter_commercial: !filter3 })}>
            
            {sorted.map((i, index) => (
              <ItemModal
                data={i}
                cat={category.name}
                slug={category.slug_name}
                subcat={subCategory.name}
                index={index}
                key={i.slug_name}
                calculated={renderCalculated(i)}
              >
                <svg className='xmark' viewBox="0 0 396 266.42" width={100} height={200} version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">

                  <Link
                      key={224}
                      to={{
                          pathname: `/greens/1`,
                          state: { modal: true },
                      }}
                  >
                    <polygon className="cls-2" points="132.5 114.03 132.5 38.39 198 0.58 263.5 38.39 263.5 114.03 198 151.84 132.5 114.03"/><path d="M317,84.3l65,37.53v75.06l-65,37.53-65-37.53V121.83L317,84.3m0-1.15-66,38.11v76.21l66,38.11,66-38.11V121.25L317,83.15Z" transform="translate(-119 -83.15)"/>
                  </Link>
                </svg>
                  {/*{i.name} +  {i.oss ? 'OSS' : ''}*/}

              </ItemModal>
            ))}
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default SubCategoryView;

