import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCEmYnjRxXa3_vamGIC4Vf8hXK2KdomBvw'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps={
    center: {
        lat: 33.663860,
        lng: -117.904770
    },
    zoom: 6
}

export default Map
