export default function ForFilterEventName(data, researchLowerCase) {

    const regexPattern = researchLowerCase.replace(/\s/g, '');
    console.log(regexPattern);
    let newDataBase = []; //!fonction de filtrage
    
     
      for (let i = 0; i < data.length; i++) {
        let CompareData = data[i].eventName.toLowerCase().replace(/\s/g, '');
        if (CompareData.includes(regexPattern)) {
          const newObject = {
            creator: data[i].creator,
            eventName: data[i].eventName,
            type: data[i].type,
            date: data[i].date,
            hourStart: data[i].hourStart,
            hourEnd: data[i].hourEnd,
            address: data[i].address,
            price: data[i].price,
            website: data[i].website,
            description: data[i].description,
            eventCover: data[i].eventCover,
            users: {
              interUsers: data[i].users.interUsers,
              partUsers: data[i].users.partUsers,
            },
          };
          newDataBase.push(newObject);
        }
        
      }
      return newDataBase
    
    };
    
      