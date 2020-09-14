import axios from 'axios';

export const putData = (payload) => {
	return {
		type: 'putData',
		payload: payload
	};
};

export const getSingle = (payload) => {
	return {
		type: 'two',
		payload: payload
	};
};

export const createUser = (payload) => {
    return {
        type: "createUser",
        payload: payload
    }
}

export const search = (payload) => {
    return {
        type: "search",
        payload: payload
    }
}

export const loadData = () => (dispatch, getState) => {
	axios.get('http://dummy.restapiexample.com/api/v1/employees').then((response) => response.data.data).then(json=>dispatch(putData(json)));
};
