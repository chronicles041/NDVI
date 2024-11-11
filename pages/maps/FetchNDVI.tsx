import axios from 'axios';
import config from './sentinelConfig';

interface NDVIResponse {
  date: string;
  ndviData: number[][];
}

export const fetchNDVIAndMapImage = async (
  bbox: [number, number, number, number],
  dateFrom: string, 
  dateTo: string
): Promise<{ ndviResponse: NDVIResponse | null; imageUrl: string | null }> => {
  const requestBody = {
    input_data: [
      {
        data_collection: 'SENTINEL2_L1C',
        time_interval: [dateFrom, dateTo],
        mosaicking_order: 'mostRecent',
      },
    ],
    responses: [{ format: { type: 'image/tiff' }, identifier: 'default' }],
    bbox: bbox,
    output: {
      width: 512,
      height: 512,
      resolution: 10,
      crs: 'EPSG:4326',
    },
  };

  try {
    // Fetch NDVI data
    const ndviResponse = await axios.post(
      `${config.api_url}/ogc/wms/${config.instance_id}`, // Change this to your NDVI endpoint
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${config.sh_client_secret}`,
        },
      }
    );

    // Get the image URL for the map
    const mapUrl = `https://services.sentinel-hub.com/ogc/wms/${config.instance_id}?REQUEST=GetMap&BBOX=${bbox.join(',')}&LAYERS=NATURAL-COLOR&MAXCC=20&WIDTH=320&HEIGHT=320&FORMAT=image/jpeg&TIME=${dateFrom}/${dateTo}`;

    return { ndviResponse: ndviResponse.data, imageUrl: mapUrl };
  } catch (error) {
    console.error('Error fetching NDVI data or map image:', error);
    return { ndviResponse: null, imageUrl: null };
  }
};
