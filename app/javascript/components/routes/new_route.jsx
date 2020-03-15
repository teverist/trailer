import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline
} from "react-google-maps";



class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      searchInput: "Morton, Lincolnshire",
      title: "",
      description: "",
      redirectToRoutes: false,
      elevation: 0,
      elevationStr: "0 ft",
      distance: 0,
      distanceStr: "0.00 mi",
      duration: 0,
      durationStr: "0s",
      polyline: "",
      image_url: "",
      big_image_url: "",
      sport: ""
    };
    this.coordinates = [];
    this.newCoordinates = [];
    this.coordIndex = 0;
    this.legs = [];
    this.path = [];
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  } 
  handleClick(e) {
    this.coordinates = this.coordinates.slice(0, this.coordIndex);

    this.coordinates.push({
      location: {lat: e.latLng.lat(), lng: e.latLng.lng()},
    });

    this.coordIndex += 1;

    if (this.coordinates.length > 1) {
      this.calculateAndDisplayRoute();
      this.saveButton.setAttribute("id", "");

    } else {
      this.marker = <Marker position={this.coordinates[0].location} map={this.map} />
      this.marker.setMap(this.map);
    }
  }
  
  
  /* coordinates = [
    { lat: 18.558908, lng: -68.389916 },
    { lat: 18.558853, lng: -68.389922 },
    { lat: 18.558375, lng: -68.389729 },
    { lat: 18.558032, lng: -68.389182 },
    { lat: 18.55805, lng: -68.388613 },
    { lat: 18.558256, lng: -68.388213 },
    { lat: 18.558744, lng: -68.387929 }
  ]; */
  render = () => {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 18.559008, lng: -68.388881 }}
      >
        <Polyline path={this.coordinates} options={{ strokeColor: "#FF0000 " }} />
      </GoogleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

export default () => (
  <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px`, width: "500px" }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);