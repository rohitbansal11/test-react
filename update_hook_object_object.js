 setExampleState({...exampleState,  masterField2: {
        fieldOne: "a",
        fieldTwo: {
           fieldTwoOne: "b",
           fieldTwoTwo: "c"
           }
        },
   })


const [infoData, setInfoData] = useState({
    major: {
      name: "John Doe",
      age: "24",
      sex: "M",
    },

    minor:{
      id: 4,
      collegeRegion: "south",

    }

  });
Updating a specific record will require making a recall to the previous State prevState

Here:

setInfoData((prevState) => ({
      ...prevState,
      major: {
        ...prevState.major,
        name: "Tan Long",
      }
    }));
perhaps

setInfoData((prevState) => ({
      ...prevState,
      major: {
        ...prevState.major,
        name: "Tan Long",
      },
      minor: {
        ...prevState.minor,
        collegeRegion: "northEast"

    }));
