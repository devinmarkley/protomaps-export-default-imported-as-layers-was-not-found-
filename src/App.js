import "./App.css";
import { useEffect } from "react";
import Map from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Protocol } from "pmtiles";
import layers from "protomaps-themes-base";

function App() {
  useEffect(() => {
    let protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);
    return () => {
      maplibregl.removeProtocol("pmtiles");
    };
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <Map
        style={{ width: 600, height: 400 }}
        mapStyle={{
          version: 8,
          sources: {
            basemap: {
              type: "vector",
              url: "pmtiles://https://kaart.sfo3.digitaloceanspaces.com/testFolder/20230918.pmtiles",
            },
          },
          layers: layers("basemap", "light"),
          /*
            When this code is styled it will style properly
         */
          // layers: [
          //   {
          //     id: "earth",
          //     source: "basemap",
          //     "source-layer": "earth",
          //     type: "line",
          //     paint: {
          //       "line-color": "#009",
          //     },
          //   },
          // ],
        }}
        mapLib={maplibregl}
      />
    </div>
  );
}

export default App;
