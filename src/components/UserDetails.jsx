import React from 'react';
const UserDetails = ({item}) => {
    return (  
        <React.Fragment>
            <div className="people_details">
                <div className="name">{item.name}</div>
                <div className="section">
                    <div className="subheading">Gender</div>
                    <div className="subheadingText">{item.gender}</div>
                </div>
                <div className="section">
                    <div className="subheading">Birth year</div>
                    <div className="subheadingText">{item.birth_year}</div>
                </div>
                <div className="section">
                    <div className="subheading">Height</div>
                    <div className="subheadingText">{item.height}</div>
                </div>
                <div className="section">
                    <div className="subheading">Skin Color</div>
                    <div className="subheadingText">{item.skin_color}</div>
                </div>
                <div className="section">
                    <div className="subheading">Hair Color</div>
                    <div className="subheadingText">{item.hair_color}</div>
                </div>
                <div className="section">
                    <div className="subheading">Eye Color</div>
                    <div className="subheadingText">{item.eye_color}</div>
                </div>
            </div>
        </React.Fragment>
      );
}
 
export default UserDetails;