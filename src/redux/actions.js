import axios from 'axios';

export const fetchDataFromAPI = (id) => dispatch => {
    axios.get('https://covidtracking.com/api/v1/us/daily.json')
        .then(res => {
            const resposeApi = res.data
            const newArr = [] 
            resposeApi.map((item, idx) => {
                if(idx < 30){
                    newArr.push({date: item['date'], value: item[id]})
                }    
            })
            dispatch({
                type: 'DATA_FETCHED',
                payload: newArr
            })
        })
}