import React from 'react';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
import _ from 'lodash';
import ItemModal from './../../components/ItemModal';
import Iconator from './../../components/Iconator';
import Mapping from './utilities/Mapping';

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
                <div
                  className={ClassNames('item c-tooltip', { item_oss: i.oss && !i.branded }, { item_commercial: !i.oss }, { item_branded: i.branded })}
                >
                  <div
                    className="company"
                    // style={{ backgroundImage: `url(${renderLogo(i)})` }}
                    style={{ backgroundImage: `url(${i.raw_logo})` }}
                    title=""
                  />
                  
                  <div className="company-name">
                    {i.name} +  {i.oss ? 'OSS' : ''}
                  </div>
                </div>
              </ItemModal>
            ))}
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default SubCategoryView;

