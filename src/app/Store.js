import { create } from 'zustand';

const useStore = create((set) => ({
  projects: [
    {
      name: "Reitveld-Shroder Huis",
      lat: 52.0865,
      lng: 5.1460,
      zoom: 10,
      modelUrl: 'https://deploy-preview-1010--bldrs-share.netlify.app/share/v/gh/Swiss-Property-AG/Unteraegeri-Public/main/Unteraegeri.ifc',
      projectInfo: [
        {
          name: 'Description',
          description: "Designed in 1924. A private residence until 1985. Architectural highlight of De Stijl and iconic landmark in Utrecht.",
          image: 'https://www.iconichouses.org/foto/news/2022/rietveld/Rietveld-Schroderhuis.jpg'
        },
        {
          name: 'The Building',
          image: 'https://github.com/user-attachments/assets/6b66cbf9-4baa-47ae-a270-81ab5c4497ff',
          description: `Rietveld sought to make the most of the space in and around the house. He did this by incorporating three-dimensionality – height, width and depth – in all facets of the design. Take this lamp, for example.`
        },
      ]
    },
    {
      name: "Bauhaus",
      lat: 51.8416,
      lng: 12.2425,
      zoom: 10,
      modelUrl: '',
      projectInfo: [
        {
          name: 'Description',
          description: "The Bauhaus Dessau, designed by Walter Gropius, is a key work of European modernism and a UNESCO World Heritage site.",
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5dq9_5K7vLp-pQr9C1EOJJds9_a1IDqZvA&s'
        },
        {
          name: 'The Building',
          image: 'https://media.architecturaldigest.com/photos/564f580510e801045c560583/16:9/w_2560%2Cc_limit/bauhaus-dessau-campus-architecture06.jpg',
          description: `The Bauhaus Dessau is renowned for its revolutionary approach to design and architecture, emphasizing functionality and simplicity.`
        },
      ]
    },
    {
      name: "Pavillon Le Corbusier",
      lat: 47.3554,
      lng: 8.5480,
      zoom: 10,
      modelUrl: '',
      projectInfo: [
        {
          name: 'Description',
          description: "The Pavillon Le Corbusier on Lake Zurich is considered an architectural jewel. The building was initiated by Heidi Weber, who commissioned Le Corbusier and oversaw its completion in 1967. It is the last building designed by the important architect and his only building made of steel and glass.",
          image: 'https://pavillon-le-corbusier.ch/wp-content/uploads/2024/03/pavillon-rundgang-1536x1024.jpg'
        },
        {
          name: 'The Building',
          image: 'https://pavillon-le-corbusier.ch/wp-content/uploads/2019/03/07_pavillon-le-corbusier_isu4486b_2500x1720-2000x1376.jpg',
          description: "After extensive renovation, the structure now shines in new splendor and invites visitors to take a unique architectural promenade through its various floors. Since 2019, the pavilion is run as a public museum by the Museum für Gestaltung Zürich on behalf of the City of Zurich.",
        },
      ]
    },
    {
      name: "Barcelona Pavillon",
      lat: 41.3814,
      lng: 2.1228,
      zoom: 10,
      modelUrl: '',
      projectInfo: [
        {
          name: 'Description',
          description: "The Barcelona Pavilion was designed by Ludwig Mies van der Rohe and Lilly Reich as the German Pavilion for the Barcelona International Exhibition, held on Montjuïc.",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/The_Barcelona_Pavilion%2C_Barcelona%2C_2010.jpg/375px-The_Barcelona_Pavilion%2C_Barcelona%2C_2010.jpg'
        },
        {
          name: 'The Building',
          image: 'https://images.adsttc.com/media/images/54c6/a195/e58e/ced6/7000/0007/slideshow/Mies4.jpg?1422303611',
          description: "The Barcelona Pavilion, an emblematic work of the Modern Movement, has been exhaustively studied and interpreted as well as having inspired the oeuvre of several generations of architects. It was designed by Ludwig Mies van der Rohe and Lilly Reich as the German national pavilion for the 1929 Barcelona International Exhibition. Built from glass, steel and different kinds of marble, the Pavilion was conceived to accommodate the official reception presided over by Kings of Spain Alfonso XIII and Victoria Eugenia along with the German authorities.",
        },
      ]
    },
  ],
}));

export default useStore;
