import { create } from 'zustand'


const useStore = create((set) => ({
  borderRadius: 16,
  themeScheme: 0,
  showComponents: false,
  showBldrs:true,
  showComments: false,
  circles:[],
  res:[],
  rightDrawer:false,
  leftDrawer: false,
  isNotesOpen: true,
  isPropertiesOpen: true,
  isNavigationOpen: true,
  isTimelineOpen: true,
  showViewer: false,
  colorTheme:0,
  res:[],
  project:0,
  portfolio: {
    name:'Swiss Property',
    colorTheme:0,
    map:'mapbox://styles/aechack2024/cltfvi20g00r401qn6l1shoag',
    initialViewState: {
      latitude: 47.135357,
      longitude:8.589536,
      zoom: 6
    }},
  portfolioNumber: 0,
  portfolios:[
    {
      name:'Swiss Property',
      colorTheme:0,
      map:'mapbox://styles/aechack2024/cltfvi20g00r401qn6l1shoag',
      coordinates: {
        lat:  46.6333,
        lng:  8.589536,
        zoom: 6
      },
      projects:[
        {
          name: "Reitveld-Shroder Huis",
          lat:  52.0865, // Updated latitude for Rietveld Schröder House
          lng:  5.1460,  // Updated longitude for Rietveld Schröder House
          zoom: 10,
          modelUrl:'https://deploy-preview-1010--bldrs-share.netlify.app/share/v/gh/Swiss-Property-AG/Unteraegeri-Public/main/Unteraegeri.ifc',
          projectInfo:[
            {
                "name": 'Description',
                "description": "Designed in 1924. A private residence until 1985. Architectural highlight of De Stijl and iconiclandmark in Utrecht.",
                "image":'https://github.com/user-attachments/assets/3022b281-0ad2-4765-8468-75a0d563bcfb'
            },
            {
              "name": 'The Building',
              "image":'https://github.com/user-attachments/assets/6b66cbf9-4baa-47ae-a270-81ab5c4497ff',
              "description": `Rietveld sought to make the most of the space in and around the house. He did this by incorporating three-dimensionality – height, width and depth – in all facets of the design. Take this lamp, for example.`
          },
          ]
        },
        {
          name: "Bauhaus",
          lat: 51.8416, // Latitude for Bauhaus Dessau
          lng: 12.2425, // Longitude for Bauhaus Dessau
          zoom: 10,
          modelUrl: '', // Add a model URL if applicable
          projectInfo: [
            {
              "name": 'Description',
              "description": "The Bauhaus Dessau, designed by Walter Gropius, is a key work of European modernism and a UNESCO World Heritage site.",
              "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5dq9_5K7vLp-pQr9C1EOJJds9_a1IDqZvA&s'
            },
            {
              "name": 'The Building',
              "image": 'https://media.architecturaldigest.com/photos/564f580510e801045c560583/16:9/w_2560%2Cc_limit/bauhaus-dessau-campus-architecture06.jpg', // Add another image URL if applicable
              "description": `The Bauhaus Dessau is renowned for its revolutionary approach to design and architecture, emphasizing functionality and simplicity.`
            },
          ]
        },
        {
          name: "Pavillon Le Corbusier",
          lat: 47.3554, // Correct latitude for Pavillon Le Corbusier
          lng: 8.5480,  // Correct longitude for Pavillon Le Corbusier
          zoom: 10,
          modelUrl: '', // Add a model URL if applicable
          projectInfo: [
            {
              "name": 'Description',
              "description": "The Pavillon Le Corbusier on Lake Zurich is considered an architectural jewel. The building was initiated by Heidi Weber, who commissioned Le Corbusier and oversaw its completion in 1967. It is the last building designed by the important architect and his only building made of steel and glass. ",
              "image": 'https://pavillon-le-corbusier.ch/wp-content/uploads/2024/03/pavillon-rundgang-1536x1024.jpg'
            },
            {
              "name": 'The Building',
              "image": 'https://pavillon-le-corbusier.ch/wp-content/uploads/2019/03/07_pavillon-le-corbusier_isu4486b_2500x1720-2000x1376.jpg', // Add another image URL if applicable
              "description":  "After extensive renovation, the structure now shines in new splendor and invites visitors to take a unique architectural promenade through its various floors. Since 2019, the pavilion is run as a public museum by the Museum für Gestaltung Zürich on behalf of the City of Zurich.",
            },
          ]
        },
        {
          name: "Barcelona Pavillon",
          lat: 41.3814, // Correct latitude for Barcelona Pavilion
          lng: 2.1228,  // Correct longitude for Barcelona Pavilion
          zoom: 10,
          modelUrl: '', // Add a model URL if applicable
          projectInfo: [
            {
              "name": 'Description',
              "description": "The Barcelona Pavilion was designed by Ludwig Mies van der Rohe and Lilly Reich as the German Pavilion for the Barcelona International Exhibition, held on Montjuïc.",
              "image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/The_Barcelona_Pavilion%2C_Barcelona%2C_2010.jpg/375px-The_Barcelona_Pavilion%2C_Barcelona%2C_2010.jpg'
            },
            {
              "name": 'The Building',
              "image": 'https://images.adsttc.com/media/images/54c6/a195/e58e/ced6/7000/0007/slideshow/Mies4.jpg?1422303611', // Add another image URL if applicable
              "description": "The Barcelona Pavilion, an emblematic work of the Modern Movement, has been exhaustively studied and interpreted as well as having inspired the oeuvre of several generations of architects. It was designed by Ludwig Mies van der Rohe and Lilly Reich as the German national pavilion for the 1929 Barcelona International Exhibition. Built from glass, steel and different kinds of marble, the Pavilion was conceived to accommodate the official reception presided over by Kings of Spain Alfonso XIII and Victoria Eugenia along with the German authorities.",
            },
          ]
        },
      ]
    },
    {
      name:'Prop Tech Denmark Challenge',
      colorTheme:1,
      map:'mapbox://styles/aechack2024/cltaoevq300uu01pje4rwdi24',
      coordinates: {
        lat: 55.6811,
        lng: 12.5981,
        zoom: 7
      },
      projects:[
        {
          name: "BloxHub Sample project",
          lat: 55.672278,
          lng: 12.5785,
          projectInfo:[
            {
                "name": "http://example.com/buildings/BB/ESP1",
                "label": "Replacement of light bulbs on the back stairss and in the basement",
                "investment": "1000",
                "calculatedAnnualSavings": "2800",
                "simpleRepaymentPeriod": "0.4"
            },
          ]

        },
      ]
    ,
    }
  ],
  setNotes: (value) => set(() => ({ notes: value})),
  setColorTheme: (value) => set(() => ({ colorTheme: value})),
  setCircles: (value) => set(() => ({ circles: value})),
  setBorderRadius: (value) => set(() => ({ borderRadius: value})),
  setThemeScheme: (value) => set(() => ({ themeScheme: value})),
  toggleShowComponents: () => set((state) => ({ showComponents: !state.showComponents})),
  toggleShowComments: () => set((state) => ({ showComments: !state.showComments})),
  toggleRightDrawer: () => set((state) => ({ rightDrawer: !state.rightDrawer})),
  toggleLeftDrawer: () => set((state) => ({ leftDrawer: !state.leftDrawer})),
  setRes: (value) => set(() => ({ res: value })), // Function to update 'res'
  setProject: (value) => set(() => ({ project: value })), // Function to update 'res'
  setPortfolio: (value) => set(() => ({ portfolio: value })), // Function to update 'res'
  setPortfolioNumber: (value) => set(() => ({ portfolioNumber : value })), // Function to update 'res'
  toggleShowViewer: () => set((state) => ({ showViewer: !state.showViewer })),
  toggleShowBldrs: () => set((state) => ({ showBldrs: !state.showBldrs })),
}));

export default useStore;
