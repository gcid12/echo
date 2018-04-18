import React from 'react';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
import Iconator from './../../components/Iconator';
import Mapping from './utilities/Mapping';
import Featured from './../../components/Featured';

const CategoryView = ({ cat, data }) => {
  const CATEGORIES = data.payload;
  const category = CATEGORIES[cat];
  const subCategories = category.subcategories;
  
  if (!category) {
    return <div>No Category called like that</div>;
  }
  const thisCat = `cat_${Mapping(category.slug_name)}`;
  
  return (
    <div className="module">
      <div className={ClassNames(`stillbox ${thisCat}`)}>
        <div className="box-2 category-box">
          <h1 className="category-title categ-big">
            {category.name}
          </h1>
          <div className="companies">
            <div className=" box-items">
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
              
              {subCategories.map((i, index) => (
                <Link
                  key={index}
                  to={{
                    pathname: `/${category.slug_name}/${index}`,
                    state: { modal: true },
                  }}
                >
                  <h5 className="subcateg">
                    <i className="caret right icon" />{i.name}
                  </h5>
                </Link>
              ))}
            </div>
          
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CategoryView;

