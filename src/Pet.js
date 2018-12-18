import React from "react";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location } = this.props;

    let photos = [];

    //weird API GRR =[
    if (media && media.photos && media.photos.photo) {
      //only use the photo with @size as it returns a few
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return (
      <div className="pet">
        <div className="image-container">
          <img src={photos[0].value} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </div>
    );
  }
}

export default Pet;
